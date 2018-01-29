'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    full_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,    
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PacketId:DataTypes.INTEGER,
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        User.password = bcrypt.hashSync(User.password, salt);
      }
    }
  });
  
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  
  User.associate = function (models) {    
    User.belongsTo(models.Packet, {
      foreignKey: 'PacketId'
    })

    User.belongsToMany(models.Song, {
      through: 'Playlist',
      foreignKey: 'UserId'
    })
  }

  return User;
};