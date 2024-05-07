// backend/src/controllers/reportController.js

const PersonalizedReport = require('../models/PersonalizedReport');

const getReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await PersonalizedReport.findByPk(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const generateReport = async (req, res) => {
  const { userId, performanceSummary, recommendations } = req.body;
  try {
    const report = await PersonalizedReport.create({ userId, performanceSummary, recommendations });
    res.status(201).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getReportById,
  generateReport
};
