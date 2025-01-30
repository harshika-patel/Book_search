import './footer.scss';
const Footer=()=>{
return(
    <footer className="footer">
        <div className='footer__list'>
            <ul className="footer__list__item">
                <li><h2>Harshika Patel</h2></li>
                <li>Contact Details: 548-884-0211</li>
                <li>Email address: harshikapatel@gmail.com</li>
                <li>Address: 123 street, Waterloo canada</li>
            </ul>
            <ul className="footer__list__item">
                <li><h2>Helana Youssef</h2></li>
                <li>Contact Details: 548-884-0211</li>
                <li>Email address:Helanayoussef@gmail.com</li>
                <li>Address: 456 street, London canada</li>
            </ul>
        </div>
        <p className="footer__para">© 2025 Book Search</p>
       
    </footer>
)
}
export default Footer;