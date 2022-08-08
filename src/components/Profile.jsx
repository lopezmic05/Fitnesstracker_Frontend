import React, { useState, useEffect } from "react";
import { getUser } from "../api";



const Profile = () => {
    const [info, setInfo] =useState({})
    const getUserInfo = async () => {
        try {
            const result = await getUser()
            if(result){
                setInfo(result)
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
      getUserInfo()
    }, []);
    
    return ( 
    <div>
        {info && info.username ? <h2>Hello {info.username}!</h2> : null}
        <h3>Wlcom to your routines!</h3>
    </div>
     );
}
 
export default Profile;