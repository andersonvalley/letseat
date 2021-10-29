import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Cart.module.scss'

function Cart({ incrementQuantity, decrementQuantity, totalPrice }) {
  const { cartItems } = useSelector((store) => store.cartReducer)
  const [showCart, setShowCart] = React.useState(false)

  const showCartMobile = () => {
    setShowCart(!showCart)
  }

  const closeCartMobile = (e) => {
    e.preventDefault()
    if (e.target.parentElement.className !== 'Cart_cart__3wtkF') {
      setShowCart(false)
    }


  }

  return (
    <>
      <div onClick={(e) => closeCartMobile(e)} className={showCart ? styles.show_cart : styles.hide_cart}>
        <aside className={cartItems.length ? [styles.cart, styles.cart__cart_products].join(' ') : styles.cart}>

          <p className={styles.cart__title}>
            Корзина
            <span>{cartItems.length === 0 ? '' : cartItems.length}</span>
          </p>

          <div className={cartItems.length ? [styles.cart__content, styles.cart__content_full].join(' ') : styles.cart__content}>
            {
              cartItems.length
                ?
                <>
                  <ul className={styles.cart__products}>
                    {
                      cartItems.map((item, index) => {
                        return (
                          <li className={styles.cart__item} key={item.id}>
                            <img src={item.img} width="90" alt={item.title} />
                            <div className="cart__info">
                              <p>{item.title}</p>
                              <span>{item.price * item.quantity}  ₽</span>
                            </div>
                            <div className={[styles.btn__add, styles.cart__btn_count].join(' ')}>
                              <span onClick={() => decrementQuantity(item, index)}>-</span>
                              <span>{item.quantity}</span>
                              <span onClick={() => incrementQuantity(item)}>+</span>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>

                  <button className={styles.cart__btn_order}>
                    <span>Заказать</span>
                    <span className="sum">{totalPrice} ₽</span>
                  </button>
                </>
                :
                <>
                  <p>Тут пока пусто</p>
                  <span>Добавьте что-нибудь из списка слева</span>
                </>
            }

          </div>

        </aside >
      </div>
      <div onClick={showCartMobile} className={styles.mobile}></div>
    </>
  )
}

export default Cart
