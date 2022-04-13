const positiveSum = require('../sup')

  test('Number of sum', () => {
    expect(positiveSum([1,2,3,4])).toEqual(10)
    expect(positiveSum([3,6,2,8])).toEqual(19)
  })


  const opposite = require('../sup2')

  test('Opposite num', () => {
    expect(opposite(1)).toEqual(-1)
    expect(opposite(14)).toEqual(-14)
    expect(opposite(34)).toEqual(-34)
  })

  const removeChar = require('../sup3')

  test('remChar', () => {
    expect(removeChar('country')).toEqual('ountr')
    expect(removeChar('person')).toEqual('erso')
    expect(removeChar('place')).toEqual('lac')
    
  })


  const repeatStr = require('../sup4')

  test('stringRepeat', () => {
    expect(repeatStr(2, 't')).toBe('tt')
    expect(repeatStr(3, '*')).toBe('***')
    expect(repeatStr(7, 'so')).toBe('sososososososo')
  })
