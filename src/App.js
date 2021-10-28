import React from 'react'
import axios from 'axios'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import Slider from './components/Slider/Index'
import Categories from './components/Categories/Index'
import Goods from './components/Goods/Index'
import Cart from './components/Cart/Index'

function App() {
  const [products, setProducts] = React.useState([])
  const [cartItem, setCartItem] = React.useState([])
  const [navScroll, setNavScroll] = React.useState(false)

  const content = React.useRef()

  React.useEffect(() => {
    axios
      .get('https://6171b13dc20f3a001705fe8b.mockapi.io/products')
      .then(({ data }) => {
        setProducts(data)
      })
  }, [])

  function deleteItemFromCart(index) {
    cartItem.splice(index, 1)
    setCartItem((prev) => {
      localStorage.setItem('cart', JSON.stringify([...prev]))
      return [...prev]
    })
  }

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'))
    if (!items) return
    items.map((item) => {
      setCartItem((prev) => {
        return [...prev, item]
      })
      return null
    })
  }, [])

  const addItemToCart = (item) => {
    item.count = 1
    setCartItem((prev) => {
      localStorage.setItem('cart', JSON.stringify([...prev, item]))
      return [...prev, item]
    })
  }

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Slider
          cartItem={cartItem}
          addItemToCart={addItemToCart}
          products={products}
        />
        <Categories categories={products} navScroll={navScroll} />

        <div ref={content} className="content">
          <Goods
            products={products}
            addItemToCart={addItemToCart}
            cartItem={cartItem}
          />
          <Cart
            content={content}
            cartItem={cartItem}
            deleteItemFromCart={deleteItemFromCart}
            setNavScroll={setNavScroll}
            setCartItem={setCartItem}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
