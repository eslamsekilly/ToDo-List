const input = document.querySelector(".input-value")
const listContainer = document.querySelector(".list-container")
const button = document.querySelector(".add-button")
const clearAll = document.querySelector(".clear-all")

//functions
function addToList(event){
    event.preventDefault();
    if(input.value){
    const newDev = document.createElement("div");
    newDev.textContent = input.value
    input.value = ""
    newDev.classList.add("todo-item")
    listContainer.appendChild(newDev)
}}

function clearList () {
    listContainer.innerHTML ="";
}

//Event listener
button.addEventListener("click", addToList)
clearAll.addEventListener("click", clearList)