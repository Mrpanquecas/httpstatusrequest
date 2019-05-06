import Axios from 'axios'

const arrayOfHTTP = [
  'https://www.mocky.io/v2/5cd09b0f3200000f0000fdcb',
  'https://www.mocky.io/v2/5ccb774e3300007200e017a7',
  'https://www.mocky.io/v2/5cd0a1d73200005e0000fde5'
]

export const magicFunction = () => {
  let randomOne = arrayOfHTTP[Math.floor(Math.random() * arrayOfHTTP.length)]
  return Axios.get(randomOne)
}


