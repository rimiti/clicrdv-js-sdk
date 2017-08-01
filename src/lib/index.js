import sdk from '../class'

sdk.configure({
  "environment": "production",
  "output": "json",
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
