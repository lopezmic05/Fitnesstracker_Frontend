import React from "react";
import {registerUser} from '../api'



const Register = () => {

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const result = await registerUser(event)
    if(result.error){
      alert(result.error)
    }
    }

    
    return (
        <div id="register">
          <form onSubmit={handleSubmit} id= 'register-form'>
            <h3 id="register-header"> Sign up for an account.</h3>
            <label>Username</label>
            <input type='text' id='username' required placeholder='create username...'></input>
            <label>Password</label>
            <input type='password' id='password' required placeholder='create password...'></input>
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
}
 
export default Register;