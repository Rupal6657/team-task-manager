const express = require("express");

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {

  try {

    const task = new Task(req.body);

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }

});

router.get("/", authMiddleware, async (req, res) => {

  const tasks = await Task.find()
  .populate("assignedTo")
  .populate("project");

  res.json(tasks);

});

router.put("/:id", authMiddleware, async (req, res) => {

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);

});

module.exports = router;