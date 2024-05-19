const arr = require("../data");
const Todo = require("../models/todo");
// CRUD 
function getTodos(req, res){ // all
    res.send(arr)
   
} 
function getTodoById(req, res){ // get one
    res.send(arr)
}

async function createTodo(req, res){
    // save todo in database
    console.log("...create", req.body)
    const { title, desc } = req.body
    const resp = await Todo.create({
        title: title, 
        desc: desc
    })
    console.log(resp)
    res.send({message: "todo created", status: 201, res: resp})
} 

function deleteTodo(req, res){
    res.send("delete")
} 
function updateTodo(req, res){
    res.send(arr)
} 

module.exports = {getTodos, createTodo, deleteTodo, updateTodo}