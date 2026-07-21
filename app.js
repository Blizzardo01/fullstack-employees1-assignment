import router from "#api/employees";
import express from "express";
const app = express();
export default app;

//parsing middleware
app.use(express.json());


//employees router
app.use("/employees", router)

//logging middleware



//error handling middleware

app.get("/", (req, res, next) => {
    res.send("Welcome to the Fullstack Employees API.");
});




