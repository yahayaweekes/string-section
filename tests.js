const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const stringIncludes = require('./index').stringIncludes
const countLetter = require('./index').countLetter
const camelCase = require('./index').camelCase

describe('String Functions', () => {
  describe('stringIncludes', () => {
    it('returns true when given "racecar" and "ace"', () => {
      const includes = stringIncludes('racecar', 'ace')

      expect(includes).to.equal(true)
    })

    it('returns false when given "racecar" and "care"', () => {
      const includes = stringIncludes('racecar', 'care')

      expect(includes).to.equal(false)
    })
  })

  describe('countLetter', () => {
    it('returns 2 when given "racecar" and "a"', () => {
      const count = countLetter('racecar', 'a')

      expect(count).to.equal(2)
    })

    it('returns 0 when given "racecar" and "x"', () => {
      const count = countLetter('racecar', 'x')

      expect(count).to.equal(0)
    })
  })

  describe('camelCase', () => {
    it('returns the correct camel case name of a sentence when written in all lower case', () => {
      const cc = camelCase('get string from object')

      expect(cc).to.equal('getStringFromObject')
    })

    it('returns the correct camel case name of a sentence when written in all upper case', () => {
      const cc = camelCase('GET STRING FROM OBJECT')

      expect(cc).to.equal('getStringFromObject')
    })


    it('returns the correct camel case name of a sentence when written in title case', () => {
      const cc = camelCase('Get String From Object')

      expect(cc).to.equal('getStringFromObject')
    })

    it('returns the correct camel case name of a sentence when written in crazy case', () => {
      const cc = camelCase('GeT stRIng FroM ObJeCt')

      expect(cc).to.equal('getStringFromObject')
    })
  })
})
