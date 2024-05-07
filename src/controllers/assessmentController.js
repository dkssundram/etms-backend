// backend/src/controllers/assessmentController.js

const Assessment = require('../models/Assessment');

const getAssessmentScore = async (req, res) => {
  try {
    // Assuming the UserScore model exists and has a method findAll to retrieve all scores
    const userScores = await Assessment.findAll();

    res.status(200).json(userScores);
  } catch (error) {
    console.error('Error fetching user scores:', error);
    res.status(500).json({ error: 'Failed to fetch user scores' });
  }
};

const getAssessmentScoresByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Assuming the Assessment model has a method findAll to retrieve all scores for a user
    const userScores = await Assessment.findAll({ where: { userId } });
    
    if (userScores.length === 0) {
      return res.status(404).json({ error: 'User scores not found' });
    }

    res.status(200).json(userScores);
  } catch (error) {
    console.error('Error fetching user scores:', error);
    res.status(500).json({ error: 'Failed to fetch user scores' });
  }
};



const createAssessmentScore = async (req, res) => {
  const { userId, trainingId, obtainedScore, totalScore } = req.body;
  try {
    const assessment = await Assessment.create({ userId, trainingId, obtainedScore, totalScore });
    res.status(201).json(assessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateAssessmentById = async (req, res) => {
  const { id } = req.params;
  const { obtainedScore, totalScore } = req.body;
  try {
    const assessment = await Assessment.findByPk(id);
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }
    assessment.obtainedScore = obtainedScore;
    assessment.totalScore = totalScore;
    await assessment.save();
    res.json(assessment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteAssessmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const assessment = await Assessment.findByPk(id);
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }
    await assessment.destroy();
    res.json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAssessmentScore,
  createAssessmentScore,
  updateAssessmentById,
  getAssessmentScoresByUserId,
  deleteAssessmentById
};
