import querystring from 'querystring'

export default class Base {

  constructor(config) {
    this._configure(config, this._itemsToHydrate())
  }

  /**
   * @description Generator conditions string from object
   * @param filters
   * @return {string}
   */
  filter(filters) {
    const output = Object.keys(filters)
      .map((key) => [key, filters[key]])
      .reduce((tmp, [name, str], index) => {
        const [, op, value] = /([=:<>!]{1,2})?(.*)/.exec(str)
        tmp[`conditions[${index}][field]`] = name
        tmp[`conditions[${index}][op]`] = op || '='
        tmp[`conditions[${index}][value]`] = value
        return tmp
      }, {})
    return `${querystring.stringify(output)}`
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
