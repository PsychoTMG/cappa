import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.globus}>
                    <div className={style.contacts}>
                        <h1>Contacts</h1>
                        <p>+38(066)555-777-6</p>
                        <p>сappadocia.tours@gmail.com</p>
                    </div>
                    <img src="img/globus.svg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Footer