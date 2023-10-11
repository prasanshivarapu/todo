import Item from "../file3";

const Todolist = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Item
              key={todo.id}
              onUpdateTodo={updateTodo}
              onDeleteTodo={deleteTodo}
              todo={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;











// import Item from "../file3";


// const Todolist = ({ todos, updateTodo, deleteTodo }) => {
//     return (
//       <div className="todo-list">
        
//             <table class="table">
//             <thead>
//               <tr>
                
//                 <th scope="col">Id</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             </table>
//             {todos.map((todo) => (
//           <Item
//             key={todo.id}
//             onUpdateTodo={updateTodo}
//             onDeleteTodo={deleteTodo}
//             todo={todo}
//           />
//         ))}
//       </div>
//     );
//   }
  

//   export default  Todolist













// import { useState } from "react";
// import Item from "../file3";


// const Todolist = ({ todos })=>{
//     const [todoList, setTodoList] = useState(todos);
//       const updateTodo = (id, newTitle) => {
//     // Find the task in the list and update its title
//     const updatedList = todoList.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, title: newTitle };
//       }
//       return todo;
//     });
//     setTodoList(updatedList);
//   };
//     const deleteTodo = (id) => {
//     // Remove the task from the list
//     const updatedList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(updatedList);
//   };
//         return (
//             <div className="todo-list">
//                 {console.log(todoList[0])}
//               {todos.map((todo) => (
//                 <Item key={todo.id} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} todo={todo} />
//               ))}
//             </div>
//           );
    
// }

// export default  Todolist
