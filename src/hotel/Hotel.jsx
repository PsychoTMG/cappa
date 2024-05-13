import React from 'react'
import style from './hotel.module.scss'

const arrImage = [
  { photos: 'img/hotel2.svg' },
  { photos: 'img/hotel3.svg' },
  { photos: 'img/hotel4.svg' },
  { photos: 'img/hotel5.svg' }
]

const Hotel = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.names}>
          <h1>Hotel</h1>
          <p>Sultan Cave Suites</p>
        </div>
        <div className={style.content}>
          <div className={style.photo}>
            <img src="img/hotel1.svg" alt="" />
          </div>
          <div className={style.title}>
            <div className={style.text}>
              <p>В этом уникальном отеле, расположенном на вершине холма Айдынлы, вы можете забронировать высеченные в скале номера, обставленные антикварной мебелью со всей Турции. С солнечной террасы отеля открывается прекрасный панорамный вид на Национальный парк Гереме.
              </p>
              <p>Большинство номеров отеля Sultan Cave Suites высечены в скале, что обеспечивает прохладу и покой. Все номера оборудованы гостиной зоной и современной ванной комнатой. В большинстве из них есть собственная терраса или балкон.
              </p>
              <p>Отель Cave Suites Sultan располагает изысканным рестораном, где подают фирменные блюда региона Каппадокии. После ужина, пройдя на террасу, вы сможете заказать напиток и полюбоваться закатом солнца над деревней.
              </p>
            </div>
            <div className={style.photos}>
              {
                arrImage.map(item => <img src={item.photos} alt="" />)
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hotel