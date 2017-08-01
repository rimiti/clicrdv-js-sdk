import Exception from '../base'

export default class ConfigurationWrongAuthenticationType extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message || `Only "session" or "basic-auth" authentication type can be set.`
  }

}
