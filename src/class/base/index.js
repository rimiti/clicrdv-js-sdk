import config from '../../config'

export default class {

  constructor() {
    this.scheme = config.scheme
    this.domain = config.domain
  }

  get scheme() {
    return this._scheme
  }

  set scheme(value) {
    this._scheme = value
  }

  get domain() {
    return this._domain
  }

  set domain(value) {
    this._domain = value
  }

  get url() {
    return `${this.scheme}://${this.domain}`
  }

}
