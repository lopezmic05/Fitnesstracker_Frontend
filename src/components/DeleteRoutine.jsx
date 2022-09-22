import React from "react";
import { getRoutines, deleteRoutine } from "../api";

const DeleteRoutine = () => {


    const handleDelete = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        deleteRoutine(token, event.target.id)
        
        // event.preventDefault();
        // await deleteRoutine(myRoutines);
        // const result = await getRoutines();
        // console.log(result, "this should delete")
        // setMyRoutines(result);
      }

   

    return ( 
        <div>
            <button onClick={handleDelete} type="button"> delete </button>
        </div>
     );
}
 
export default DeleteRoutine;