import {GET_ITEMS, FIND_ITEMS, OPEN_CART} from './actionsType';

/**
 * @param {*} data
 * @returns {{payload: *, type: string}}
 */
export const getItems = (data) => ({
    type: GET_ITEMS,
    payload: data,
})

/**
 * @param {string} input
 * @returns {{payload: *, type: string}}
 */
export const findItems = (input) => ({
    type: FIND_ITEMS,
    payload: input,
})

/**
 * @param {boolean} cartStatus
 * @returns {{payload: boolean, type: string}}
 */
export const openCart = (cartStatus) => ({
    type: OPEN_CART,
    payload: cartStatus,
})