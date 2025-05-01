import '../css/expenses.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


 function Expense_table(props){
  

    const[expenses,setExpenses] = useState([]);
  const [loading,setLoading] = useState(false);
  const[query,setQuery] = useState('')

  const nav = useNavigate()
 // API Base URL

 const BASE_URL = "http://localhost:5000/"
  //function for fetching all expenses from backend...
  
  async function get_expenses(url,path){
   try{
    setLoading(true)
    const response = await fetch(url+path);
    const all_expenses = await response.json();
    
    if(response.ok){
    return all_expenses
    }else{
      alert('failed to get data')
    }
  }finally{
    setLoading(false)
  }
}

//function for fetching a filtered request.

function get_some_expenses(sort){
if(sort == ''){
    return expenses
}else{
return expenses.filter((d)=> d.type.toLowerCase() == sort.toLowerCase() || d.month.toLowerCase() == sort.toLowerCase());
}}

//delete record function

async function delete_expense(id_){
    try{
        setLoading(true)
        const response = await fetch(BASE_URL+'expenses/delete/'+id_,
            {
                method:'DELETE',
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({id:id_})
            }
        )
        if(response.ok){
         history.go(0)
        }else{
           ()=>alert('failed to delete a record' ,response.body)
        }

    }finally{

        setLoading(false)
    }
}
//useEffect section.... All of them in this section....Thank you
  useEffect(
    ()=>{
      get_expenses(BASE_URL,'expenses').then(
        (d)=>setExpenses(d)
      )
    },
    []
  )


  const data = expenses.length > 0 ? expenses.map(
    (e)=> {
      return (<tr key={e.id}>
        <td>{e?.id}</td>
        <td>{e?.type}</td>
        <td>{e?.month}</td>
        <td>{e?.date}</td>
        <td>{e?.amount }.00</td>
        <td>
            <button
            onClick={()=>delete_expense(e.id)}
            className='delete-btn'>Delete</button>
        </td>
      </tr>)
    }
  )  : <tr><td colSpan='6'>No expenses found</td></tr>

  // setting up a loader if loading is true, else, the loading text isn't displayed.
 
  function openAddForm(){
    const add_page = document.getElementById('add-window')
     add_page.style.display = 'block';
     document.body.style.backgroundColor = "black"
     
  }
  

    return (
        
        <div className="main-1">
            <div className="description-1-table">
                <h5>Total Amount Spent: {expenses.map((e)=>  e.amount).reduce((t,i)=>t+i,0)}.00</h5>
                <h5>Total number of records: {expenses.length} </h5>
                <div className='inputs'>
                  <button
                    onClick ={()=>window.print()}
                  >Print</button>
                  <button
                  id="add-expense-btn"

                  onClick={openAddForm}
                  >Add expense</button>
                <input 
                className="search-input"
                value = {query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder = 'Search for expense record'
                />
                <button 
                className="search-btn"
                onClick={()=>setExpenses(get_some_expenses(query))}
                >Search</button>
            </div>
            </div>
            <div className="expenses-table">
                <table>
                    <thead>
                        <tr>
                            <th>Ref No</th>
                            <th>Expense</th>
                            <th>Month</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expense_table;