import {
  ConfigurationWrongEnvironment,
  ConfigurationWrongAuthenticationType,
  ConfigurationWrongFormat
} from './exceptions'

export default class Configuration {

  /**
   * @description Auto-hydrate object from configuration
   * @param config
   */
  constructor(config) {
    this._configure(config, this._itemsToHydrate())
  }

  get environment() {
    return this._environment
  }

  set environment(value) {
    if (!['production', 'sandbox'].includes(value)) throw new ConfigurationWrongEnvironment()
    this._environment = value
  }

  get format() {
    return this._format
  }

  set format(value) {
    if (!['json', 'xml'].includes(value.type)) throw new ConfigurationWrongFormat()
    this._format = value
  }

  get origin() {
    return this._origin
  }

  set origin(value) {
    this._origin = value
  }

  get authentication() {
    return this._authentication
  }

  set authentication(value) {
    if (!['session', 'basic-auth'].includes(value.type)) throw new ConfigurationWrongAuthenticationType()
    this._authentication = value
  }

  get credentials() {
    return this._credentials
  }

  set credentials(value) {
    this._credentials = value
  }

  /**
   * @description Hydrate object from configuration settings
   * @param obj
   * @param attributes
   */
  _configure(obj, attributes) {
    if (!obj) return
    for (let item of attributes) {
      this[item] = (obj[item]) ? obj[item] : ''
    }
  }

  /**
   * @description Return array with items names to hydrate
   * @return {[string,string,string,string,string]}
   * @private
   */
  _itemsToHydrate() {
    return ['environment', 'format', 'origin', 'authentication', 'credentials']
  }

}
