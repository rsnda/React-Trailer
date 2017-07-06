import mutliply from '../index.js'

it('multiply 2 numbers', () => {
    expect(mutliply(2, 5)).toBe(10)
})

it('multiply GONE WRONG', () => {
    expect(mutliply(2, 5)).not.toBe(15000)
})

it('multiply float', () => {
    expect(mutliply(2.0, 5)).toBe(10.0)
})

it('multiply minus', () => {
    expect(mutliply(2, -5)).toBe(-10)
})

it('mutliply not a number', () => {
    expect(() => mutliply('lol', 5)).toThrowError('Arguments must be numbers')
})

it('mutliply not a number 2', () => {
    expect(() => mutliply('2', 5)).toThrowError('Arguments must be numbers')
})