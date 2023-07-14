const FileService = require('./fileService');

exports.files = async (req, res, next) => {

  const { fileName } = req.query;

  try {
    const files = await FileService.getAllInformationOfFiles(fileName);
    res.json(files);
  } catch (err) {
    next(err);
  }
};

exports.listAllFiles = async (req, res, next) => {

  try {
    const files = await FileService.getFiles();
    res.json(files);
  } catch (err) {
    next(err);
  }
};