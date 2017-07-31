import sdk from '../class'

sdk.configure({
  "environment": "production",
  "origin": "",
  "authentication": {
    "type": "session"
  },
  "credentials": {
    "username": "",
    "password": "",
    "api_key": ""
  }
})

export default sdk
