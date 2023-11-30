const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('homepage', {
  });
});

// Routes for most of the pages. 
router.get('/about', async (req, res) => {
  res.render('about', {
  });
});
router.get('/profile', async (req, res) => {
  res.render('profile', {
  });
});
router.get('/garage', async (req, res) => {
  res.render('garage', {
  });
});
router.get('/features', async (req, res) => {
  res.render('features', {
  });
});
router.get('/pricing', async (req, res) => {
  res.render('pricing', {
  });
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
