import React from "react";
import { NavbarItems } from "./NavbarItems";
import './Navbar.css';
import logo from './Logo.png'

export default function Navbar(){
    // state = { clicked: false }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }


    return <nav className="NavbarItems">
        <img src={logo}  /> 
        <div className="menu-icon">
        </div >
        <div className="navigation" >
            {NavbarItems.map(( item, index) => {
                return (
                        <a key={index} className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                )
            })}
        </div>
    </nav>
}