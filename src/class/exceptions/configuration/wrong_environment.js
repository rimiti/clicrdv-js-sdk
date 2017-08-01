import Exception from '../base'

export default class ConfigurationWrongEnvironment extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message || `Only "production" or "sandbox" environment value can be set.`
  }

}
