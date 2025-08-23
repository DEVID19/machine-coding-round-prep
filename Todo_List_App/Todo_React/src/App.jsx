import  { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [editid, setEditid] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return alert("Enter Valid Task");

    if (editid) {
      setTask((prevTask) =>
        prevTask.map((todo) =>
          todo.id === editid ? { ...todo, text: inputValue } : todo
        )
      );
      setEditid(null);
    } else {
      setTask((prevTask) => [
        ...prevTask,
        { id: Date.now(), text: inputValue },
      ]);
    }

    setInputValue("");
  };

  const handleDelete = (id) => {
    setTask((prevTask) => prevTask.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todoEdit = task.find((todo) => todo.id === id);
    setInputValue(todoEdit.text);
    setEditid(id);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center p-4 md:p-8 bg-gray-100">
      <div className="shadow-xl rounded-xl bg-white w-full max-w-xl p-6 mt-6">
        <h1 className="mb-5 font-bold text-2xl text-center">Todo App</h1>
        <form onSubmit={handleSubmit} className="mb-5 flex gap-2">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter your task"
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 border border-gray-400 rounded-sm flex-1 outline-none focus:border-blue-500"
          />
          <button className="p-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition">
            {editid ? "Update Task" : "Add Task"}
          </button>
        </form>

        <ul className="flex flex-col gap-2">
          {task.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-gray-800">{todo.text}</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [todo, setTodo] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() === "") return alert("Please enter a valid task");

//     if (editId) {
//       setTodo(
//         todo.map((item) =>
//           item.id === editId ? { ...item, text: input } : item
//         )
//       );
//       setEditId(null);
//       setInput("");
//     } else {
//       setTodo([...todo, { id: Date.now(), text: input }]);
//       setInput("");
//     }
//   };
//   const handleDelete = (id) => {
//     setTodo(
//       todo.filter((item) => {
//        return  item.id !== id;
//       })
//     );
//   };
//   const handleEdit = (id) => {
//     const editTodo = todo.find((item) => item.id === id);
//     setInput(editTodo.text);
//     setEditId(id);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center ">
//       <div className="shadow-xl rounded-xl w-full max-w-xl bg-white ">
//         <h1 className="text-2xl font-bold text-center">Todo App</h1>
//         <form action="" onSubmit={handleFormSubmit} className="flex gap-2 p-4">
//           <input
//             type="text"
//             placeholder="Enter your task"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="p-2 border border-gray-400 rounded-sm flex-1 outline-none focus:border-blue-500"
//           />
//           <button className="p-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition">
//            {editId ? "Update Task" : "Add Task"}
//           </button>
//         </form>
//         <div>
//           <ul>
//             {todo.map((item) => (
              
//                 <li
//                   key={item.id}
//                   className="flex justify-between items-center p-3 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition"
//                 >
//                   <span className="text-gray-800">{item.text}</span>
//                   <div className="flex gap-3">
//                     <button
//                       className="text-yellow-500 hover:text-yellow-600 transition"
//                       onClick={() => handleEdit(item.id)}
//                     >
//                       ✏️
//                     </button>
//                     <button
//                       className="text-red-500 hover:text-red-600 transition"
//                       onClick={() => handleDelete(item.id)}
//                     >
//                       ❌
//                     </button>
//                   </div>
//                 </li>
              
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


