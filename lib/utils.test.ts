import { cn } from './utils'

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('foo', { bar: true })).toBe('foo bar')
  })
})
