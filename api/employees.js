import express from "express";
import { getEmployees, createEmployee, deleteEmployee } from "#db/queries/employees";
const router = express.Router();
export default router;

router.get("/", (req, res, next) => {
const employees = getEmployees();
res.send(employees);
});

router.post("/", async (req, res, next) => {
  try {
    const { name, birthday, salary } = req.body;

    if (!name || !birthday || !salary) {
      return res.status(400).send("Missing required employee fields");
    }

    const employee = await createEmployee({ name, birthday, salary });

    res.status(201).send(employee);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await getEmployee(id);

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    res.send(employee);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await deleteEmployee(id);

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});


