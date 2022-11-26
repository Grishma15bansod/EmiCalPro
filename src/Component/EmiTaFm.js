import React from 'react';
function EmiTaFm (props){
    return(
        <div>
            <button className="goback" onClick={props.goBack}> Go Back</button>
            <table border="2px">
                <tr>
                <th>TOTAL MONTH</th>
                <th>EMI PER MONTH</th>
                </tr>
                  {props.emitable.map((items, index) => (
                <tr >
                    <td>Month {index + 1}</td>
                    <td> {items.month}</td>
                    {console.log(items)}
                </tr>
                ))}
            </table>

        </div>
    )
}
export default EmiTaFm;