'use strict';
module.exports = (sequelize, DataTypes) => {
  var Song = sequelize.define('Song', {
    song_title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    file_name: DataTypes.STRING
  });

  Song.associate = function (model) {    
    Song.belongsToMany(model.User, {
      through: 'Playlist',
      foreignKey: 'SongId'
    })
  };
  return Song;
};