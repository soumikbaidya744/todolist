const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent for security and performance
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        saveData();  //FUNCTION CALL
    }
}

// CODE FOR DONE TASK AND REMOVE ITEM

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();   //FUNCTION CALL
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();   //FUNCTION CALL
    }
});


//FOR SAVING DATA TO LOCAL COMPUTER


function saveData() {
    // Convert listcontainer.innerHTML to string and store in localStorage
    localStorage.setItem("taskList", listcontainer.innerHTML);
}

function showTask() {
    // Retrieve and set the saved tasks from localStorage
    if (localStorage.getItem("taskList")) {
        listcontainer.innerHTML = localStorage.getItem("taskList");
    }
}

showTask();
