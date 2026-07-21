import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee
} from "#db/queries/employees";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await getEmployees();
    res.send(employees);
  } catch (error) {
    next(error);
  }
});


router.post("/", async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send("Request body required");
    }

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

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!req.body) {
      return res.status(400).send("Request body required");
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || !salary) {
      return res.status(400).send("Missing required employee fields");
    }

    const employee = await updateEmployee({
      id,
      name,
      birthday,
      salary
    });

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    res.status(200).send(employee);
  } catch (error) {
    next(error);
  }
});



export default router;



