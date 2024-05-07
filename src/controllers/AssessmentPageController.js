const { AssessmentPage } = require('../models');


// const createAssessmentPage = async (req, res) => {
//   const { trainingId, question, option1, option2, option3, option4, correctAnswer } = req.body[1];

//   try {
//     const assessmentPage = await AssessmentPage.create({
//       trainingId,
//       question,
//       option1,
//       option2,  
//       option3,
//       option4,
//       correctAnswer,
//     });
//     return res.status(201).json({ message: 'Assessment page created successfully', assessmentPage });
//   } catch (error) {
//     console.error('Error creating assessment page:', error);
//     return res.status(500).json({ message: 'Failed to create assessment page' });
//   }
// };


const createAssessmentPage = async (req, res) => {
    console.log('Received data:', req.body);

    try {
      const assessmentPages = [];
      for (const item of req.body) {
        // const question = item.newques, 
        const { trainingId, newques, option1, option2, option3, option4, correctAnswer } = item;
        const assessmentPage = await AssessmentPage.create({
          trainingId,
          newques,
          option1,
          option2,  
          option3,
          option4,
          correctAnswer,
        });
        assessmentPages.push(assessmentPage);
      }
      return res.status(201).json({ message: 'Assessment pages created successfully', assessmentPages });
    } catch (error) {
      console.error('Error creating assessment pages:', error);
      return res.status(500).json({ message: 'Failed to create assessment pages' });
    }
  };
  

  const getAssessmentPageById = async (req, res) => {
    const trainingId = req.params.trainingId;
    try {
        const assessmentPages = await AssessmentPage.findAll({ where: { trainingId } });
        res.json(assessmentPages);
    } catch (error) {
        console.error('Error fetching assessment pages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const updateAssessmentPage = async (req, res) => {
  const { id } = req.params;
  const { trainingId, question, option1, option2, option3, option4, correctAnswer } = req.body;

  try {
    const assessmentPage = await AssessmentPage.findByPk(id);
    if (!assessmentPage) {
      return res.status(404).json({ message: 'Assessment page not found' });
    }

    await assessmentPage.update({
      trainingId,
      question,
      option1,
      option2,
      option3,
      option4,
      correctAnswer
    });

    return res.status(200).json({ message: 'Assessment page updated successfully', assessmentPage });
  } catch (error) {
    console.error('Error updating assessment page:', error);
    return res.status(500).json({ message: 'Failed to update assessment page' });
  }
};

const deleteAssessmentPage = async (req, res) => {
  const { id } = req.params;

  try {
    const assessmentPage = await AssessmentPage.findByPk(id);
    if (!assessmentPage) {
      return res.status(404).json({ message: 'Assessment page not found' });
    }

    await assessmentPage.destroy();

    return res.status(200).json({ message: 'Assessment page deleted successfully' });
  } catch (error) {
    console.error('Error deleting assessment page:', error);
    return res.status(500).json({ message: 'Failed to delete assessment page' });
  }
};

module.exports = { createAssessmentPage, getAssessmentPageById, updateAssessmentPage, deleteAssessmentPage };
