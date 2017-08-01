import Exception from '../base'

export default class ConfigurationWrongEnvironment extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }

}
