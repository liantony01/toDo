const Task = require('../models/task');

exports.getAddTask = (req, res, next) => {
  res.render('admin/create-task', {
    path: '/admin/create-task',
    editing: false,
  });
};

exports.postAddTask = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  Task.create({
    title,
    description,
  })
    .then((result) => {
      console.log(result);
      console.log('Created task');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getHomePage = (req, res, next) => {
  res.render('admin/home-page', {
    path: '/admin/home-page',
  });
};

exports.getToday = (req, res, next) => {
  Task.findAll() //  Mysql condition to find all data in the database
    .then((task) => {
      res.render('admin/today', {
        tasks: task, // make reference to use in today.ejs template
        path: '/admin/today',
      });
    })
    .catch((err) => {
      consol.log(err);
    });
};


// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId, product => {
//     if (!product) {
//       return res.redirect('/');
//     }
//     res.render('admin/edit-product', {
//       pageTitle: 'Edit Product',
//       path: '/admin/edit-product',
//       editing: editMode,
//       product: product
//     });
//   });
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   const updatedProduct = new Product(
//     prodId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedDesc,
//     updatedPrice
//   );
//   updatedProduct.save();
//   res.redirect('/admin/products');
// };

//  logic to delete task
exports.postDeleteTask = (req, res, next) => {
  const tkId = req.body.taskId
  Task.findByPk(tkId)
    .then(task => {
      return task.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/today');
    })
    .catch(err => console.log(err));
};