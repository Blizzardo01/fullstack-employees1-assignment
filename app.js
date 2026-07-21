import router from "#api/employees";
import express from "express";
const app = express();
export default app;


//employees router
app.use(router, "/employees")

//logging middleware

//parsing middleware
app.use(express.json());

//error handling middleware

app.get("/", (req, res, next) => {
    res.send("Welcome to the Fullstack Employees API.");
});




