import React from "react"
import { Link } from "react-router-dom"


export default function Home(props) {
    return (
        <div>
             This is the home view
        <div>
            user login status : {props.userLoggedIn ? "is logged in" :  "not logged in"  } 
            </div>
            <div>
                {props.userLoggedIn ? <Link to = "protected">Go to protected view</Link> : <>
                <Link to = "signup">Sign up</Link><br/>
        <Link to = "login">Login</Link><br/>
                </>
                }
        
              
            </div>
        </div>
    )
}