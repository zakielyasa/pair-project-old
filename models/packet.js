'use strict';
module.exports = (sequelize, DataTypes) => {
  var Packet = sequelize.define('Packet', {
    packet_name: DataTypes.STRING,
    quota: DataTypes.INTEGER
  });

  Packet.associate = function (model) {
    Packet.hasMany(model.User, {
      foreignKey: 'PacketId'
    })    
  };

  return Packet;
};