// backend/src/controllers/trainingController.js

const Training = require('../models/Training');

const getAllTrainings = async (req, res) => {
  try {
      const trainings = await Training.findAll();
      res.json(trainings);
  } catch (err) {
      console.error('Error fetching trainings:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
};


const getTrainingById = async (req, res) => {
  const { id } = req.params;
  try {
    const training = await Training.findByPk(id);
    if (!training) {
      return res.status(404).json({ message: 'Training not found' });
    }
    res.json(training);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createTraining = async (req, res) => {
  const { trainingName, trainingDescription, trainingImage, numberOfDaysAlloted } = req.body;
  try {
    const training = await Training.create({ trainingName, trainingDescription, trainingImage, numberOfDaysAlloted });
    res.status(201).json(training);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const updateTrainingById = async (req, res) => {
  const { id } = req.params;
  const { trainingName, trainingDescription, trainingImage, numberOfDaysAlloted } = req.body;
  try {
    const training = await Training.findByPk(id);
    if (!training) {
      return res.status(404).json({ message: 'Training not found' });
    }
    training.trainingName = trainingName;
    training.trainingDescription = trainingDescription;
    training.trainingImage = trainingImage;
    training.numberOfDaysAlloted = numberOfDaysAlloted;
    await training.save();
    res.json(training);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteTrainingById = async (req, res) => {
  const { id } = req.params;
  try {
    const training = await Training.findByPk(id);
    if (!training) {
      return res.status(404).json({ message: 'Training not found' });
    }
    await training.destroy();
    res.json({ message: 'Training deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllTrainings,
  getTrainingById,
  createTraining,
  updateTrainingById,
  deleteTrainingById
};
