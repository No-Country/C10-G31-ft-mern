const router = require("express").Router();
const {check} = require('express-validator');

const uploadsControllers = require("../../controllers/uploadsControllers");
const {validCollections} = require('../../helpers/validators')
const validatingFields = require('../../middlewares/validate-fields')


router.route('/')
  .post(uploadsControllers.postUploads);

router.route('/products/:id')
  .patch(uploadsControllers.patchImage)

// router.route('/:collections/:id')
//   .patch(
//     check('collection').custom(c => validCollections(c, ['products'])),
//     validatingFields,
//     uploadsControllers.patchImage
//   )

module.exports = router;