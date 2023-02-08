import React, { useRef } from 'react';
import classes from './AuthForm.module.css'
const AuthForm=()=>{
   const emailInputRef=useRef('');
   const passwordInputRef=useRef('');
   const confirmPasswordInputRef=useRef('');
   
   const submitHandler=(event)=>{
      event.preventDefault();
      if(passwordInputRef.current.value!==confirmPasswordInputRef.current.value){
        alert('Passwords do not match');
        passwordInputRef.current.value='';
        confirmPasswordInputRef.current.value='';
       }
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHg6kh04-hUMuA19EUhRG4RuusNO4taTU',{
        method:'POST',
        body:JSON.stringify({
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
            returnSecureToken:true
        }),
        headers: {
            "Content-Type": "application/json",
          }
      }).then((res)=>{
        if(res.ok){
            console.log('User has successfully signed up')
        }else{
            return res.json().then((data)=>{
                console.log(data.message);
            })
        }
      })
   }
   return (<form onSubmit={submitHandler} className={classes.auth}>
    <h1>Sign up</h1>
    <div className={classes.control}>
   <label htmlFor="email">Email</label>
   <input type="email" id="email" ref={emailInputRef} required></input></div>
   <div className={classes.control}>
   <label htmlFor="password">Password</label>
   <input type="password" id="password" ref={passwordInputRef} required></input></div>
   <div className={classes.control}>
   <label htmlFor="confirmPassword">Confirm Password</label>
   <input type="password" id="confirmPassword" ref={confirmPasswordInputRef} required></input></div>
   <button type="submit" className={classes.actions}>Sign up</button>
   </form>)
}
export default AuthForm;