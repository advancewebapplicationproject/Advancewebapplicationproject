import React, { useState } from "react";
import jwt from 'jsonwebtoken';
import { Link } from "react-router-dom";
import axios from "axios";
import constants from './Constants.json';

export default function BaseProtectedView(props) {
  const [userTodos, setUserTodos] = useState([]);

  const decodedToken = jwt.decode(props.jwt);

  console.log(decodedToken);

  const loadDataWithJWT = async () => {
    try {
      const results = await axios.get(constants.API_ADDRESS + '/todosJWT', {
        headers: {
          Authorization: 'Bearer ' + props.jwt
        }
      });
      console.log("results", results.data);
      setUserTodos(results.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="protected">
      <h2>Base protected view</h2>
      <div>
        Decoded JWT data from payload: <br />
        User Id: {decodedToken.user.id} <br />
        User email: {decodedToken.user.email} <br />
      </div>
      <div>
        <button onClick={loadDataWithJWT}>Click to load user todos with JWT</button>
      </div>
      <div>
        <table>
          <tbody>
            {userTodos.map(t => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>{t.dueDate}</td>
                <td>{t.statue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/">Go back to home view</Link>
        <div>
          <button onClick={props.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
