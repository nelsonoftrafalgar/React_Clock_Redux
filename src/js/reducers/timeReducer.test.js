import timeReducer from './timeReducer'

describe('timeReducer reducer', () => {
  it('should return current time', () => {
    expect(
      timeReducer(undefined, {})
    ).toEqual({
      hrFirst: new Date().toLocaleTimeString().charAt(0),
      hrSecond: new Date().toLocaleTimeString().charAt(1),
      minFirst: new Date().toLocaleTimeString().charAt(3),
      minSecond: new Date().toLocaleTimeString().charAt(4),
    })
  })
})
