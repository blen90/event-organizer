const router = require('express').Router();
// const withAuth = require('../utils/auth');
const { User } = require("../models");


router.get('/', async (req, res) => {
  console.log("Home page");
  try {
  

    res.render('home', {
      User,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




module.exports = router;
