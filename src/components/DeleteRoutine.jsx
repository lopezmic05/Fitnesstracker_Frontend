import React from "react";
import { getRoutines, deleteRoutine } from "../api";

const DeleteRoutine = ({setMyRoutines}) => {
    async function handleDelete(event) {
        event.preventDefault();
        await deleteRoutine(routineId);
        const result = await getRoutines();
        console.log(result, "this should delete")
        setMyRoutines(result);
      }
    return ( 
        <div>
            <button id='delete-btn' onClick={handleDelete} type="submit"> delete routine </button>
        </div>
     );
}
 
export default DeleteRoutine;