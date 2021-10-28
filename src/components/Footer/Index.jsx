import React from 'react'
import styles from './Footer.module.scss'

function Index() {
  return (
    <footer className={styles.footer}>
      <span>2021 let's eat ©</span>
      <ul>
        <li>
          <a href="/">О доставке</a>
        </li>
        <li>
          <a href="/">Оферта</a>
        </li>
      </ul>
    </footer>
  )
}

export default Index
