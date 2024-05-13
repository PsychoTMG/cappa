import React from 'react'
// import { motion } from "framer-motion"

import style from './fairy.module.scss'
import Card from './card/Card'

const arrImg = ['img/img1.svg', 'img/img2.svg', 'img/img3.svg']


const Fairy = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.name}>
                    <h1>Fairy tail</h1>
                    <p>Сказочная страна чудес</p>
                </div>
                <div className={style.content}>
                    <div className={style.image} initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                        <Card arrImg={arrImg} />
                    </div>
                    <div className={style.title} initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
                        <p>Каппадокия - сказочная страна воздушных шаров, сырных домиков, разноцветных долин и волшебных рассветов!
                            Сюда приезжают, чтобы увидеть природные чудеса, полетать на воздушном шаре и конечно же сделать миллион красивых фотографий! </p>
                        <p>Участников тура ждёт профессиональная фотосессия от лучших фотографов Каппадокии!
                            Ведь именно за волшебными фото на рассвете на фоне воздушных шаров сюда приезжают люди со всего мира!
                        </p>
                        <p><b>Также Вы увидите:</b></p>
                        <p>Музей на открытом воздухе в Гёреме
                            Ущелье Ыхлара и монастырь Селиме
                            Подземные города
                            Крепость Учхисар
                            Зельве и Пашабаг</p>
                        <p>и многие другие достпримечательности.</p>
                        <p>Местная кухня — один из поводов посетить Каппадокию, здесь есть рестораны на любой бюджет.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fairy