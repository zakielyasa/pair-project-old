const express = require('express');
const app = express.Router();
const model = require('../models')
const Playlist = model.Playlist


// app.get('/profile/playlist', (req, res) => {  
//   Playlist.findAll()
//     .then( (dataSong) => {
//       res.render('songs', {
//         dataSong: dataSong        
//       })      
//     })    

// })

app.get('/profile/playlist', (req, res) => {
  res.render('playlist')
})

app.get('/profile/playlist/add', (req, res) => {
  res.render('playlist_add')
})

app.post('/profile/playlist/add', (req, res) => {
  let objPlaylist = {      
      playlist_name    : req.body.playlist_name,            
  }
  Playlist.create(objPlaylist)
  .then(res.redirect('/dashbord/ptofile/playlist'))
})


module.exports = app