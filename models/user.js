module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT
      }
    });
  
    return User;
  };
  