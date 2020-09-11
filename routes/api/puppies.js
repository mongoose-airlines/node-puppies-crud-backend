const router = require('express').Router();
const puppiesCtrl = require('../../controllers/api/puppies');

router.get('/', puppiesCtrl.index);
router.post('/', puppiesCtrl.create);
router.get('/:id', puppiesCtrl.show);
router.put('/:id', puppiesCtrl.update);
router.delete('/:id', puppiesCtrl.delete);

module.exports = router;