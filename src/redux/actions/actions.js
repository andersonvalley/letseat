export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
})

export const setLoaded = (boolean) => ({
  type: 'SET_LOADED',
  payload: boolean,
})

export const addToCart = (items) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: items,
})

export const increment = (items) => ({
  type: 'INCREMENT_ITEM',
  payload: items,
})

export const decrement = (items) => ({
  type: 'DECREMENT_ITEM',
  payload: items,
})

export const deleteItem = (index) => ({
  type: 'DELETE_ITEM_FROM_CART',
  payload: index,
})

export const deleteItems = () => ({
  type: 'DELETE_ITEMS',
})
