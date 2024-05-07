// backend/src/app.js

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const reportRoutes = require('./routes/reportRoutes');
const trainingScheduleRoutes = require('./routes/trainingSchedule');
const assessmentPageRoutes = require('./routes/assessmentPageRoutes');
const authRoles= require('./routes/authRoles');
const broadcastRoutes = require('./routes/broadcastRoutes');
const moduleDetails = require('./routes/moduleDetails');
const progressRoutes = require('./routes/progressRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/training-schedule', trainingScheduleRoutes);
app.use('/api/assessment-pages', assessmentPageRoutes);
app.use('/api/broadcast', broadcastRoutes);
app.use('/api/roles', authRoles);
app.use('/api/modules', moduleDetails)
app.use('/api/progress', progressRoutes);

module.exports = app;
