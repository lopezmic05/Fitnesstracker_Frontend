import React, { useEffect, useState } from "react";

import { getRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getRoutines();
      if (result) {
        setRoutines(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);

  const mapRoutines = routines.map((routine) => {
    return (
      <div>
        <h3>Name: {routine.name}</h3>
        <h3>Goal: {routine.goal}</h3>
        <h3>Creator: {routine.creatorName}</h3>
        <br />
      </div>
    );
  });
  return (
    <div>
      <h2>Welcome to Routines!!</h2>
      {/* Form is static, unable to get it to function */}
      <form>
        <label>Routine Name</label>
        <input type='text' id='routine' placeholder='enter here...'></input>
        <label id='routine-goal'>Routine Goal</label>
        <input
          type='text'
          id='routine stuff'
          placeholder='enter here...'
        ></input>
        <button type='submit'>Submit</button>
      </form>
      {routines && routines.length ? <p>{mapRoutines}</p> : null}
    </div>
  );
};

export default Routines;
