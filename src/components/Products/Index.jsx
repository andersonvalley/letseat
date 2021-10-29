import React from 'react'
import { useSelector } from 'react-redux'
import ContentLoader from "react-content-loader"

import AddButton from '../UI/AddButton'

import styles from './Products.module.scss'

function Products({ isLoading, showPopupHandler, addItemToCart }) {
  const { products } = useSelector((store) => store.productsReducer)
  const { cartItems } = useSelector((store) => store.cartReducer)


  return (

    <div className={styles.products}>
      {
        !isLoading ?
          products.map((items) => {
            return (
              <div className={styles.products__wrapper} key={items.titleCategory}>
                <h3>{items.titleCategory}</h3>
                <ul className={styles.products__list}>

                  {
                    items.goods.map((product) => {
                      return (
                        <li className={styles.products__item} key={product.id}>
                          <a href="/" onClick={(e) => showPopupHandler(e, product)}>
                            <img src={product.img} width="230" alt={product.title} />
                            <p>{product.title}</p>
                          </a>
                          <span>{product.text}</span>

                          <AddButton
                            addItemToCart={addItemToCart}
                            product={product}
                            cartItems={cartItems}
                          />
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            )
          }) :
          <ContentLoader
            speed={2}
            width={3000}
            height={600}
            viewBox="0 0 3000 600"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="120" cy="315" r="96" />
            <rect x="31" y="431" rx="5" ry="5" width="184" height="24" />
            <rect x="69" y="464" rx="5" ry="5" width="111" height="16" />
            <rect x="84" y="490" rx="11" ry="11" width="84" height="22" />
            <rect x="97" y="434" rx="0" ry="0" width="1" height="1" />
            <rect x="22" y="75" rx="10" ry="10" width="573" height="98" />
            <circle cx="343" cy="315" r="96" />
            <rect x="254" y="431" rx="5" ry="5" width="184" height="24" />
            <rect x="292" y="464" rx="5" ry="5" width="111" height="16" />
            <rect x="307" y="490" rx="11" ry="11" width="84" height="22" />
            <rect x="320" y="434" rx="0" ry="0" width="1" height="1" />
            <circle cx="560" cy="316" r="96" />
            <rect x="471" y="432" rx="5" ry="5" width="184" height="24" />
            <rect x="509" y="465" rx="5" ry="5" width="111" height="16" />
            <rect x="524" y="491" rx="11" ry="11" width="84" height="22" />
            <rect x="537" y="435" rx="0" ry="0" width="1" height="1" />
            <circle cx="783" cy="316" r="96" />
            <rect x="694" y="432" rx="5" ry="5" width="184" height="24" />
            <rect x="732" y="465" rx="5" ry="5" width="111" height="16" />
            <rect x="747" y="491" rx="11" ry="11" width="84" height="22" />
            <rect x="760" y="435" rx="0" ry="0" width="1" height="1" />

            <circle cx="120" cy="615" r="96" />
            <rect x="31" y="431" rx="5" ry="5" width="184" height="24" />
            <rect x="69" y="464" rx="5" ry="5" width="111" height="16" />
            <rect x="84" y="490" rx="11" ry="11" width="84" height="22" />
            <rect x="97" y="434" rx="0" ry="0" width="1" height="1" />
            <rect x="22" y="75" rx="10" ry="10" width="573" height="98" />
            <circle cx="343" cy="615" r="96" />
            <rect x="254" y="431" rx="5" ry="5" width="184" height="24" />
            <rect x="292" y="464" rx="5" ry="5" width="111" height="16" />
            <rect x="307" y="490" rx="11" ry="11" width="84" height="22" />
            <rect x="320" y="434" rx="0" ry="0" width="1" height="1" />

            <circle cx="560" cy="616" r="96" />
            <rect x="471" y="432" rx="5" ry="5" width="184" height="24" />
            <rect x="509" y="465" rx="5" ry="5" width="111" height="16" />
            <rect x="524" y="491" rx="11" ry="11" width="84" height="22" />
            <rect x="537" y="435" rx="0" ry="0" width="1" height="1" />
            <circle cx="783" cy="616" r="96" />
            <rect x="694" y="432" rx="5" ry="5" width="184" height="24" />
            <rect x="732" y="465" rx="5" ry="5" width="111" height="16" />
            <rect x="747" y="491" rx="11" ry="11" width="84" height="22" />
            <rect x="760" y="435" rx="0" ry="0" width="1" height="1" />

          </ContentLoader>

      }
    </div>
  )
}

export default Products
