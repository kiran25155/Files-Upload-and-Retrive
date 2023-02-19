import React, { useState } from "react";
import { useEffect } from "react";
import Plot from "react-plotly.js";
const EnterValues=()=>{
    const [x,setx]=useState(false)
    const [xValue,setxValue]=useState([]);
    const [yValue,setyValue]=useState([]);
    let month,expenses;
    const addMonth=(e)=>{
      e.preventDefault();
     month=e.target.value;
     
    }
    const addExpenses=(e)=>{
      e.preventDefault();
     expenses=e.target.value;
    }
    const Expenses=(e)=>{
        setx(!x);
      e.preventDefault();
      xValue.push(month);
      yValue.push(expenses);
      console.log(xValue);
      console.log(yValue);
    }
    useEffect(()=>{
    },[xValue,yValue]);
    return(
        <>
         <form style={{textAlign:'center'}} onSubmit={Expenses}>
          <div>Enter month:</div>
          <div><input type='name' name='month' onChange={addMonth}></input><br/></div>
          <div>Enter expenses:</div>
          <div><input type='number' onChange={addExpenses}></input><br/></div>
          <button >Submit</button>
          </form>

      {x?<Plot
        data={[
          {
            x:xValue,
            y:yValue,
            type: 'scatter',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 820, height: 500, title: 'Expenses'} } />:null}
{!x?(<Plot
        data={[
          {
            x:xValue,
            y:yValue,
            type: 'scatter',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 820, height: 500, title: 'Expenses'} } />
   
):null}
    </>
    )
}
export default EnterValues;
