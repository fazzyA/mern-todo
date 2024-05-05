const express = require('express')
const todoRouter = require('./routes/todos')
const cors = require("cors")
const app = express()
const port = 5000
app.use(cors())
app.get("/", (req, res) => {
    return res.status(200).send("server is running")
})
app.use("/todo", todoRouter)
app.listen(port, () => {
    console.log("server is running at port", port)
})