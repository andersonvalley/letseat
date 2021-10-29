const initialState = {
  products: [],
  isLoading: true,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_LOADED':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}
