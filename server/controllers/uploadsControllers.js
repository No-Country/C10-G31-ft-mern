const uploadFile = require('../helpers/upload-file');

const Product = require('../models/Product');
const Seller = require('../models/Seller');

const postUploads = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({ message: "No files were uploaded." });
    return;
  }

  try {
    const fullPath = await uploadFile(req.files, undefined, "prueba");

    res.json({
      nameFile: fullPath
    });
  } catch (message) {
    res.status(400).json({ message });
  }
};

// const patchImage = async(req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
//     res.status(400).json({message: "No files were uploaded."});
//     return;
//   }

//   // const {id, collection} = req.params;
//   const id = req.params.id;
//   const collection = req.params.collection;

//   let model;

//   switch(collection) {
//     case 'products':
//       model = await Product.findById(id);
//       if(!model) {
//         return res.status(400).json({
//           message: `Product with ${id} doest not exist`
//         });
//       }

//     break;

//     default:
//       return res.status(500).json({message: 'It does not was validated'});
//   }

//   const fullPath = await uploadFile(req.files, undefined, collection);

//   model.image = fullPath;

//   await model.save();

//   res.json(model);
// };

const patchImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({ message: "No files were uploaded." });
    return;
  };

  const id = req.params.id;

  let model;

  model = await Product.findById(id);
  if (!model) {
    return res.status(400).json({
      message: `Product with ${id} doest not exist`
    });
  }

  const fullPath = await uploadFile(req.files, undefined, "products");

  model.image = fullPath;
  
  await model.save();

  res.json(model);
};

module.exports = {
  postUploads,
  patchImage
};



