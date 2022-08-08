const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

const registerUser = async (event) => {
  try {
    const registerUsername = event.target[0].value
    const registerPassword = event.target[1].value
    console.log(`${BASE_URL}users/register`);
    const response = await fetch(`${BASE_URL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result, "result");
    if (result.error) {
      throw result.error;
    }
    return result;
  } catch (error) {
    console.log("I AM ERROR");
    throw error;
  }
};

const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserRoutine = async (username) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("I AM GETUSERROUTINE ERROR");
    throw error;
  }
};

const getRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const getActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

const postActivities = async (name, description) => {
  try {
    const response = await fetch(`${BASE_URL}activites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
};

const updateActivities = async (activityId, name, description) => {
  const response = await fetch(`${BASE_URL}/activities/${activityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
  const result = await response.json();
  return result;
};

const getRoutineActivities = async (activityId) => {
  const response = await fetch(`${BASE_URL}activities/${activityId}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

const postRoutines = async (name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
};

const updateRoutines = async (routineId, name, goal, isPublic) => {
  const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic,
    }),
  });
  const result = await response.json();
  return result;
};

const deleteRoutine = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}routines/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

const attachActivity = async (activityId, count, duration, routineId) => {
  const response = await fetch(`${BASE_URL}routines/${routineId}/activities`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      activityId: activityId,
      count: count,
      duration: duration,
    }),
  });
  const result = await response.json();
  return result;
};

const updateRoutineActivity = async (routineActivityId, count, duration) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}routine_activities/${routineActivityId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: count,
        duration: duration,
      }),
    }
  );
  const result = await response.json();
  return result;
};

const deleteRoutineActivity = async (routineActivityId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${BASE_URL}routine_activities/${routineActivityId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getUserRoutine,
  getRoutines,
  getActivities,
  postActivities,
  updateActivities,
  getRoutineActivities,
  postRoutines,
  updateRoutines,
  deleteRoutine,
  attachActivity,
  updateRoutineActivity,
  deleteRoutineActivity,
};