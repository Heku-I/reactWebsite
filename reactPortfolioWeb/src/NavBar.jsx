import { useState } from "react"
import './NavBar.css'

export function NavBar(){

    return(
        <ul className="navList">
            <div className="logoDiv">
            <li className="logo">Rani Dev</li>
            </div>
            <div className="linkDiv">
            <li className="navLink">Home</li>
            <li className="navLink">Project</li>
            <li className="navLink">Contact</li>
            </div>
        </ul>
    )

} 