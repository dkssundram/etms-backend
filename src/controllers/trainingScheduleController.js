const TrainingSchedule  = require('../models/TrainingSchedule');

const createTrainingSchedule = async (req, res) => {
  const { roleId, trainingId, trainerId, startDate, endDate ,startTime, endTime, createdAt, updatedAt} = req.body;
  try {
    const trainingSchedule = await TrainingSchedule.create({ roleId, trainingId, trainerId, startDate, endDate,startTime, endTime, createdAt, updatedAt });
    res.status(201).json(trainingSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const fetchTrainingSchedule = async (req, res) => {
  try {
      // const title = 'Tgdjs';
      const trainingSchedule = await TrainingSchedule.findAll({
          attributes: ['id','roleId','trainingId','trainerId','startDate','endDate','startTime','endTime']
      });

      const response = trainingSchedule.map(schedule => {
        let startDateTime = schedule.startDate + 'T' + schedule.startTime;
        let endDateTime = schedule.endDate + 'T' + schedule.endTime;
        // Convert to ISO format
        let start = new Date(startDateTime);
        let end = new Date(endDateTime);

          // const start = schedule.startDate;
          // const end = new Date(schedule.endDate)
          console
          return {
              // title: title,
              roleId: schedule.roleId,
              trainingId:schedule.trainingId,
              trainerId:schedule.trainerId,
              id: schedule.id,
              start: start,
              end: end
          };
      });

      res.status(200).json(response);
  } catch (err) {
      console.error('Failed to fetch training schedule:', err);
      res.status(500).json({ error: 'Failed to fetch training schedule' });
  }
};

const getAllTrainingSchedulesbyroleId = async (req, res) => {
  const temp = req.params.roleId;
  console.log(temp);
  const roleId = parseInt(temp);
  if (isNaN(roleId)) {
    return res.status(400).json({ message: 'Role ID must be a number' });
  }

  try {
    const schedules = await TrainingSchedule.findAll({ where: { roleId: roleId } });
    if (schedules.length === 0) {
      return res.status(404).json({ message: 'No training schedules found for the provided role ID' });
    }
    res.json(schedules);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



module.exports = {
  createTrainingSchedule,fetchTrainingSchedule, getAllTrainingSchedulesbyroleId
};

