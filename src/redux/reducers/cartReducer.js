const initialState = {
  cartItems: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] }

    case 'DELETE_ITEM_FROM_CART':
      const newArr = state.cartItems.splice(action.payload, 1)
      return {
        ...state,
        newArr,
      }

    case 'DELETE_ITEMS':
      return { ...state, cartItems: [] }

    case 'INCREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity + 1,
            }
          }
          return item
        }),
      }

    case 'DECREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity - 1,
            }
          }
          return item
        }),
      }

    default:
      return state
  }
}
