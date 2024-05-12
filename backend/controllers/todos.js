const arr = require("../data");
// CRUD 
function getTodos(req, res){ // all
    res.send(arr)
} 
function getTodoById(req, res){ // get one
    res.send(arr)
}

function createTodo(req, res){
    res.send("create")
} 

function deleteTodo(req, res){
    res.send("delete")
} 
function updateTodo(req, res){
    res.send(arr)
} 

module.exports = {getTodos, createTodo, deleteTodo, updateTodo}