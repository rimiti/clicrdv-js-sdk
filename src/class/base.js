import Configuration from './configuration'
import querystring from 'querystring'

export default class Base extends Configuration {

  constructor(config) {
    super(config)
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

}
