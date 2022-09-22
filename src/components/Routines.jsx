import React, { useEffect, useState } from "react";

import { getRoutines } from "../api";

import './CSS/routines.css'

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

  return(
    <div id="routine-container">
      <h2 id="routine-head">Routines</h2>

      <div>
        {routines.length ? (
          routines.map((element) => {
            const { id, name, isPublic, goal, creatorName, activities} = element;
            if(isPublic){
              return(
                <div>
                  <h3>{name}</h3>
                  <p>Goal: {goal}</p>
                  <p>Name: {creatorName}</p>

                  <div>
                  {activities.map(({id, name, description, count, duration}) => {
                    return(
                      <div id="routine-name">
                        <h3> Activity: {name}</h3>
                        <p>Description: {description}</p>
                        <p>Count: {count}</p>
                        <p>Duration: {duration}</p>
                      </div>
                    )
                  }
                  )}
                   </div>
                </div>
              )
            }
          })
        ):null}
      </div>
    </div>
  )
};

export default Routines;
