import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AuthForm from './components/Auth/AuthForm';
import EmailVerification from './components/pages/EmailVerification';
import HomePage from './components/pages/HomePage';


function App() {
  return <>
  <Routes>
  <Route path='/' exact element={<AuthForm />}></Route>
  <Route path='/home' exact element={<HomePage/>}></Route>
  <Route path='/emailverification' exact element={<EmailVerification/>}></Route>
  </Routes>
  </>
}

export default App;
