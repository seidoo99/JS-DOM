/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var description = document.getElementById('dscription');
var addButton = document.getElementById('add-button');
var todoList = document.getElementById('todo-list');

//addButton.addEventListener('click', function() {
//    inputText = description.value;
//    inputText = "";
//    var newList = document.createElement('li');
//    inputText = newList.innerHTML;
//
//    todoList.appendChild(newList);
//    newList.appendChild(inputText);
//
//});



addButton.addEventListener('click', function() {
    var newItem = document.createElement('li');
    newItem.classList.add('newItem');
    newItem.addEventListener('click', function() {
        this.classList.add('finish');

    });

    newItem.innerHTML = description.value + "now!";

    console.log(description.value)
    list.appendChild(newItem);
    description.value = "";

});