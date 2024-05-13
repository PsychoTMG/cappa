import React from 'react'
import style from './module.module.scss'


const Module = ({children,setClickPrice,value,number}) => {
  return (
    <div onClick={()=>setClickPrice(false)}  className={style.wrapper}>
      <div onClick={(e)=>e.stopPropagation()} className={style.container}>
        <div className={style.title}>
          <h1>Дорогой <b>{value} </b>, вскоре мы свяжемся с вами по номеру (<b>{number}</b>) 🤗</h1>
          {children}
        </div>
  
      </div>
    </div>
  )
}

export default Module