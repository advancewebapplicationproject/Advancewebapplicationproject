import React from 'react'
import axios from 'axios'
import Constants from './Constants.json'


export default function SignupView() {
    const handleSignupSubmit= async (event) => {
        try {
        event.preventDefault();
        
        console.log(event.target.username.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        

       
            const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', {
                username: event.target.username.value,
                password: event.target.password.value,
                email: event.target.email.value
            })
            console.log(result);

        } catch (error) {
            console.error(error);
           }
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
                <button type="submit" >Sign up</button>
        </div>
        </form>
        </div>
        

    )
    
}