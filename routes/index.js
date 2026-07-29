const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const komikController = require('../controllers/komikController');
const genreController = require('../controllers/genreController');
const auth = require('../middleware/auth');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Genre routes
router.get('/genre', auth, genreController.getGenres);
router.post('/genre', auth, genreController.createGenre);
router.put('/genre/:id', auth, genreController.updateGenre);
router.delete('/genre/:id', auth, genreController.deleteGenre);

// Komik routes
router.get('/komik', auth, komikController.getKomiks);
router.post('/komik', auth, komikController.createKomik);
router.put('/komik/:id', auth, komikController.updateKomik);
router.delete('/komik/:id', auth, komikController.deleteKomik);

module.exports = router;
 


