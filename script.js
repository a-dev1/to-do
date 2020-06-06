var input = document.getElementById("userInput");
var add_button = document.getElementById("add_button");
var main_list = document.querySelector("ul");
var _id = 0;

function makeListItem() {
    var item = document.createElement("div");
    var data = document.createElement("li");
    var button = document.createElement("button");
    var strike = document.createElement("button");

    data.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("✖"));
    strike.appendChild(document.createTextNode("✓"))
    // ❌✅✔✖☑


    item.setAttribute("id", _id);
    button.setAttribute("id", _id);
    strike.setAttribute("id", _id);
    data.setAttribute("id", ++_id);

    item.classList.add("main_item");
    data.classList.add("text_inside");
    button.classList.add("wrong");
    strike.classList.add("tick");

    strike.setAttribute("onclick", "taskCompleted(this)")
    button.setAttribute("onclick", "removeElement(this)");
    _id++;

    item.appendChild(data);
    item.appendChild(strike);
    item.appendChild(button);
    main_list.appendChild(item);
    input.value = "";
}

function addItemOnClick() {
    if (input.value.length !== 0) {
        makeListItem();
    }
}

function addItemOnEnter() {
    if (event.charCode === 13 && input.value.length !== 0) {
        makeListItem();
    }
}

function removeElement(obj) {
    console.log(obj.id);
    // Removes an element from the document
    var element = document.getElementById(obj.id);
    element.parentNode.removeChild(element);
}

function taskCompleted(obj) {
    console.log(+obj.id + 1);

    var element = document.getElementById(1 + +obj.id);
    element.classList.toggle("completed");

}

add_button.addEventListener("click", addItemOnClick);
input.addEventListener("keypress", addItemOnEnter);