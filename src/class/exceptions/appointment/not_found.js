import Exception from '..'

export default class AppointmentNotFound extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }

}
