import Exception from '../base'

export default class ConfigurationWrongAuthenticationType extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }

}
