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

  return(
    <div>
      <h2>Routines</h2>

      <div>
        {routines.length ? (
          routines.map((element) => {
            const { id, name, isPublic, goal, creatorName, activities} = element;
            if(isPublic){
              return(
                <div>
                  <h3>{name}</h3>
                  <p>Goal: {goal}</p>
                  <p>CreatorName: {creatorName}</p>

                  <div>
                  {activities.map(({id, name, description, count, duration}) => {
                    return(
                      <div>
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
