import SDK from './sdk'
import jsonOverride from 'json-override'

let configuration

export default {

  /**
   * @description Configure the generator with configurations
   * @param config
   */
  configure: (config) => configuration = jsonOverride(configuration, config),

  /**
   * @description Instantiate SDK class
   * @returns {SDK}
   */
  create: () => new SDK(configuration)

}

