const express = require("express");
const router = express.Router();
const controller = require("../Controllers/ProjectController");

router.get("/", controller.getProjects);

router.post("/", controller.addProject);
router.get("/:id", controller.getProject);
router.put("/", controller.updateProject);

module.exports = router;
