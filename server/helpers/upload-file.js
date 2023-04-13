const path = require("path");
const {v4: uuidv4} = require("uuid");

const imageExtension = ["png", "jpg", "jpeg"];

const uploadFile = (files, validFileExtensions = imageExtension, fileFolder = "") => {

  return new Promise((resolve, reject) => {

    const { file } = files;

    const fileName = file.name.split(".");

    const fileExtension = fileName[fileName.length - 1];

    //Validating file extentions
    if (!validFileExtensions.includes(fileExtension)) {
      return reject(`The estension file ${fileExtension} is not valid, only ${validFileExtensions}`);
    };

    const fileNameTemp = uuidv4() + "." + fileExtension;

    uploadPath = path.join(__dirname, "../uploads", fileFolder, fileNameTemp);

    file.mv(uploadPath, (err) => {
      if (err) {
        reject(err);
      };

      resolve(fileNameTemp);
    });

  });

};

module.exports = uploadFile