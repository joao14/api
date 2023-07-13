const { BadRequestError } = require('../../../utils/errors/httpErrors');
const { files, file, secret } = require('../../../config')
const { FileHelper } = require('.');

exports.getAllInformationOfFiles = async () => {

  const data = await FileHelper.callExternalApi(files)

  let allFiles = []

  await data.files.reduce(async (previousPromise, element) => {
    await previousPromise;
    const data_file = await FileHelper.callExternalApi(file + "" + element)

    if (data_file) {

      let row = data_file.split("\n")

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

      allFiles.push({
        "file": element,
        "lines": lines
      })
    }

    return Promise.resolve();
  }, Promise.resolve());

  return allFiles
};
