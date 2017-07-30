import Exception from '../../base/index'

export default class ExceptionInterventionNotFound extends Exception {

  constructor(message) {
    super()
    this.name = 'ExceptionInterventionNotFound'
    this.message = message
  }
}
