const express = require("express")
const arr = require("../data")
const getTodos = require("../controllers/todos")
const todoRouter = express.Router()

todoRouter
    .get("/", getTodos)
    .post("/", (req, res)=> res.send("post todos"))
    .post("/add", (req, res)=> res.send("post add todos"))
    .delete("/", (req, res)=> res.send("delete todos"))



module.exports = todoRouter