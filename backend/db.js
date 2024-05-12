const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://binishfarhan89:pS3YTeQq64IUjmMg@cluster0.vzdef1c.mongodb.net/")
}
module.exports = dbconnect