const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  } 
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

User.belongsTo(Role, { foreignKey: 'roleId' });;






const Training = sequelize.define('Training', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    trainingName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trainingDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    trainingImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfDaysAlloted: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  const TrainingSchedule = sequelize.define('TrainingSchedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'id'
      }
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Training,
        key: 'id'
      }
    },
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });
  

const Assessment = sequelize.define('Assessment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Training,
        key: 'id'
      }
    },
    obtainedScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

const ProgressTracking = sequelize.define('ProgressTracking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Training,
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('in progress', 'completed'),
      allowNull: false,
      defaultValue: 'in progress'
    }
  });

const PersonalizedReport = sequelize.define('PersonalizedReport', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    performanceSummary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recommendations: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  const ModuleDetails = sequelize.define('ModuleDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Training,
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    videoLink: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

// Define the relationship between ModuleDetails and Training
ModuleDetails.belongsTo(Training, { foreignKey: 'trainingId' });

const AssessmentPage = sequelize.define('AssessmentPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  trainingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Training,
      key: 'id'
    }
  },
  newques: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  option1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  option2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  option3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  option4: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

const BroadcastMessage = sequelize.define('BroadcastMessage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

const TrainingProgress = sequelize.define('TrainingProgress', {
  userId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  status: {
      type: DataTypes.STRING,
      allowNull: false
  }
});


const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// Define the association between User and Profile
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

module.exports = Role;