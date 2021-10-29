import React from 'react'
import './Navigation.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'

function Navigation({ navScroll }) {
  const { products } = useSelector((store) => store.productsReducer)
  const [showInput, setShowInputHandler] = React.useState(false)
  const showInputHandler = () => {
    setShowInputHandler(true)
  }

  return (

    <nav className={navScroll ? 'categories categories-scroll' : 'categories'}>
      <ul className="swiper-wrapper categories__list">
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          direction={'horizontal'}

        >
          {
            products.map((item, index) => {
              return (
                <SwiperSlide key={`${index}_${item.titleCategory}`}>
                  <li className="swiper-slide categories__item"><Link activeClass="active-nav" to={item.linkTo} spy={true} smooth={true} offset={50} duration={500} >{item.titleCategory}</Link></li>
                </SwiperSlide>
              )
            })
          }
        </Swiper >
      </ul>
      {
        showInput ? <div className="slide__wrapper nav_btn">
          <input type="text" placeholder="Улица, дом" name="address" className="slide__input" />
          <button onClick={() => setShowInputHandler(false)}>ОК</button>
        </div> : <button onClick={showInputHandler}>Адрес доставки</button>
      }

    </nav>


  )
}

export default Navigation
