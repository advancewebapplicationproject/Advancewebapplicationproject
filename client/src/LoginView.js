import React from "react";
import axios from "axios";
import Constants from "./Constants.json";
import { useNavigate } from "react-router-dom";

export default function LoginView(props) {
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        Constants.API_ADDRESS + "/JWTLogin",
        null,
        {
          auth: {
            username: event.target.username.value,
            password: event.target.password.value,
          },
        }
      );
      console.log(result);
      const receivedJWT = result.data.token;
      localStorage.setItem("jwt", receivedJWT);
      props.login(receivedJWT);

      navigate("/protected", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          Username <br />
          <input type="text" name="username" />
        </div>
        <div>
          Password <br />
          <input type="text" name="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
