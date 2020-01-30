const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../configAuth/secrets')
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  //const { username, password } = req.headers;
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'failed' })
      } else {
        next()
      }
    })
  } else {
    res.status(401).json({ message: "failed" })
  }
  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
};
