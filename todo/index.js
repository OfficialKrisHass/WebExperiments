const addBttn = document.getElementById("addBttn");
const addInput = document.getElementById("addInput");

const taskList = document.getElementById("list");

let todos = [];

addBttn.onclick = () => addTask(addInput.value, "false"); 

loadTaks();

function loadTaks() {

    var keys = Object.keys(localStorage);
    var i = keys.length;

    while (i--)
        addTask(keys[i], localStorage.getItem(keys[i]));

}

function addTask(task, checked) {

    if (task === "") return;

    localStorage.setItem(task, checked);
    todos.push(task);

    var text = document.createTextNode(task);
    
    var taskElement = document.createElement("label");
    taskElement.classList.add("task");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.onchange = function() {

        if (this.checked)
            localStorage.setItem(task, "true");
        else
            localStorage.setItem(task, "false");

    }
    if (checked === "true")
        input.checked = true;

    taskElement.appendChild(input);
    taskElement.appendChild(text);
    
    var button = document.createElement("button");
    var icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-close");

    button.onclick = () => removeTask(task, taskElement);

    button.appendChild(icon);
    taskElement.appendChild(button);

    taskList.appendChild(taskElement);

    addInput.value = "";

}
function removeTask(task, element) {

    const index = todos.indexOf(task);
    if (index === -1) return;

    todos.splice(index, 1);
    localStorage.removeItem(task);
    element.remove();

}
