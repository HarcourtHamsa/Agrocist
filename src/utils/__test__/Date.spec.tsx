import {dateAndTimeFormat, getCurrentTimestamp} from 'utils/input/dateFormatter'

describe(`DateAndTimeFormat works as expected`, () => {
  it('it formats dateAndTimeFormat without formatter properly ', () => {
    expect(dateAndTimeFormat(1645352828473)).toEqual(`11:27AM, Feb 20 2022`)
  })
  it('it formats dateAndTimeFormat with formatter properly ', () => {
    expect(dateAndTimeFormat(1645352828473, 'MMM DD YYYY')).toEqual(
      `Feb 20 2022`,
    )
  })
})

describe(`Gets the current Timestamp`, () => {
  it('gets the current timestamp ', () => {
    expect(getCurrentTimestamp()).toEqual(new Date().getTime())
  })
})
