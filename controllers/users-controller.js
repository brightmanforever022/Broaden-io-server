const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../models')
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const Upload = require('s3-uploader');


module.exports = function(app) {

  //SHOW USER
  app.get('/users/:userId', function(req, res) {
    console.log('SHOW user:', req.params.userId);
    const id = req.params.userId;

    db.User.findOne({ where: {id} }).then((userData) => {
      const user = userData.dataValues;
      if (!user) {
        // User not found
        return res.status(400).send({ message: 'Cannot get user' });
      }
      res.status(200);
      res.json({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        avatarURL: user.avatarURL
      });
    })
    .catch((err) => {
      if (err) {
        res.status(400);
        res.json({
          message: "Cannot get user"
        });
      }
    })

  });

  //SHOW PROFILE
  app.get('/profile', function(req, res) {
    if (req.user) {
      const username = req.user.username;
      db.User.findOne({ where: { username } }).then((userData) => {
        const user = userData.dataValues;
        if (!user) {
          // User not found
          return res.status(400).send({ message: 'Cannot get user' });
        }
        res.status(200);
        res.json({
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio,
          avatarURL: user.avatarURL
        });
      })
      .catch((err) => {
        if (err) {
          res.status(400);
          res.json({
            message: "Cannot get user"
          });
        }
      })
    } else {
      res.status(401);
      res.json({
        message: "Not logged in"
      })
    }
  })

  // UPDATE USER
  app.put('/users/:userId', function(req, res) {
    console.log('PUT user:', req.params.userId);

    res.redirect('/');
  });

  // Get User Name
  app.get('/user/:username', function(req, res) {
    // console.log('PUT user:', req.params.userId);
    const username = req.params.username

    const userId = req.params.id
    const user = req.body
    db.User.update(user, {
      where: { username: username }
    }).then((response) => {
        res.status(200)
        res.json({
          message: 'user updated successfully!',
        })
      }).catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });


  //DELETE USER
  app.delete('/users/:userId', function(req, res) {
    console.log('DELETE user:', req.params.userId);

    db.User.destroy({
      where: {
        id: req.params.userId
      }
    }).then(() => {
      db.User.findOne({
        where: {
          id: req.params.userId
        }
      }).then((user) => {
        if (!user) {
          res.send('Deleting user!')
        } else {
          res.send('Error deleting user');
        }
      })
    }).catch((err) => {
      console.log(err);
      res.json( {
        message: "Error deleting user",
        error: err
      });
    });
  });
}
