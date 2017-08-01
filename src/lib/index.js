import sdk from '../class'

sdk.configure({
  "environment": "production",
  "format": "json",
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
