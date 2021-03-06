const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

// Todos los usuarios
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', controller.store);

// Detalle de un usuario
router.get('/:id', controller.show);

module.exports = router;