const express = require("express");

const Project = require("../models/Project");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {

  try {

    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id
    });

    await project.save();

    res.json(project);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

router.get("/", authMiddleware, async (req, res) => {

  const projects = await Project.find();

  res.json(projects);

});

module.exports = router;