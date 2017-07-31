import Exception from '..'

export default class InterventionNotFound extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }

}
