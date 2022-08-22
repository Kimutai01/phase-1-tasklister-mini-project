document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const btn = document.querySelector(".btn");
  const desc = document.querySelector("#new-task-description");
  const tasksDiv = document.querySelector("#tasks");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const list = document.createElement("li");
    list.textContent = desc.value;
    tasksDiv.appendChild(list);
  });
});
