import { addItem } from "./js/addItems.js";
import { checkBoughtList } from "./js/checkBoughtList.js";

const saveItemButton = document.getElementById("add-item");
saveItemButton.addEventListener("click", addItem);

const boughtList = document.getElementById("bought-list");
checkBoughtList(boughtList);
