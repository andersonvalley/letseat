import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartMakeOrder from '../CartMakeOrder/Index'
import styles from './Cart.module.scss'
import { deleteItems } from '../../redux/actions/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({ incrementQuantity, decrementQuantity, totalPrice }) {
  const { cartItems } = useSelector((store) => store.cartReducer)
  const [showCart, setShowCart] = React.useState(false)
  const [showMakeOrder, setShowMakeOrder] = React.useState(false)
  const dispatch = useDispatch()
  const notify = () => toast("Заказ отправлен! ");

  const [values, setValues] = React.useState({
    address: '',
    phone: '',
    name: '',
    appartment: '',
    floor: '',
    entrance: '',
    comments: ''
  })


  const showCartMobile = () => {
    setShowCart(!showCart)
  }

  const closeCartMobile = (e) => {
    e.preventDefault()
  }

  const deliveryInfo = () => {
    setShowMakeOrder(true)
  }


  const sendData = () => {
    const data = [values, ...cartItems]
    console.log(data)
    setValues({})
    dispatch(deleteItems())
    localStorage.removeItem('cartItems')
    notify()
  }


  return (
    <>
      <div onClick={(e) => closeCartMobile(e)} className={showCart ? styles.show_cart : styles.hide_cart}>
        <aside className={cartItems.length ? [styles.cart, styles.cart__cart_products, showMakeOrder ? styles.cart_width : styles.cart, styles.cart__cart_products].join(' ') : styles.cart}>
          <p className={styles.cart__title}>
            {showMakeOrder ? 'Ваш заказ' : 'Корзина'}
            <span>{cartItems.length === 0 ? '' : cartItems.length}</span>
          </p>
          <div onClick={() => setShowCart(false)} className={styles.cart__close}>+</div>
          <div onClick={() => setShowMakeOrder(false)} className={styles.cart__back}>{showMakeOrder ? '<' : ''}</div>
          <div className={cartItems.length ? [styles.cart__content, styles.cart__content_full].join(' ') : styles.cart__content}>
            {
              cartItems.length
                ?
                <>
                  <ul className={styles.cart__products}>
                    {
                      showMakeOrder ?
                        <CartMakeOrder
                          setValues={setValues}
                          values={values}
                          decrementQuantity={decrementQuantity}
                          incrementQuantity={incrementQuantity}
                        />
                        :
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
                  {
                    showMakeOrder ?
                      <button onClick={sendData} type='submit' className={styles.cart__btn_order}>
                        <span>Оформить заказ</span>
                        <span className="sum">{totalPrice} ₽</span>
                      </button>
                      :
                      <button onClick={deliveryInfo} className={styles.cart__btn_order}>
                        <span>Оформить</span>
                        <span className="sum">{totalPrice} ₽</span>
                      </button>
                  }
                </>
                :
                <>
                  <p>Тут пока пусто</p>
                  <span>Добавьте что-нибудь из списка слева</span>
                </>
            }

          </div>
        </aside >
      </div >
      <div onClick={showCartMobile} className={styles.mobile}></div>

      <ToastContainer />

    </>
  )
}

export default Cart
