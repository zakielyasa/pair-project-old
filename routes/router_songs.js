const express = require('express');
const app = express.Router();
const model = require('../models')
const Song = model.Song

app.get('/songs', (req, res) => {
  model.Song.findAll()
    .then((dataSong) => {
      if (req.session.user && req.cookies.user_sid) {
        res.render('songs', {
          dataSong: dataSong
        })
      } else {
        res.redirect('/login');
      }
    })
    .catch((err) => {
      res.send(err)
    })
})

app.post('/songs/add', (req, res) => {
  let objNewSong = {
    song_title: req.body.song_title,
    artist: req.body.artist,
    genre: req.body.genre,
    released_year: req.body.released_year,
    file_name: req.body.file_name,
  }
  Song.create(objNewSong)
    .then(() => {
      res.redirect('/dashboard/song')
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/songs/edit/:id', (req, res) => {
  Song.findById(req.params.id)
    .then(dataSong => {
      res.render('song_edit', {
        dataSong: dataSong
      })
    })
})

app.post('/songs/edit/:id', (req, res) => {
  let objEditSong = {
    id: req.params.id,
    song_title: req.body.song_title,
    artist: req.body.artist,
    genre: req.body.genre,
    released_year: req.body.released_year,
    file_name: req.body.file_name,
  }
  Song.update(objEditSong, {
      where: {
        id: objEditSong.id
      }
    })
    .then(res.redirect('/dashboard/song'))
})

app.get('/songs/delete/:id', (req, res) => {
  Song.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(res.redirect('/dashboard/song'))
})

module.exports = app