import React from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import LoginView from './LoginView';
import SignupView from './SignupView';
import ProtectedView from './ProtectedView';
import BoxDetails from './BoxOptions';
import Receiver from './Receiver';
import Staff from './Staff';
import Sender from './Sender';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {
  const [userJwt, setUserJwt] = useState(jwtFromStorage);

  let authRoutes = (
    <>
      <Route
  path='/login'
  element={
    <LoginView
      login={ newJwt => {
        setUserJwt(newJwt)
        window.localStorage.setItem('appAuthData', newJwt);
      }}
    /> 
  }
/>
      <Route path='/signup' element={<SignupView />} />
    </>
  );

  if (userJwt != null) {
    authRoutes = <Route path='/protected' element={<ProtectedView jwt={userJwt} logout={() => {
      setUserJwt(null);
      window.localStorage.removeItem('appAuthData');
    }} />} />;
  }

  return (
    <div>
      <h1>React auth demo</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home userLoggedIn={userJwt != null} />} />
          <Route path='/about' element={<AboutUs />} />
          {authRoutes}
          <Route path="*" element={<Home userLoggedIn={userJwt != null} />} />
          <Route path='/sender' element={<Sender />} />
          <Route path='/receiver' element={<Receiver />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/box-details/:boxIndex' element={<BoxDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
