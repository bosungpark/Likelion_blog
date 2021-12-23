const input = document.querySelector(".todo_txt");
const btn = document.querySelector(".btn_submit");
const todoList = document.querySelector(".todo_list");


const addTodo = (e) => {
  e.preventDefault();
  if (input.value.trim().length < 1) {
    return;
  }

  const list = document.createElement("li");

  const btnChk = document.createElement("button");
  btnChk.setAttribute("class", "btn_check");
  btnChk.addEventListener("click", (e) => {
    const chkList = e.target.parentElement;
    chkList.classList.toggle("on");
  });

  const btnDel = document.createElement("button");
  btnDel.setAttribute("class", "btn_del");
  btnDel.addEventListener("click", () => {
    todoList.removeChild(list);
  });

  todoList.appendChild(list);
  list.appendChild(btnChk);
  list.insertAdjacentHTML("beforeend", `${input.value}`);
  list.appendChild(btnDel);
  input.value = "";
};

btn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
  return;
});