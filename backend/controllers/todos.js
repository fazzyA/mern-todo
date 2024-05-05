const arr = require("../data");

function getTodos(req, res){
    res.send(arr)
} 
module.exports = getTodos