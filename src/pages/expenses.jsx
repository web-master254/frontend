import Header from "../components/header"
import Expense_table from "../components/expense_table"
import Footer from "../components/footer"
import Add_expense from "../components/addexpense"
import Success from "../components/success"

function Expenses_page(props){
    return(
          <>
          <Header/>
          <Add_expense/>
          <Expense_table/>
          <Footer/>
          </>
    )
}

export default Expenses_page;