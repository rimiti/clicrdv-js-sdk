export default class Configuration {

  constructor(config) {
    this._configure(config, this._itemsToHydrate())
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
