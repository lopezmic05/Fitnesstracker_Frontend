import React from "react";
import { postActivities } from "../api";

const AddActivity = ({ allActivities, setAllActivities }) => {
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;

    const result = await postActivities(name, description);
    if (result) {
      setAllActivities([result, ...allActivities]);
    }

    if (result.error) {
      alert(result.error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Create an Activity.</h3>
        <label>Activity Name</label>
        <input
          type='text'
          id='name'
          required
          placeholder='create name...'
        ></input>
        <label>description</label>
        <input
          type='text'
          id='goal'
          required
          placeholder='description...'
        ></input>
        <button id='activity-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
