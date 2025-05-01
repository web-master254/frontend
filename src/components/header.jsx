import '../css/header.css'
import { Link } from 'react-router-dom'

 function Header(props){
    return(
        <div className="header">
            <div className="headline">
                <h2>Expense Tracker</h2>
            </div>
            <div className="nav-bar">
             <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/income'>Income</Link></li>
                <li><Link to='/expenses'>Expenses</Link></li>
                <li><Link to='/about'>About Us</Link></li>
             </ul>
            </div>
        </div>
    )
}

export default Header;