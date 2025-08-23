document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".form-input");
  const todoSubmit = document.querySelector(".form-submit");
  const todoList = document.querySelector(".todo-list");
  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addToDoItem(todoText);
      }
      todoInput.value = "";
    } else {
      alert("Enter valid Task");
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addToDoItem(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    editButton.innerText = `✏️`;
    removeButton.innerText = `❌`;

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const todoForm = document.querySelector(".todo-form");
//   const todoInput = document.querySelector(".form-input");
//   const todoSubmit = document.querySelector(".form-submit");
//   const todoList = document.querySelector(".todo-list");
//   let editMode = false;
//   let editItem = null;
//   todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const todoText = todoInput.value.trim();
//     if (todoText !== "") {
//       if (editMode) {
//         editItem.firstChild.textContent = todoText;
//         todoSubmit.innerText = "Add Todo";
//         editMode = false;
//         editItem = null;
//       } else {
//         addTodo(todoText);
//       }
//       todoInput.value = "";
//     } else {
//       alert("Enter some Valid Text");
//     }
//   });

//   todoList.addEventListener("click", function (event) {
//     const target = event.target;
//     if (target.tagName === "BUTTON") {
//       const todoItem = target.parentNode;
//       if (target.innerText === "❌") {
//         todoItem.remove();
//       } else if (target.innerText === "✏️") {
//         editMode = true;
//         editItem = todoItem;
//         todoSubmit.innerText = "Edit Todo";
//         todoInput.value = todoItem.firstChild.textContent;
//         todoInput.focus();
//       }
//     }
//   });

//   function addTodo(todoText) {
//     const todoItem = document.createElement("li");
//     const editButton = document.createElement("button");
//     const removeButton = document.createElement("button");

//     todoItem.innerHTML = `<Span>${todoText}</Span>`;
//     editButton.innerText = `✏️`;
//     removeButton.innerText = `❌`;

//     todoItem.appendChild(editButton);
//     todoItem.appendChild(removeButton);
//     todoList.appendChild(todoItem);
//   }
// });

//&  complete the todo by myself

// document.addEventListener("DOMContentLoaded", function () {
//   const todoForm = document.querySelector(".todo-form");
//   const todoInput = document.querySelector(".form-input");
//   const todoSubmit = document.querySelector(".form-submit");
//   const todoList = document.querySelector(".todo-list");
//   let editMode = false;
//   let editItem = null;

//   todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const todoText = todoInput.value.trim();
//     if (todoText !== "") {
//       if (editMode) {
//         editItem.firstChild.textContent = todoText;
//         todoSubmit.innerText = "Add Todo";
//         editMode = false;
//         editItem = null;
//       } else {
//         addTodo(todoText);
//       }
//       todoInput.value = "";
//     } else {
//       alert("Please enter a valid task.");
//     }
//   });

//   todoList.addEventListener("click", function (event) {
//     const target = event.target;
//     if (target.tagName === "BUTTON") {
//       const todoItem = target.parentNode;
//       if (target.innerText === "❌") {
//         todoItem.remove();
//       } else if (target.innerText === "✏️") {
//         editMode = true;
//         editItem = todoItem;
//         todoSubmit.innerText = "Edit Todo";
//         todoInput.value = todoItem.firstChild.textContent;
//         todoInput.focus();
//       }
//     }
//   });
//   function addTodo(todoText) {
//     const todoItem = document.createElement("li");
//     const editButton = document.createElement("button");
//     const removeButton = document.createElement("button");

//     todoItem.innerHTML = `<span>${todoText}</span>`;
//     editButton.innerText = `✏️`;
//     removeButton.innerText = `❌`;

//     todoItem.appendChild(editButton);
//     todoItem.appendChild(removeButton);
//     todoList.appendChild(todoItem);
//   }
// });
