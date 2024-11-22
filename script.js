import { addItem } from "./js/addItem.js";
import { checkBoughtList } from "./js/checkBoughtList.js";

const saveItemButton = document.getElementById("add-item");
saveItemButton.addEventListener("click", addItem);

const boughtList = document.getElementById("bought-list");
checkBoughtList(boughtList);
