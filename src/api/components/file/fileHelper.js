const { secret } = require('../../../config')
const axios = require('axios');

exports.callExternalApi = async (url) => {
  const data = axios.get(url, { 'headers': { 'Authorization': 'Bearer ' + secret } })
    .then(function (response) {
      return response.data
    })
    .catch(function (err) {
      if (err.response.status == 500) {
        console.log("Error de descarga de archivo")
      }
      if (err.response.status == 400) {
        console.log("Se encunetra problemas en el servidor")
      }
    })

  return data
}

exports.containsOnlyNumbers = (str) => {
  return /^\d+$/.test(str);
}

