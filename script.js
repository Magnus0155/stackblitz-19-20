const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
console.log(inputField,addButton,todoList);

addButton.addEventListener("click", function () {
    console.log("legg til knappen er trykket!");

    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    inputField.value = "";



    //lag en variabel som lager en knapp for ferdig

    const doneItem = document.createElement("button");
    doneItem.textContent = "Done";
    todoItem.appendChild(doneItem);
    doneItem.addEventListener("click", function () {
        console.log("ferdig knapp er trykket!");

        if (todoItem.classList.contains("done")){
            todoItem.classList.remove("done");
        } else {
            todoItem.classList.add("done");
        }
    });

    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Slett";
    todoItem.appendChild(deleteItem);
    deleteItem.addEventListener("click",function () {
        console.log("Slett knapp er trykket!");

        if (todoItem.classList.contains ("done")) {
        todoItem.remove();
        } else {
            alert("Gjøremålet må markeres ferdig før sletting");
        };
 
    });
});

