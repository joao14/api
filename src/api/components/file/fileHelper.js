const { secret } = require('../../../config')
const axios = require('axios');

exports.callExternalApi = async (url) => {
  const data = axios.get(url, { 'headers': { 'Authorization': 'Bearer ' + secret } })
    .then(function (response) {
      return response.data
    })
    .catch(function (err) {
      return err.response.status
    })

  return data
}

exports.containsOnlyNumbers = (str) => {
  return /^\d+$/.test(str);
}

