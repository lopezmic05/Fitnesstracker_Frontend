import React, { useEffect, useState } from "react";
import { AddActivity } from ".";

import { getActivities } from "../api";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);

  const getActivitiesInfo = async () => {
    try {
      const result = await getActivities();
      if (result) {
        setAllActivities(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getActivitiesInfo();
  }, []);

  const mapActivities = allActivities.map((activity, index) => {
    return (
      <div key={`Activity: ${activity.id}${index}`}>
        <h3>Activity: {index + 1}</h3>
        <p id='activity-name'>Name:{activity.name}</p>
        <p id='activity-desc'>Description: {activity.description}</p>
        <br />
      </div>
    );
  });
  return (
    <div id='activity-container'>
      <h2 id='activity-heading'>Activities!!</h2>

    <AddActivity allActivities={allActivities} setAllActivities={setAllActivities}/>
      {allActivities && allActivities.length ? <div>{mapActivities} </div>: null}
    </div>
  );
};

export default Activities;
