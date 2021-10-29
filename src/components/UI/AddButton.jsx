import React from 'react'
import styles from './AddButton.module.scss'


function AddButton(props) {
  const { addItemToCart, product, cartItems } = props

  return (
    <>
      {
        cartItems.find(i => i.id === product.id) ?
      <button className={[styles.btn__add, styles.btn__added].join(' ')} disabled>
        <span className={styles.decor}></span>
      </button> :
      <button onClick={() => addItemToCart(product)} className={styles.btn__add}>
        <span className={styles.decor}>{product.price} ₽</span>
      </button>
      }
    </>
  )
}

export default AddButton
