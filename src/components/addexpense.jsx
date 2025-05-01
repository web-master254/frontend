import '../css/addexpense.css'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Success from './success';
import '../css/success.css'




 function Add_expense(props){
    const navigate = useNavigate();

    const[expense_,setExpense] = useState('');
    const [amount_,setAmount]= useState('');
    const [month_, setMonth] = useState('');
    const[loading,setLoading] = useState(false)

    
   function formatted_data(){
    return {
        expense: expense_,
        amount: amount_,
        month: month_
    }
   }


function animate(){
return (
    <Success/>
)
}


    async function add_expenses_f(data){
        try{
         setLoading(true);
         const response = await fetch('http://localhost:5000/expenses/add',{
            method:'POST',
            headers : {"content-type":"application/json"},
            body:JSON.stringify(data)
         })
         if(response.ok){
          clear_inputs();
          window.history.go(0)
         }
        }finally{
           setLoading(false)
          
        }
    }

    

   function clear_inputs(){
    setAmount('')
    setExpense('')
    setMonth('')
   }


    function closeWindow(){
        const close_tap = document.getElementById('add-window');
        close_tap.style.display = 'none';
       
    }
    return(
        <>
        <Success/>
        <div id="add-window">
            <div className="closing-tap">
                <span id="close-page" onClick={closeWindow}>&times;</span>
                </div>
                <div className="form-section">
                   <div className='headline'>
                   <h3>Add Expense</h3>
                   </div>
                    <form>
                    <div className='input-label'>
                        <div className="label">
                            <label>
                                Expense type
                            </label>
                        </div>
                        <div className="expense-input">
                            <select
                            value = {expense_}
                            onChange={(e)=>setExpense(e.target.value)}
                            
                           >
                            <option>--Option--</option>
                            <option>Rent</option>
                            <option>WiFi</option>
                            <option>Water</option>
                            <option>Electricity</option>
                            <option>Food</option>
                            <option>Medical</option>
                            <option>Others</option>
                           </select>
                        </div>
                        </div>
                        <div className='input-label'>
                        <div className="label">
                            <label>
                                Month
                            </label>
                        </div>
                        <div className="expense-input">
                        <select
                            value = {month_}
                            onChange={(e)=>setMonth(e.target.value)}
                            >
                                <option>--Option--</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                           
                        </div>
                        </div>
                        <div className='input-label'>
                        <div className="label">
                            <label>
                                Amount
                            </label>
                        </div>
                        <div className="expense-input">
                        <input
                            value = {amount_}
                            onChange={(e)=> setAmount(e.target.value)}
                            placeholder="Amount in ksh"
                            />
                        </div>
                        </div>
            
                    </form>
                    <div className='buttons'>
                        <button
                        id="add-btn"
                        onClick={()=>add_expenses_f(formatted_data())}
                        >Add Expense</button>
                        <button
                        id='update-btn'
                        onClick={()=>{navigate('/expenses')}}
                        >Update Record</button>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Add_expense;