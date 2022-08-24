import React, { useState, useEffect } from "react";
import { getUser, getUserRoutine } from "../api";
import { AddRoutine } from "./";

const Profile = () => {
  const [info, setInfo] = useState({});
  const [myRoutines, setMyRoutines] = useState([]);
  const getUserInfo = async () => {
    try {
      const result = await getUser();
      console.log(result, "this is reulst r")
      if (result) {
        setInfo(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMyRoutines = async () => {
    try {
      if (info && info.username) {
        const result = await getUserRoutine(info.username);
        console.log(result, "helllooooo");
        if (result) {
          setMyRoutines(result);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getMyRoutines();
  }, [info]);


  console.log(myRoutines, "thisisisisissi");
  return (
    <div>
      {info && info.username ? <h2>Hello {info.username}!</h2> : null}
      <h3>Welcome to your routines!</h3>

      <AddRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
      {myRoutines && myRoutines.length
        ? myRoutines.map((routine, index) => {
            return (
              <div key={`profile:${routine.id} ${index}`}>
                <p>{routine.name}</p>
                <p>{routine.goal}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Profile;
