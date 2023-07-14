const { BadRequestError } = require('../../../utils/errors/httpErrors');
const { files, file } = require('../../../config')
const { FileHelper } = require('.');

exports.getAllInformationOfFiles = async (fileName) => {

  const data = await FileHelper.callExternalApi(files)


  if (fileName) {
    const findFile = data.files.find(file => file == fileName)
    if (!findFile) throw new BadRequestError('File no exists in the service');
  }

  let allFiles = []

  await data.files.reduce(async (previousPromise, element) => {
    await previousPromise;
    const reponse = await FileHelper.callExternalApi(file + "" + element)
    if (reponse && reponse != 500 && reponse != 404) {

      let row = reponse.split("\n")

      let lines = []
      for (i = 1; i < row.length; i++) {
        let columns = row[i].split(",")
        if (columns.length == 4 &&
          (columns[3] != '' && columns[3] != undefined && columns[3].length == 32) &&
          (columns[2] != '' && columns[2] != undefined && FileHelper.containsOnlyNumbers(columns[2])) &&
          (columns[1] != '' && columns[1] != undefined))
          lines.push({
            "text": columns[1],
            "number": columns[2],
            "hex": columns[3],
          })
      }
      if (lines.length > 0)
        allFiles.push({
          "file": element,
          "lines": lines
        })
    }

    return Promise.resolve();
  }, Promise.resolve());

  return fileName ? allFiles.find(file => file.file == fileName) : allFiles
};


exports.getFiles = async () => {

  return await FileHelper.callExternalApi(files)

};

