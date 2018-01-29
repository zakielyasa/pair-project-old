const express = require('express')
const app = express()

const model = require('./models')
const User = model.User

const cookieParser = require('cookie-parser')
var session = require('express-session');

const bodyParser = require('body-parser')
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(cookieParser());
app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  // resave: true,
  // saveUninitialized: false,
  // cookie: {
  //   expires: 600000
  // }
}));


const Packet = require('./routes/router_packets')
const Song = require('./routes/router_songs')
const Playlist = require('./routes/router_playlist')

app.use('/dashboard', Song)
app.use('/dashboard', Packet)
app.use('/dashboard', Playlist)


app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// middleware
let sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});

// route for user signup
app.route('/signup')
  .get(sessionChecker, (req, res) => {
    res.render('signup')
  })
  .post((req, res) => {
    let objUser = {
      username: req.body.username,
      full_name: req.body.full_name,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password
    }
    User.create(objUser)
      .then(user => {
        req.session.user = user.dataValues;
        res.redirect('/dashboard');
      })
      .catch(error => {
        res.redirect('/signup');
      });
  });

app.route('/login')
  .get(sessionChecker, (req, res) => {
    res.render('login')
  })
  .post((req, res) => {
    let username = req.body.username,
      password = req.body.password;

    User.findOne({
        where: {
          username: username
        }
      })
      .then(function (user) {
        if (!user) {
          res.redirect('/login');
        } else if (!user.validPassword(password)) {
          res.redirect('/login');
        } else {
          req.session.user = user.dataValues;
          res.redirect('/dashboard');
        }
      });
  });

// route for user's dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render('dashbord');
  } else {
    res.redirect('/login');
  }
});


app.get('/dashboard/profile', (req, res) => {
  username = req.params.id
  console.log(username)
  User.findOne({
      where: {
        username: 'zakiel'
      },
      include: [model.Packet]
    })
    .then((result) => {
      if (req.session.user && req.cookies.user_sid) {
        res.render('profile', {
          dataUser: result
        })
      } else {
        res.redirect('/login');
      }


    })
});

app.get('/dashboard/profile/edit/:id', (req, res) => {
  let id = req.params.id
  User.findById(id)
    .then((result) => {
      model.Packet.findAll()
        .then((PacketData) => {
          if (req.session.user && req.cookies.user_sid) {
            res.render('profile_edit', {
              dataUser: result,
              PacketData: PacketData,
            })
          } else {
            res.redirect('/login');
          }

        })
    })
    .catch((err) => {
      res.send(err)
    })
})

app.post('/dashboard/profile/edit/:id', (req, res) => {
  let objUser = {
    id: req.params.id,
    username: req.body.username,
    full_name: req.body.full_name,
    gender: req.body.gender,
    email: req.body.email,
    PacketId: req.body.PacketId,
  }
  User.update(objUser, {
      where: {
        id: objUser.id
      }
    })
    .then(() => {
      if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard/profile')
      } else {
        res.redirect('/login');
      }

    })
    .catch((err) => {
      res.send(err)
    })
})


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});
let port =  process.env.PORT || 5000

app.listen(3000, () => console.log('listening on port 3000!'))