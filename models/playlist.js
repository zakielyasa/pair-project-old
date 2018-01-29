'use strict';
module.exports = (sequelize, DataTypes) => {
  var Playlist = sequelize.define('Playlist', {
    playlist_name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  });

  Playlist.associate = function (model) {
    Playlist.belongsTo(model.Song, {
      foreignKey: 'SongId'
    });
    Playlist.belongsTo(model.User, {
      foreignKey: 'UserId'
    });
  };

  
  return Playlist;
};