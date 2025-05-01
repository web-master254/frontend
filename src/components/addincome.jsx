import { useEffect, useState } from "react"


function Add_income(props){

    const[type_, setType]=useState('');
    const [month_,setMonth]=useState('');
    const [amount_, setAmount]= useState(0);
    const[loading,setLoading] = useState(false)
 async function add_income(){
    try{
        setLoading(true)
    const response = await fetch(
        "http://localhost:5000/income/add",
        {
            method:"POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify({month:month_,type:type_,amount:amount_})
        }
    )
    if(response.ok){
        alert('data posted successfully...')

    }else{
        alert("failed to add income")
    }
 }catch{
    (err)=>alert(err)
 }finally{
setLoading(false);
empty_fields()
 }
}

function empty_fields(){
    setType('')
   setAmount('')
   setMonth('')
}

if(loading){
    return(
        <h3>Please Wait...</h3>
    )
}

function verify_and_post(){
    if(!type_ && !amount_ && !month_){
        alert("Fill in all the fields")
    }else{
        add_income()
    }
}
    return(
        <div className="add-income-window">
            <div className="close-btn">X</div>
            <div className="form-section">
                <form>
                    <div className="form-inputs">
                        <div className="labels">
                            <h3>Month</h3>
                        </div>
                        <div className="inputs">
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
                    <div className="form-inputs">
                        <div className="labels">
                            <h3>Type of Income</h3>
                        </div>
                        <div className="inputs">
                            <select
                            onChange={(e)=>setType(e.target.value)
                            }
                            value={type}
                            >
                                <options>Salary</options>
                                <options>Profits</options>
                                <options>Others</options>
                            </select>
                        </div>
                    </div>
                    <div className="form-inputs">
                        <div className="labels">
                            <h3>Amount</h3>
                        </div>
                        <div className="inputs">
                            <input
                            onChange={(e)=>setAmount(e.target.value)}
                            type="text"
                            placeholder="amount in Ksh"
                            value = {amount_}
                            />
                        </div>
                    </div>
                </form>
                <div className="btns">
                    <button
                    
                    >Add</button>
                    <button
                    
                    >Update</button>
                </div>
            </div>
        </div>
    )
}

export default Add_income;