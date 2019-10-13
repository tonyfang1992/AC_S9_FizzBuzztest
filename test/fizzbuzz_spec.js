
var should = chai.should()

describe('Test fizzBuzz function', function () {
  it('should return Fizz when %3 equal to 0', function () {
    let testinput = 9
    let result = fizzBuzz(testinput)
    let results = 'Fizz'
    result.should.be.equal(results)
  })

  it('should return Buzz when %5 equal to 0', function () {
    let testinput = 10
    let result = fizzBuzz(testinput)
    let results = 'Buzz'
    result.should.be.equal(results)
  })

  it('should return FizzBuzz when %3 & %5 equal to 0', function () {
    let testinput = 15
    let result = fizzBuzz(testinput)
    let results = 'FizzBuzz'
    result.should.be.equal(results)
  })

  it('should return input when %3 & %5 not equal to 0', function () {
    let testinput = 8
    let result = fizzBuzz(testinput)
    let results = testinput
    result.should.be.equal(results)
  })
}) 