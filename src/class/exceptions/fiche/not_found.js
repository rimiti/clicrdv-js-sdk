import Exception from '..'

export default class FicheNotFound extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }

}
