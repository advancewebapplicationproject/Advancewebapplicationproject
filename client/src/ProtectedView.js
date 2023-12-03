import React from "react"
import jwt from 'jsonwebtoken'



export default function ProtectedView(props) {
    const decodedJWT = jwt.decode(props.jwt);
    console.log(decodedJWT);
    return (
        <div class="protected">
                <h2>protected view</h2>
                <div>
                    Decoded JWT data from payload : <br/>

                </div>
           
        </div>
    )
}