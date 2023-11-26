import React from 'react'
import './App.css'
import Home from './Home'
import LoginView from './LoginView'
import SignupView from './SignupView'
import ProtectedView from './ProtectedView'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>React auth demo</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home /> }
        />
        <Route path='/login' element= { <LoginView /> }
        />
        <Route path='/signup' element= { <SignupView /> }
        />
        <Route path='/protected' element= { <ProtectedView /> }
        />
      
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

