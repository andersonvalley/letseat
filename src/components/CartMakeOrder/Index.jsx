import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../Cart/Cart.module.scss'
import classes from './CartMakeOrder.module.scss'

function CartMakeOrder({ incrementQuantity, decrementQuantity }) {
  const [showComments, setShowComments] = React.useState(false)
  const { cartItems } = useSelector((store) => store.cartReducer)



  const showCommentsHandler = (e) => {
    e.preventDefault()
    setShowComments(true)
  }
  return (
    <form className={classes.form} action="">

      <div className={[classes.slider__wrapper, classes.form__wrapper].join(' ')}>
        <input type="text" placeholder="Улица, дом" name="address" className="slide__input" />
        <button>ОК</button>
      </div>

      <div className={classes.form__input}>
        <input type="text" placeholder="Кв/офис" name="appartment" className="slide__input" />
        <input type="text" placeholder="Подьезд" name="entrance" className="slide__input" />
        <input type="text" placeholder="Этаж" name="floor" className="slide__input" />
      </div>


      {showComments
        ?
        <div className={classes.form__input}>
          <textarea name="comments" id="comments" cols="10" rows="3"></textarea>
        </div>
        :
        <button className={classes.form__btn_comments} onClick={(e) => showCommentsHandler(e)}>Комментарий для курьера</button>
      }

      <ul className="cart__products">
        {
          cartItems.length
            ? cartItems.map((item, index) => {

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
            : <li className='empty-cart'>
              <p>Тут пока пусто 🥲</p>
              <span>Добавьте что-нибудь из списка слева</span>
            </li>
        }
      </ul>

      <div className={[classes.form__input, classes.form__input_width].join(' ')}>
        <input type="text" placeholder="Имя" name="name" className="slide__input" />
        <input type="tel" placeholder="Телефон" name="phone" className="slide__input" />
      </div>
        

    </form>
  )
}

export default CartMakeOrder
