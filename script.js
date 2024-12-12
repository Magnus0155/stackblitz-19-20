// de 3 const linker/henter HTML elementene til JS så de kan brukes her.
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
console.log(inputField,addButton,todoList);

// Legger til en eventListener til addButton. Det gjør addButton interaktiv.
addButton.addEventListener("click", function () {
    console.log("legg til knappen er trykket!");

// lager et nytt sted for å lagre en verdi for inputField.
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

// Lager et nytt element todoItem og ("li") gjør den et kiste element.
// Etterpå stter vi en text verdi til todoItem som er verdien til inputFieldValue
// TodoItem blir så lagt til todoList med appendChild
// Det siste som gjøres er å sette en ingen verdi på inputFIeld, for at brukeren ikke må manuelt slette teksten selv etter at de har skrevet noe.
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    inputField.value = "";



// Laget en variabel som lager en knapp for ferdig.
// Etterpå lages det om og eller uttalelse for ferdig knappen.
// Dette gjør at knappen kan bli markert som ferdig.
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

/*Laget en ny variabel. Slett knappen sletter det som er markert ferdig.
  Hvis ikke viser det en fane om at ferdig knappen må trykkes*/
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

