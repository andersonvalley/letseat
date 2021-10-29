import React from 'react'
import { useSelector } from 'react-redux'
import AddButton from './AddButton'
import styles from './Popup.module.scss'


function Popup({ setShowPopup, addItemToCart, dataToPopup }) {

  const { cartItems } = useSelector((store) => store.cartReducer)
  const popup = React.useRef(null)

  const closePopup = (e) => {
    e.preventDefault()
    if (popup.current && !popup.current.contains(e.target)) {
      setShowPopup(false);
    }
  }

  return (
    <div onClick={(e) => closePopup(e)} className={styles.popup__overlay}>
      <div ref={popup} className={styles.popup}>

        <div onClick={() => setShowPopup(false)} className={styles.popup__close}>+</div>
        {
          dataToPopup.map(product => {
            return (
              <React.Fragment key={product.id}>
                <div className={styles.popup__img}>
                  <img src={product.img} width="250" alt={product.title} />
                </div>
                <h4>{product.title}</h4>
                <span>{product.text}</span>
                <p>{product.description}</p>

                <AddButton
                  addItemToCart={addItemToCart}
                  product={product}
                  cartItems={cartItems}
                />
              </React.Fragment>
            )
          })
        }

      </div>
    </div>
  )
}

export default Popup
