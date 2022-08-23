import React, {useState} from 'react'
import {Link} from "react-router-dom"


const Navbar = (props) => {

    return (
        <nav>
            <ul>
                <li><Link to="/content">Content</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><button onClick={props.logOut}>Click me</button></li>
            </ul>
        </nav>
    )
}

export default Navbar