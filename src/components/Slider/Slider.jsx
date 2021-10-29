import React from 'react'
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import { useSelector } from 'react-redux'
import address from '../../img/map.png'
import mobile from '../../img/mobile.png'
import AddButton from '../UI/AddButton';

function Slider({ addItemToCart }) {
  const { products } = useSelector((store) => store.productsReducer)
  const { cartItems } = useSelector((store) => store.cartReducer)

  const [random, setRandom] = React.useState('')


  React.useEffect(() => {
    const randomId = Math.round(Math.random() * (20 - 0) + 0)
    setRandom(randomId)
  }, [])

  return (
    <div className="slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={3.7}
        direction='horizontal'
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          500: {
            slidesPerView: 1.7,
          },

          690: {
            slidesPerView: 2.2,
          },

          920: {
            slidesPerView: 2.8,
          },

          1100: {
            slidesPerView: 3.5,
          },
        }}

      >

        <SwiperSlide>
          <div className="swiper-slide slide" style={{ backgroundColor: '#e4f4f7', backgroundImage: `url(${address})` }}>
            <p className="slide__title">
              Укажите <br />
              адрес
            </p>
            <div className="slide__wrapper">
              <input type="text" placeholder="Улица, дом" name="address" className="slide__input" />
              <button>ОК</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide slide" style={{ backgroundColor: '#f7ebeb', backgroundImage: `url(${mobile})` }}>
            <p className="slide__title">
              Больше в <br />
              приложении
            </p>
            <div className="slide__description">
              <p>Сделайте заказ к столику или на вынос</p>

              <a href='/' className="btn-add btn-slider">
                Скачать
              </a>

            </div>
          </div>
        </SwiperSlide>

        {
          products.map((i) => {

            return (
              i.goods.map((item) => {

                if (item.id > random && item.id < 40) {
                  return (
                    <SwiperSlide key={`${item.id}_${item.title}`}>
                      <div className="swiper-slide slide slide-img" style={{ backgroundColor: '#e4f4f7', backgroundImage: `url(${item.img})` }}>
                        <p className="slide__title">{item.title}</p>
                        <div className="slide__description">
                          <p>{item.text}</p>
                          <AddButton
                            addItemToCart={addItemToCart}
                            product={item}
                            cartItems={cartItems}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                }
                return (
                  null
                )
              })
            )
          })
        }
      </Swiper >
    </div>
  )
}

export default Slider
