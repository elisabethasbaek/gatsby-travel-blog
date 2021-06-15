/* import { Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react"; */
import { Link } from "gatsby";
import "./nav.scss";
import React from "react";

export default function Nav(){
    /* var [content, setContent] = useState([]);

    useEffect(
        function(){
            axios.get("http://localhost:1337/Categories") 
                .then(function(response){
                    setContent(response.data);
                })
        }, [setContent]);  */

    return(
        <nav className="nav">
            <ul>
                <li><Link to="/categories" className="all">All categories</Link></li>
                {content.map(function(single){
                    return(
                        <li>
                            <Link className="category" to={"/categories/" + single.id}>{single.kategorinavn}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}