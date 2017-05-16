var express = require('express');
var router = express.Router();

const controllers = require('../controllers/index');

/* GET home page. */
router.get('/', controllers.getDataAll);
router.get('/:id', controllers.getDataOne);
router.post('/', controllers.create);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.delete);

module.exports = router;
