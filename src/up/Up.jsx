import React from 'react'
import style from './up.module.scss' 

const Up = () => {
    const clickUp=()=>{
window.scrollTo(0, 0)
    }
  return (
    <div onClick={clickUp} className={style.wrapper}>Вверх</div>
  )
}

export default Up