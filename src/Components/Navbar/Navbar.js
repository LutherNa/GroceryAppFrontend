import React from "react";
import { NavbarItems } from "./NavbarItems";
import './Navbar.css';

export default function Navbar(){
    // state = { clicked: false }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }


    return <nav className="NavbarItems">
        <h1 className="navbar-logo">Vanq App</h1>
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