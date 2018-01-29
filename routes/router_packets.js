const express = require('express');
const app = express.Router();
const model = require('../models')
const Packet = model.Packet


app.get('/packets', (req, res) => {
  Packet.findAll()
    .then((dataPacket) => {
      if (req.session.user && req.cookies.user_sid) {
        res.render('packets', {
          dataPacket: dataPacket
        })
      } else {
        res.redirect('/login');
      }

    })
    .catch((err) => {
      res.send(err)
    })
})

app.get('/packets/add', function (req, res) {
  res.render('packets_add')
});

app.post('/packets/add', (req, res) => {
  let objNewPacket = {
    packet_name: req.body.packet_name,
    quota: req.body.quota,
  }
  Packet.create(objNewPacket)
    .then(() => {
      res.redirect('/dashboard/packets')
    })
    .catch(err => {
      res.send(err)
    })
})

app.get('/packets/edit/:id', (req, res) => {
  let id = req.params.id
  Packet.findById(id)
    .then(result => {
      res.render('packets_edit', {
        dataPacket: result
      })
    })
})
app.post('/packets/edit/:id', (req, res) => {
  let objNewPacket = {
    packet_name: req.body.packet_name,
    quota: req.body.quota,
    id: req.params.id
  }
  Packet.update(objNewPacketm, {
      where: {
        id: objNewPacket.id
      }
    })
    .then(() => {
      res.redirect('/dashboard/packets')
    })
    .catch(err => {
      res.send(err)
    })
})
app.get('/packets/delete/:id', (req, res) => {
  let id = req.params.id
  Packet.destroy({
      where: {
        id: id
      }
    })
    .then(() => {
      res.redirect('/dashboard/packets')
    })
})



module.exports = app