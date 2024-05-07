// Assuming you have a model for progresstrackings
const { TrainingProgress } = require('../models/TrainingProgress');

const updateProgress = async (req, res) => {
    const { userId, trainingId } = req.params;
    const { status } = req.body;

    try {
        let progressTracking = await TrainingProgress.findOne({
            where: {
                userId: userId,
                trainingId: trainingId
            }
        });

        if (!progressTracking) {
            // If progress tracking entry does not exist, create a new one
            progressTracking = await TrainingProgress.create({
                userId: userId,
                trainingId: trainingId,
                status: status
            });
        } else {
            // If progress tracking entry exists, update the status
            progressTracking.status = status;
            await progressTracking.save();
        }

        res.status(200).json({ message: 'Progress updated successfully' });
    } catch (error) {
        console.error('Error updating progress:', error);
        res.status(500).json({ message: 'Failed to update progress' });
    }
};

const getProgress = async (req, res) => {
    const { userId, trainingId } = req.params;

    try {
        const progressTracking = await TrainingProgress.findOne({
            where: {
                userId: userId,
                trainingId: trainingId
            }
        });

        if (!progressTracking) {
            return res.status(404).json({ message: 'Progress not found' });
        }

        res.status(200).json({ status: progressTracking.status });
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({ message: 'Failed to fetch progress' });
    }
};

module.exports = { updateProgress, getProgress };
