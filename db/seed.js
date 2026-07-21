import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
await db.connect();
await seedEmployees();
console.log();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({name: "John Stamos", birthday: "1995-12-31", salary: 40000});
  await createEmployee({ name: "Alice Johnson", birthday: "1992-03-14", salary: 55000 });
  await createEmployee({ name: "Brian Smith", birthday: "1988-07-22", salary: 72000 });
  await createEmployee({ name: "Carla Davis", birthday: "1996-11-05", salary: 48000 });
  await createEmployee({ name: "Daniel Martinez", birthday: "1990-01-30", salary: 68000 });
  await createEmployee({ name: "Emily Wilson", birthday: "1998-09-17", salary: 51000 });
  await createEmployee({ name: "Frank Thompson", birthday: "1985-05-09", salary: 85000 });
  await createEmployee({ name: "Grace Lee", birthday: "1994-12-02", salary: 63000 });
  await createEmployee({ name: "Henry Walker", birthday: "1991-08-26", salary: 59000 });
  await createEmployee({ name: "Isabella Moore", birthday: "1997-04-11", salary: 47000 });
}
