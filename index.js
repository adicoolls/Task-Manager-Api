
const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
const conncetDB =  require('./db/connect');
require('dotenv').config()
//middleware = it act as an internmdiary between the user request and server's responce

app.use(express.json());

//routes
app.use(express.static('public'))

app.use('/api/v1/tasks', tasks);

// app.get("/api/v1/tasks")  = get all the tasks
// app.post("/api/v1/tasks") = create a new task
// app.get("/api/v1/tasks/:id") = get a single task
// app.patch("/api/v1/tasks/:id") = update a task
// app.delete("/api/v1/tasks/:id") = delete a task

const port = 3000
const start = async() => {
    try{
      await conncetDB(process.env.MONGO_URI)
      app.listen(3000,() => {
    console.log(`the server is running on port ${port}...`);
})
    }catch (error){
      console.log(error)
    }
}
start()