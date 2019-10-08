import curry from '@earthtone/tiny-curry'
/**
 * Point free map
 * Supports both Arrays and Objects
 *
 * @func
 * @curried
 * @param {Function} fn - mapper function
 * @param {Array|Object} data - data to map over
 * @return {Array|Object}
 * */
export const map = curry((fn, data) => data.map(fn))
