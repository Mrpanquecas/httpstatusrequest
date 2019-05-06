import Axios from "axios"
import { message, notification } from 'ant-design-vue'
import { router} from '../router'
Axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')



export const openNotificationWithType = (type, messageText) => {
  const msg = {...messageText, message: messageText }
  message[type](msg.message)
}

const handleHTTPRequestError = error => {
  if(error && error.response && error.response.data) {
    // openNotificationWithType('error', error.response.data.message || 'Something went wrong')
  }
  if(error.config.url.includes('/login')) return openNotificationWithType('error', 'Error in Login')
  if(!error.response) return message.info('/exceptions/network_error')
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      return message.info('/login')
    }
    if (error.response.status === 404) {
      notification.error({
        description: 'What you are looking for is not here',
        title: 'Error'
      })
      return router.push({name: '404'})
    }
    if (error.response.status === 500) {
      return router.push({name: '500'})
    }
    if (error.response.status === 422) {
      return message.error(error.response.data.message)
    }
  }
}

Axios.interceptors.request.use(config => {
  return config
}, error => {
    return Promise.reject(error)
})


Axios.interceptors.response.use(response => {
  if(!response.data) {
    return message.info('/exceptions/network_error')
  }

  if(response.data.hasOwnProperty('message')) {
    openNotificationWithType('success', response.data.message)
  }
  return Promise.resolve(response)
}, (error) => {
  handleHTTPRequestError(error)
  return Promise.reject(error)
})
