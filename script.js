const item = document.getElementById("input-item");
const saveItemButton = document.getElementById("add-item");

saveItemButton.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault()
    console.log("Testing");
}