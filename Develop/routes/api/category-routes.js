const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {   // find all categorie
  try {
 const categories = await Category.findAll({
  include: [Product], // be sure to include its associated Products
}); 
  res.json(categories);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
                                                                                           
});
// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id,{
      include: [Product],
    });
    if (!category) {
      res.status(404).json({message: 'Category not found'});
      return;
    }
      res.json(category);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
   
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});
// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category[0]) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json({ message: 'Category updated successfully' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found'});
    } else {
      res.json({message: 'Category deleted successfully'});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
