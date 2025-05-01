import './css/media.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './css/description.css'
import Home from './pages/home';
import Income_page from './pages/incomepage';
import Expenses_page from './pages/expenses';
import About_page from './pages/about';
import PageNotFound from './pages/notfound';
import "./css/index.css"
import Add_expense from './components/addexpense';

function App(){
  return (
    
    <BrowserRouter basename='/frontend'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ='/add-expense' element={<Add_expense/>}/>
      <Route path="/expenses" element={<Expenses_page/>}/>
      <Route path="/income" element={<Income_page/>}/>
      <Route path="/about" element={<About_page/>}/>
      <Route path="*" element ={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;