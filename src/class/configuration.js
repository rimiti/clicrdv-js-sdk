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
    this._environment = value
  }

  get output() {
    return this._output
  }

  set output(value) {
    this._output = value
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
    return ['environment', 'output', 'origin', 'authentication', 'credentials']
  }

}
