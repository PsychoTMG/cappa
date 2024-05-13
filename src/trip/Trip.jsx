import React from 'react'
import style from './trip.module.scss'
import Card from '../fairy/card/Card'



const arrImg = ['img/img4.svg','img/img5.svg','img/img6.svg',]
const Trip = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.content}>

                    <div className={style.title}>
                        <div className={style.name}>
                            <h1>Our trip</h1>
                            <p>Маршрут</p>
                        </div>
                        <h1>День 1 </h1>
                        <p>Прилёт в Анкару
                            Трансфер в Каппадокию
                            Солёное озеро
                            Приезд в Гёреме
                            Ужин
                        </p>
                        <h1>День 2 </h1>
                        <p>Фотосессия
                            Завтрак в отеле
                            Дневной тур по Каппадокии
                            Закат с панорамным видом
                        </p>
                        <h1>День 3 </h1>
                        <p>Полёт на воздушном шаре
                            Завтрак в отеле
                            Экскурсии на выбор
                        </p>
                        <h1>День 4 </h1>
                        <p>Свободное время, шоппинг
                            Трансфер в Анкару
                            Вылет в Киев</p>
                        <button>ЗАБРОНИРОВАТЬ</button>
                    </div>
                    <div className={style.image}>
                        <Card arrImg={arrImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip