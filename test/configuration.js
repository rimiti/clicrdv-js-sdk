import test from 'ava'
import sdk from '../src/lib'

test('Hydrate configuration', t => {
  const api = sdk.create()
  t.is(api.environment, `production`)
  t.is(api.output, `json`)
  t.is(api.origin, ``)
  t.is(api.authentication.type, `session`)
  t.is(api.credentials.username, ``)
  t.is(api.credentials.password, ``)
  t.is(api.credentials.api_key, ``)
})
