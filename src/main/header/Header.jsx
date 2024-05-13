import React from 'react'
import style from './header.module.scss'

const Header = () => {


    return (
        
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.main}>
                    <ul>
                        <a href="#trip"><li><p>Маршрут</p></li></a>
                        <a href="#hotel"><li><p>Отель</p></li></a>
                        <a href="#price"> <li><p>Стоимость</p></li></a>
                    </ul>
                </div>
                <div className={style.mobile}>
                    <span><img src="img/phone.svg" alt="phone" width={20} height={20} /></span>
                    <span ><p>+38(066)555-777-6</p></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Header