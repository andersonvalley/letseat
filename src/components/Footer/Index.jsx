import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

function Index() {
  return (
    <footer className={styles.footer}>
      <span>2021 let's eat ©</span>
      <ul>
        <li>
          <Link to="/delivery">О доставке</Link>
        </li>
        <li>
          <Link to="/about">Оферта</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Index
