import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AuthForm from './components/Auth/AuthForm';
import HomePage from './components/pages/HomePage';


function App() {
  return <>
  <Routes>
  <Route path='/' exact element={<AuthForm />}></Route>
  <Route path='/home' exact element={<HomePage/>}></Route>
  </Routes>
  </>
}

export default App;
