import React, {useState} from 'react'
import {Link} from "react-router-dom"

const Home = () => {

    return (
        <div className='container' style={{backgroundColor: "salmon"}}>
             <h3>title</h3>
             <Link to="/content">Content</Link>
        </div>
    )
}

export default Home