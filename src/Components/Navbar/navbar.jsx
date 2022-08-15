import './navbar.css';

function Navbar(props) {
    return ( 
           
            <ul className='items'>
                <li><a onClick={ () => props.goToSection("services")}>Services</a></li>
                <li><a onClick={ () => props.goToSection("contact")}>Contact</a></li>
            </ul>
        
    
     );
}

export default Navbar;