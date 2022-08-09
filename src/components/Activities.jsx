import React, { useEffect, useState } from "react";

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

  const mapActivities = allActivities.map((activity) => {
    return (
      <div>
        <h3 id='creator'>{activity.creatorName}</h3>
        <h3 id='activity-name'>{activity.name}</h3>
        <h3 id='activity-desc'>{activity.description}</h3>
        <h3 id='activity-dur'>{activity.duration}</h3>
        <br />
      </div>
    );
  });
  return (
    <div id='activity-container'>
      <h2 id='activity-heading'>Welcome To Activities!!</h2>

      {/* Form is static, unable to get it to function */}
      <form id='activity-form'>
        <label id='user'>Activity Name</label>
        <input
          type='text'
          id='activity'
          placeholder='create activity here...'
        ></input>
        <label id='description'>Description of Activity</label>
        <input
          type='text'
          id='activity stuff'
          placeholder='description here...'
        ></input>
        <button type='submit'>Submit</button>
      </form>
      {allActivities && allActivities.length ? <p>{mapActivities}</p> : null}
    </div>
  );
};

export default Activities;
