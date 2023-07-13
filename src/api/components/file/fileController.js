const FileService = require('./fileService');

exports.files = async (req, res, next) => {
  
  try {
    const files = await FileService.getAllInformationOfFiles();
    res.json(files);
  } catch (err) {
    next(err);
  }
};
