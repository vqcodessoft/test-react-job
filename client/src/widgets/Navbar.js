import React from "react";
import {NavLink } from "react-router-dom"

function App() {
    return (
        <>
            <div className='nav'>
                <ul>
                    <li><NavLink to="" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/company" activeClassName="active">Company-Add</NavLink></li>
                    <li><a to="/" activeClassName="active">Person-Add</a></li>
                    <li><a to="/" activeClassName="active">About</a></li>

                </ul>
            
            </div>
        </>
    )
}

export default App;
