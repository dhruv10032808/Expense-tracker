import React, { useState } from "react";
import UserProfileForm from "./UserProfileForm";

const HomePage=()=>{
const[showForm,setShowForm]=useState(false)
const showFormHandler=()=>{
    setShowForm(true);
}
return(<div><h1>Welcome to Expense Tracker</h1>
<span>Your profile is incomplete</span>
<button onClick={showFormHandler}>Complete Now</button>
{showForm && <UserProfileForm/>}
</div>)
}
export default HomePage;