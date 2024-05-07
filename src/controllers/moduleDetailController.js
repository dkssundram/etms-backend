// controllers/moduleDetailController.js
const  ModuleDetail  = require('../models/ModuleDetails');

const getAllModuleDetails = async (req, res) => {
  try {
    const moduleDetails = await ModuleDetail.findAll();
    res.json(moduleDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getModuleDetailByTrainingId = async (req, res) => {
  try {
    const moduleDetail = await ModuleDetail.findAll({
      where: { trainingId: req.params.trainingId },
    });
    if (!moduleDetail) {
      res.status(404).json({ error: 'ModuleDetail not found for trainingId' });
    } else {
      res.json(moduleDetail);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createModuleDetail = async (req, res) => {
  try {
    const moduleDetail = await ModuleDetail.bulkCreate(req.body);
    res.status(201).json(moduleDetail);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateModuleDetail = async (req, res) => {
  try {
    const moduleDetail = await ModuleDetail.findByPk(req.params.id);
    if (!moduleDetail) {
      res.status(404).json({ error: 'ModuleDetail not found' });
    } else {
      await moduleDetail.update(req.body);
      res.json(moduleDetail);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateModuleDetailByTrainingId = async (req, res) => {
  try {
    const moduleDetail = await ModuleDetail.findOne({
      where: { trainingId: req.params.trainingId },
    });
    if (!moduleDetail) {
      res.status(404).json({ error: 'ModuleDetail not found for trainingId' });
    } else {
      await moduleDetail.update(req.body);
      res.json(moduleDetail);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteModuleDetail = async (req, res) => {
  try {
    const moduleDetail = await ModuleDetail.findByPk(req.params.id);
    if (!moduleDetail) {
      res.status(404).json({ error: 'ModuleDetail not found' });
    } else {
      await moduleDetail.destroy();
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllModuleDetails,
  getModuleDetailByTrainingId,
  createModuleDetail,
  updateModuleDetail,
  updateModuleDetailByTrainingId,
  deleteModuleDetail,
};
