import React, { useState } from "react";

const Item = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const [previousTitle, setPreviousTitle] = useState(todo.title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
  if(newTitle===""){
    alert("title should not be empty")
    setNewTitle(previousTitle); 
    return ;
  }
    onUpdateTodo(todo.id, newTitle);
    setEditing(false);
  };

  const handleDeleteClick = () => {
   
    onDeleteTodo(todo.id);
  };
  const handleCheckboxChange = () => {

    setCompleted(!completed);
  };
  const rowStyle = {
    backgroundColor: completed ? "lightgreen" : "transparent",
  };
  return (
    <tr style={rowStyle}>
   
      <td>{todo.id}</td>
      <td className="">
        {editing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </td>
      <td>
        <button  className="btn btn-info m-1" onClick={handleEditClick}>Edit</button>
        {editing ? (
          <button className="btn btn-secondary m-1"  onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="btn btn-info m-1"  onClick={handleDeleteClick}>Delete</button>
        )}
      </td>
      <td>

        <input type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange} />
      </td>
    </tr>

    
  );
};

export default Item;



// import React, { useState } from "react";

// const Item = ({ todo, onUpdateTodo, onDeleteTodo }) => {
//   const [editing, setEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(todo.title);

//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Update the task in the list with the new title.
//     onUpdateTodo(todo.id, newTitle);
//     setEditing(false);
//   };

//   const handleDeleteClick = () => {
//     // Remove the task from the list.
//     onDeleteTodo(todo.id);
//   };className={`todo-item ${todo.completed ? "completed" : ""}`}

//   return (
//     <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
//       {editing ? (
//         <input
//           type="text"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//         />
//       ) : (
        
//         <span>{todo.title}</span>
//       )}
//       <button onClick={handleEditClick}>Edit</button>
//       {editing ? (
//         <button onClick={handleSaveClick}>Save</button>
//       ) : (
//         <button onClick={handleDeleteClick}>Delete</button>
//       )}
//     </div>
//   );
// };

// export default Item;
