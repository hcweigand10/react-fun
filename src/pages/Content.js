import React, {useState} from 'react'
import {Link} from "react-router-dom"


const Content = () => {

    return (
        <div className='container' style={{backgroundColor: "red"}}>
             <h3>Content</h3>
             <Link to="/">Home</Link>
        </div>
    )
}

export default Content