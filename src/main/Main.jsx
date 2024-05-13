import React from 'react'
import { motion } from "framer-motion"

import style from './main.module.scss'
import Header from './header/Header'

const Main = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <div className={style.name}>
                    <motion.h1 whileInView={{opacity:1,scale:1,x:0}}  initial={{opacity:0,scale:0.3,x:-200}} transition={{duration:3}}  >Cappadocia</motion.h1>
                    <motion.p whileInView={{opacity:1,scale:1,x:0}}  initial={{opacity:0,scale:0.3,x:200}} transition={{duration:3}} >Эксклюзивный тур</motion.p>
                </div>
            </div>
        </div>
    )
}

export default Main