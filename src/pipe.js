/**
 * Compose a list of functions into a "pipeline" function
 *
 * @func
 * @curried
 * @param {Array<Function>} fns
 * @param {Array<*>} args
 * @return {Function}
 * */
export const pipe = (...fns) => (...args) => fns.reduce((res, fn) => [fn(...res)], args)[0]
