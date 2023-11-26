import React from "react"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div>
             This is the home view
        <div>
        <Link to = "signup">Sign up</Link><br/>
        <Link to = "login">Login</Link><br/>
              
            </div>
        </div>
    )
}