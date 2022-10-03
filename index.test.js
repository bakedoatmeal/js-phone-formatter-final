const lib = require('./index.js')

test('Returns a formatted string when provided a string of 10 numbers', () => {
  expect(lib.formatter('5148888888')).toEqual('(514) 888-8888')
})

test('Returns a formatted string when provided a partially formatted string', () => {
  expect(lib.formatter('514 888 8888')).toEqual('(514) 888-8888')
  expect(lib.formatter('514 888-8888')).toEqual('(514) 888-8888')
  expect(lib.formatter('514-888-8888')).toEqual('(514) 888-8888')
  expect(lib.formatter('(514)-888-8888')).toEqual('(514) 888-8888')
})

test('Returns an error message when string does not include 10-digit phone number', () => {
  expect(lib.formatter('43')).toEqual('Please provide a 10-digit phone number')
  expect(lib.formatter('')).toEqual('Please provide a 10-digit phone number')
  expect(lib.formatter('433423532543dsfdgd')).toEqual('Please provide a 10-digit phone number')
})
