// de 3 const linker/henter HTML elementene til JS så de kan brukes her.
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
console.log(inputField,addButton,todoList);

// Legger til en eventListener til addButton. Det gjør addButton interaktiv.
addButton.addEventListener("click", function () {
    console.log("legg til knappen er trykket!");

// lager et nytt element inputFieldValue. Etterpå lagres verdien fra inputField til inputfieldValue med å bruke .value .
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

// Lager et nytt element todoItem. Etterpå lages texsten som blir skrevet i textbokesen. 
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    inputField.value = "";



    //lag en variabel som lager en knapp for ferdig
//lager en knapp som sier ferdig. Markerer det som som er lagt til for ferdig. 
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

/* Laget et nutt element. Slett knappen sletter det som er markert ferdig.
/  Hvis ikke viser det en fane om at ferdig knappen må trykkes*/
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

