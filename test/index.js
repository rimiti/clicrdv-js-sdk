import test from 'ava'
import sdk from '../src/lib'

test('Generate filters', t => {
  const api = sdk.create()
  const filters = api.filter({deleted: false, taker: 'ClicRDV', updated_at: '>2015-10-29 10:00:00'})
  t.is(filters, `conditions%5B0%5D%5Bfield%5D=deleted&conditions%5B0%5D%5Bop%5D=%3D&conditions%5B0%5D%5Bvalue%5D=false&conditions%5B1%5D%5Bfield%5D=taker&conditions%5B1%5D%5Bop%5D=%3D&conditions%5B1%5D%5Bvalue%5D=ClicRDV&conditions%5B2%5D%5Bfield%5D=updated_at&conditions%5B2%5D%5Bop%5D=%3E&conditions%5B2%5D%5Bvalue%5D=2015-10-29%2010%3A00%3A00`)
})
