import React, { useState }  from 'react'
import axios from 'axios'
import Constants from './Constants.json'
import {useNavigate} from 'react-router-dom'


export default function SignupView() {

    const [signupProcessState, setSignupProcessState] = useState("idle");
    const navigate = useNavigate();
    
 
    const handleSignupSubmit= async (event) => {
        try {
        event.preventDefault();
        setSignupProcessState("processing")
       
            const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', {
                username: event.target.username.value,
                password: event.target.password.value,
                email: event.target.email.value
            })
            console.log(result);
            
            setSignupProcessState("signupSuccess")
            setTimeout(() => {
               navigate('/login', {replace: true});
            }, 1500)

        } catch (error) {
            console.error(error);  
            setSignupProcessState("signupFailure")
        
           }
        }
        let signupUIControl=null; 
        switch (signupProcessState) {
            case "idle":
                signupUIControl= <button type="submit" >Signup</button>
                break;
            case "processing":
                signupUIControl= <span style={{color:"blue"}}>Processing...</span>
                break;
            case "signupSuccess":
                signupUIControl= <span style={{color:"green"}}>Sign up successful!</span>
                break;
            case "signupFailure":
        
             signupUIControl= <span style={{color:"red"}}>Sign up failed!</span>
             break;
            default:
        }   
        
    
            return (
        <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSignupSubmit}>
            <div>
                Username <br/>
                <input type="text" name="username"></input>
        </div>
        <div>
                Email <br/>
                <input type="text" name="email"></input>
        </div>
        <div>
                Password <br/>
                <input type="text" name="password"></input>
        </div>
        <div>
                {signupUIControl}
        </div>
        </form>
        </div>
        

    )
    
}