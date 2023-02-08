import React, { useState } from "react";
import {Link} from 'react-router-dom';
import UserProfileForm from "./UserProfileForm";

const HomePage=()=>{
const[showForm,setShowForm]=useState(false)
const showFormHandler=()=>{
    setShowForm(true);
}
return(<div><h1>Welcome to Expense Tracker</h1>
{<Link to='/emailverification'><button>Verify Email id</button></Link>}<br></br>
<span>Your profile is incomplete</span>
<button onClick={showFormHandler}>Complete Now</button>
{showForm && <UserProfileForm/>}
</div>)
}
export default HomePage;