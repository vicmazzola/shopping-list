const item = document.getElementById("input-item");
const saveItemButton = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");



saveItemButton.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault()

    const itemFromList = document.createElement("li");
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    const nameOfItemContainer = document.createElement("div");
    const nameOfItem = document.createElement("p");
    nameOfItem.innerText = item.value;
    nameOfItemContainer.appendChild(nameOfItem);


    //------------- BUTTON CONTAINER ------------------ //

    const buttonsContainer = document.createElement("div");

    const removeButton = document.createElement("button");
    removeButton.classList.add("list-item-button");

    const removeImage = document.createElement("img");
    removeImage.src = "img/delete.svg";
    removeImage.alt = "Remove";

    removeButton.appendChild(removeImage);
    buttonsContainer.appendChild(removeButton);


    const editButton = document.createElement("button");
    editButton.classList.add("list-item-button");

    const editImage = document.createElement("img");
    editImage.src = "img/edit.svg";
    editImage.alt = "Edit";

    editButton.appendChild(editImage);
    buttonsContainer.appendChild(editButton);


    listItemContainer.appendChild(nameOfItemContainer);
    listItemContainer.appendChild(buttonsContainer);
    itemFromList.appendChild(listItemContainer);
    shoppingList.appendChild(itemFromList);

}