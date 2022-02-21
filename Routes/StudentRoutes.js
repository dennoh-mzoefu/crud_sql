const express = require("express");
const router = express.Router();
const controller = require("../Controllers/StudentController");

router.get("/", controller.getStudents);

router.post("/", controller.addStudent);
router.get("/:id", controller.getStudent);
router.put("/", controller.updateStudent);

module.exports = router;
