import React, { useState } from "react";
import HisEmiFm from "./HisEmiFm";
import "./StyFm.css";
const ResFm = (props) => {
  const [emidetail, setEmidetails] = useState([]);
  const [toggle1,setToggle1]=useState(true)
  function showTable(amount, rate, month) {
    const intrst = (amount * (rate * 0.01)) / month;
    const emipermonth = ((amount / month) + intrst).toFixed(2);
    var temparray = [];
    for (let i = 1; i <= month; i++) {
      temparray.push(emipermonth);
    }

    setEmidetails(temparray);
    setToggle1(!toggle1)
  }
  let goBack = () => {
    setToggle1(!toggle1);
  };
  
  console.log(emidetail, "history");
  return (
    <>
      {toggle1 ? (
      
      <div className="container">
        {props.list.map((value, index) => {
          return (
            <div className="box">
              History{index + 1} || Amount: {value.amount} |Rate of Interest:{value.rate} |
              Months: {value.months}
              <button onClick={() => { showTable(value.amount, value.rate, value.months);setToggle1(!toggle1)}}>
                Click to see EMI/Month</button>
                <button >click</button>
            </div>
          );
        })}
      </div>): (
        <HisEmiFm  emitable={emidetail} goBack={goBack}/>
      )}
    </>
  );
};
export default ResFm;
