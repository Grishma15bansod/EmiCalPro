import React, { useState, useEffect } from 'react';
import "./EmiFm.css"
import EmiTaFm from './EmiTaFm';
import ResFm from './ResFm';

const EmiFm = () => {
    const [previousData, setPreviousData] = useState([]);
    const [dates, setDates] = useState([]);
    const [emidates, setEmidates] = useState([]);
    const [toggle, setToggle] = useState(true);
    //const [toggleHistory,setToggleHistory]=useState(true);
    const [data, setData] = useState({
        amount: "",
        rate: "",
        months: ""
    });

    useEffect(() => {
        let datesArray = [];
        for (let i = 1; i <= data.months; i++) {
            datesArray.push({
                month: i
            })
        }
        setDates(datesArray)})

    // }, [dates.months]);

    const calculate = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
 
    const handsubmit = (event) => {
        event.preventDefault();
        const newRecord = { ...data };
        const interests = (data.amount * (data.rate * 0.01)) / data.months;
        const emipermonth = ((data.amount / data.months) + interests).toFixed(2);
        let temperyarray=[];
        for (let i = 1; i <= data.months; i++) {
            temperyarray.push({
                month: emipermonth
            });
        }
        setEmidates(temperyarray);

        console.log(emidates)
        setPreviousData([...previousData, newRecord]);
        setData({
            amount: "",
            rate: "",
            months: ""
        })
        
        console.log(emidates)
        setToggle(!toggle);
    }
    console.log(emidates ,"by using hook")
    let goBack = () => {
        setToggle(!toggle);
      };
    return (
        <div className='Mdiv'>
            {toggle?(
                <div className="cal">
                <h1>EMI Calculator</h1>
                <form onSubmit={handsubmit} id="sample-form" method="post" >
                    <p>Amount (₹):
                        <input id="amount" type="number" name='amount' value={data.amount} placeholder="Please Enter Your Amount" onChange={calculate} />
                    </p>
                    <p>Interest Rate  :
                        <input id="rate" type="number" name='rate' value={data.rate} placeholder="Please Enter your Rate" onChange={calculate} />
                    </p>
                    <p>Months to Pay :
                        <input id="months" type="number" name='months' value={data.months} placeholder="Please Enter your Month" onChange={calculate} />
                    </p>
                    <button type="submit">Submit</button>
                </form>
            </div>
            ):(
                <EmiTaFm emitable={emidates} goBack={() => goBack()} />
            )}
        
            <button 
                onClick={() => setToggle(!toggle)}
                class="btn btn-primary mb-5 btn2">
                Click here 
            </button>
            {toggle && (
                <ResFm list={previousData} emitable={emidates} />
            )}
        </div>
    )
}

export default EmiFm;