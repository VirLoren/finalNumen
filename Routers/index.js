const express = require ('express');
const router = express.Router();
const {index} = require ('../Controllers/indexController')

router.get ('/', index);


module.exports = router;