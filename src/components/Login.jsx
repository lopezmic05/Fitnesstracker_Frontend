import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../api'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const [ username, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    let navigate = useNavigate();

    const handleOnChange = (event) =>{
        const changed = event.target.id
        if(changed === 'username'){
            setUsername(event.target.value)
        }
        else{
            setPassword(event.target.value)
        }
    }

    useEffect(() => {
      if(isLoggedIn) {
        navigate("/profile")
      }
    }, [isLoggedIn])

    const handleSubmit = async(event) => {
        event.preventDefault()        
        try {
          const result = await loginUser(username, password)
          localStorage.setItem("token",result.token)
          setIsLoggedIn(true)
          
        } catch (error) {
          console.error(error)
        }

    }

  return (
    <div id="login">
      <h1 id="login-header">Please Login!</h1>
      <form onSubmit={handleSubmit} id="login-form">
        <label id="user">Username</label>
        <input 
        type='text'
        id='username'
        onChange={handleOnChange}
         placeholder='enter username...'
         value={username}
         required></input>
        <label id="password">Password</label>
        <input 
        type='password'
        id='password'
        onChange={handleOnChange}
         placeholder='enter password...'
         value={password}
         required></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
