import axios from 'axios'
var md5 = require('md5')

const ts = process.env.REACT_APP_APIKEY_TS ?? '1'
const hash = md5(
  ts + process.env.REACT_APP_PRIVATE_APIKEY + process.env.REACT_APP_APIKEY,
)

export const getCharacters = async (page = 0): Promise<any> => {
  const offset = page * 20

  return await axios
    .get(
      `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.REACT_APP_APIKEY}&hash=${hash}&offset=${offset}`,
    )
    .then((data) => {
      console.log()
      return data.data.data
    })
    .catch((error) => {
      return error
    })
}

export const getCharacterId = async (id: number): Promise<any> => {
  return await axios
    .get(
      `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${process.env.REACT_APP_APIKEY}&hash=${hash}`,
    )
    .then((data) => {
      return data.data.data
    })
    .catch((error) => {
      return error
    })
}
