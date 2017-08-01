import test from 'ava'
import sdk from '../src/lib'

test('Hydrate configuration', t => {
  const instance = sdk.create()
  t.is(instance.environment, `production`)
  t.is(instance.format, `json`)
  t.is(instance.origin, ``)
  t.is(instance.authentication.type, `session`)
  t.is(instance.credentials.username, ``)
  t.is(instance.credentials.password, ``)
  t.is(instance.credentials.api_key, ``)
})
