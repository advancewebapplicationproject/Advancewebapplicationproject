import React from 'react'
import './App.css'
import Home from './Home'
import LoginView from './LoginView'
import SignupView from './SignupView'
import ProtectedView from './ProtectedView'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState} from 'react';

function App() {
  const [userJwt, setUserJwt] = useState(null);
  
  let authRoutes = (
    <>
   <Route path='/login' element= {<LoginView login={ newJwt => 
    setUserJwt(newJwt) } /> } />
        <Route path='/signup' element= { <SignupView /> } />
  </>
  );

  if (userJwt != null) {
    authRoutes = <Route path='/protected' element= { <ProtectedView jwt={userJwt}/> }
    />
  }
  return (
    <div>
      <h1>React auth demo</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home userLoggedIn={userJwt != null} /> }  />
        {authRoutes}
       
        <Route path="*" element= { <Home userLoggedIn={userJwt != null} /> } />
      
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App;



















/*  function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/my-protected-resource", {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + btoa('userOne:passwordOne')
  }
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  } ,

       []);

  return (
    <div>
      {backendData.users ? (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}

export default App;
*/

