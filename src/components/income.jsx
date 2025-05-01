import { useState,useEffect } from 'react'
import '../css/income.css'

 function Income(props){

  
    return(
        <div className="income">
          <div className="income-description">
            <h5>Total income: </h5>
            <h5>Income last month: </h5>
            <div className='inputs'>
            <input 
            placeholder="search income by month"
            value = {props.name}
            />
            <button
            onClick={()=>get_expenses(BASE_URL,'expenses')}
            className="income-search-btn">Search</button>
          </div>
          </div>
          <div className="income-table">
            <table>
                <thead>
                    <tr>
                        <th>Ref No</th>
                        <th>Date</th>
                        <th>Income Month</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
          </div>
        </div>
    )
}
export default Income;