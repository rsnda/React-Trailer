import _ from 'lodash'

export default function multiply(a, b)
{
    if(!_.isNumber(a) || !_.isNumber(b))
        throw new Error('Arguments must be numbers')

    return a*b
}