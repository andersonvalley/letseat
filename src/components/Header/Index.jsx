import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Index() {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const openBurgerMenu = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>

        <div onClick={openBurgerMenu} className={burgerOpen ? `${styles.burger} ${styles.open}` : styles.burger}>
          <span className={burgerOpen ? `${styles.burger__item} ${styles.open}` : styles.burger__item}></span>
        </div>

        <div className={styles.header__logo}>
          <Link to="/">
            <img src="/logo.svg" width="100" alt="logo lets eat" />
            <p>let's eat</p>
          </Link>
        </div>

        <div className={styles.header__wrapper}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li>
                <Link to="/restorans">Рестораны</Link>
              </li>
              <li>
                <Link to="/delivery">О доставке</Link>
              </li>
              <li>
                <Link to="/about">Оферта</Link>
              </li>
              <li>
                <Link to="/support">Поддержка</Link>
              </li>
            </ul>
          </nav>

          <ul className={styles.header__social}>
            <li className={styles.fb}>
              <a href="/"><span></span></a>
            </li>

            <li className={styles.vk}>
              <a href="/"><span></span></a>
            </li>

            <li className={styles.inst}>
              <a href="/"><span></span></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Index
