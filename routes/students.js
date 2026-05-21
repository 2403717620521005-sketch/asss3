const express = require('express');
const router = express.Router();
const { students, getNextId } = require('../data/students');

// GET /students — Fetch all students
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Students fetched successfully',
    count: students.length,
    data: students,
  });
});

// POST /students — Add a new student
router.post('/', (req, res) => {
  const { name, age, department, grade } = req.body;

  if (!name || !age || !department) {
    return res.status(400).json({
      success: false,
      message: 'name, age, and department are required fields.',
    });
  }

  const newStudent = {
    id: getNextId(),
    name,
    age,
    department,
    grade: grade || 'N/A',
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: 'Student added successfully',
    data: newStudent,
  });
});

// PUT /students/:id — Update student details
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const { name, age, department, grade } = req.body;

  students[index] = {
    ...students[index],
    ...(name       && { name }),
    ...(age        && { age }),
    ...(department && { department }),
    ...(grade      && { grade }),
  };

  res.status(200).json({
    success: true,
    message: `Student with id ${id} updated successfully`,
    data: students[index],
  });
});

// DELETE /students/:id — Delete a student
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Student with id ${id} not found.`,
    });
  }

  const deleted = students.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: `Student with id ${id} deleted successfully`,
    data: deleted,
  });
});

module.exports = router;