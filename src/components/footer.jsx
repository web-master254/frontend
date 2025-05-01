
import '../css/footer.css'
 function Footer(props){
    return(
        <footer>
            <div className="quick-links">
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li><a href="£">Facebook</a></li>
                    <li><a href="£">WhatsApp</a></li>
                    <li><a href="£">Twitter</a></li>
                    </ul>
            </div>
            <div className="copy-rights">
                <small>Expense Tracker copyrights &copy; 2025 all Rights reserved. Developed by Dominic Mokaya Rosana.</small>
            </div>
        </footer>
    )
}

export default Footer;