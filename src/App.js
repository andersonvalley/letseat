import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import Products from './components/Products/Index'
import Cart from './components/Cart/Index'
import Popup from './components/UI/Popup'
import {
  setProducts,
  addToCart,
  setLoaded,
  increment,
  decrement,
  deleteItem,
} from './redux/actions/products'

function App() {
  const [totalPrice, setTotalPrice] = React.useState()
  const [showPopup, setShowPopup] = React.useState(false)
  const [dataToPopup, setDataToPopup] = React.useState([])

  const { isLoading } = useSelector((store) => store.productsReducer)
  const { cartItems } = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  React.useEffect(() => {
    async function start() {
      await axios
        .get('https://6171b13dc20f3a001705fe8b.mockapi.io/products')
        .then(({ data }) => {
          dispatch(setProducts(data))
          dispatch(setLoaded(false))
        })
    }

    start()

    const products = JSON.parse(localStorage.getItem('cartItems'))
    if (!products) return
    products.forEach((item) => {
      dispatch(addToCart(item))
    })
  }, [dispatch])

  const showPopupHandler = (e, product) => {
    e.preventDefault()
    setShowPopup(true)
    setDataToPopup([product])
  }

  const incrementQuantity = (item) => {
    dispatch(increment(item))
  }

  const decrementQuantity = (item, index) => {
    if (item.quantity <= 1) {
      dispatch(deleteItem(index))

      if (cartItems.length === 0) {
        localStorage.removeItem('cartItems')
      }
    }
    dispatch(decrement(item))
  }

  const addItemToCart = (product) => {
    product.quantity = 1
    if (cartItems.find((i) => i.id === product.id)) return

    dispatch(addToCart(product))

    localStorage.setItem('cartItems', JSON.stringify([...cartItems, product]))
  }

  React.useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cartItems'))
    if (!products) return

    products.forEach((i) => {
      cartItems.forEach((q) => {
        if (i.quantity !== q.quantity) {
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }
      })
    })

    let sum = 0
    for (let item of cartItems) {
      sum += item.price * item.quantity
    }
    setTotalPrice(sum)
  }, [cartItems])

  return (
    <>
      <Header />
      <main className="main">
        <div className="content">
          {showPopup && (
            <Popup
              setShowPopup={setShowPopup}
              addItemToCart={addItemToCart}
              dataToPopup={dataToPopup}
            />
          )}
          <Products
            isLoading={isLoading}
            showPopupHandler={showPopupHandler}
            addItemToCart={addItemToCart}
          />
          <Cart
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            totalPrice={totalPrice}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
