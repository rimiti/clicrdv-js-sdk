import querystring from 'querystring'

export default (filters) => {
  const output = Object.keys(filters)
    .map((key) => [key, filters[key]])
    .reduce((array, [name, str], index) => {
      const [, op, value] = /([=<>!]{1,2})?(.*)/.exec(str)
      array[`conditions[${index}][field]`] = name
      array[`conditions[${index}][op]`] = op || '='
      array[`conditions[${index}][value]`] = value
      return array
    }, {})
  return `${querystring.stringify(output)}`
}
