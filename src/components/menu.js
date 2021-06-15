import React from "react";
import { Link } from "gatsby";
import Burger from "./burger";
import "./menu.scss";

export default function Menu({text}){
    return(
        <nav className="menu">
            <ul className="menu__ul">
                <li className="menu__li--icon">
                    <Link to="/" className="icon">
                        <img className="icon__icon" alt="Icon for the blog" src="/icon.png"/>
                    </Link>
                </li>
                <p className="menu__li--text">{text}</p>
                <li className="menu__li--burger">
                    <Burger />
                </li>
            </ul>
        </nav>
    )
}