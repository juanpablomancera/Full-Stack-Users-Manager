import React from "react"
import "../components_styles/header.css"
import {Link} from "react-router-dom";

export default function HeaderListUsers(){
    return(
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none',color:'#d4d4d2' }}><h1 className="title">Users Manager</h1></Link>

            <ul className="sections">
                <li>
                    <Link to="/" style={{ textDecoration: 'none'}}>show all users</Link>
                </li>
            </ul>
        </div>
    )
}