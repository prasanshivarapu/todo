import { useState, useEffect } from "react";
import Todolist from "../file2";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [nextId, setNextId] = useState(21); // Starting ID
  const [showCompleted, setShowCompleted] = useState(false); // Filter state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  const updateTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const addNewItem = () => {
    if (newItemTitle === "") {
      alert("Title should not be empty");
      return;
    }
    // Create a new item with the next ID and increment the ID for the next item
    const newItem = {
      id: nextId,
      title: newItemTitle,
      completed: true,
    };

    setTodos([...todos, newItem]);
    setNewItemTitle("");
    setNextId(nextId + 1); // Increment the ID for the next item
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new item"
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
        />
        <button className="btn btn-success m-3" onClick={addNewItem}>
          Add Item
        </button>
      
      <button className="btn btn-warning" onClick={toggleShowCompleted}>
        {showCompleted ?"Completed tasks" : "All tasks" }
      </button>
      </div>
      <Todolist todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;















// import { useState, useEffect } from "react";
// import Todolist from "../file2";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newItemTitle, setNewItemTitle] = useState("");
//   const [nextId, setNextId] = useState(21); // Starting ID

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//       .then((response) => response.json())
//       .then((data) => setTodos(data));
//   }, []);
//   const updateTodo = (id, newTitle) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, title: newTitle };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };
//   const addNewItem = () => {

//     if(newItemTitle===""){
//         alert("should  not  be empty")
//         return;
//     }
//     // Create a new item with the next ID and increment the ID for the next item
//     const newItem = {
//       id: nextId,
//       title: newItemTitle,
//       completed: true,
//     };

//     setTodos([...todos, newItem]);
//     setNewItemTitle("");
//     setNextId(nextId + 1); // Increment the ID for the next item
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a new item"
//           value={newItemTitle}
          
//           onChange={(e) => setNewItemTitle(e.target.value)}
//         />
//         <button className="btn btn-success m-3" onClick={addNewItem}>Add Item</button>
//       </div>
//       <button>Filter</button>
//       <Todolist todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default Todo;



// import { useState, useEffect } from "react";
// import Todolist from "../file2";
// import { v4 as uuidv4 } from "uuid"; // Import the 'v4' function from 'uuid'

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newItemTitle, setNewItemTitle] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//       .then((response) => response.json())
//       .then((data) => setTodos(data));
//   }, []);

//   const updateTodo = (id, newTitle) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, title: newTitle };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const addNewItem = () => {
//     const newId = uuidv4(); // Generate a unique ID using uuid
//     const newItem = {
//       id: newId,
//       title: newItemTitle,
//       completed: false,
//     };
//     setTodos([...todos, newItem]);
//     setNewItemTitle("");
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a new item"
//           value={newItemTitle}
//           onChange={(e) => setNewItemTitle(e.target.value)}
//         />
//         <button onClick={addNewItem}>Add Item</button>
//       </div>
//       <Todolist todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default Todo;













// import { useState,useEffect } from "react";
// import Todolist from "../file2";


// const Todo = () => {
//     const [todos, setTodos] = useState([]);
  
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//         .then((response) => response.json())
//         .then((data) => setTodos(data));
//     }, []);
  
//     const updateTodo = (id, newTitle) => {
//       // Update the task in the list with the new title
//       const updatedTodos = todos.map((todo) => {
//         if (todo.id === id) {
//           return { ...todo, title: newTitle };
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//     };
  
//     const deleteTodo = (id) => {
//       // Remove the task from the list
//       const updatedTodos = todos.filter((todo) => todo.id !== id);
//       setTodos(updatedTodos);
//     };
  
//     return (
//       <div className="App">

//         <h1>Todo App</h1> 
//         <button className="text-right"> Add Item</button>
//         <Todolist todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
       
//       </div>
//     );
//   }
  
//   export default Todo