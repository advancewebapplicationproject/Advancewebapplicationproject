import React from "react"


export default function SignupView() {
    const handleSignupSubmit= (event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
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