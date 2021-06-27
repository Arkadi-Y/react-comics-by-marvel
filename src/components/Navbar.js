import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
function Navbar(){
    const [menuClick,setClick]=useState(false);
    const [button , setButton]=useState(true);
    const menuClickHandler =()=>setClick(!menuClick);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };


    useEffect(()=>{
        showButton();
    },[]);


    window.addEventListener('resize',showButton);
return (
    <>
    <nav className="navbar container-fluid">
        <div className="navbar-container">
            <Link to="/" className="navar-logo">
            <img src="marvel.logo.png" className="MarvelLogo fa-typo3 "  />
            </Link>
            <div className='menu-icon' onClick={menuClickHandler}>
            <i className={menuClick ? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={menuClick ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className = 'nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className = 'nav-links' onClick={closeMobileMenu}>
                        Comics
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='https://github.com/Arkadi-Y' target="_blank" className = 'nav-links' onClick={closeMobileMenu}>
                        About
                    </a>
                </li>

            </ul>
           </div>
    </nav>

    </>


)
}
export default Navbar