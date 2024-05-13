import React from 'react'
import style from './price.module.scss'
import Module from '../module/Module'

const Price = () => {
    const [value, setValue] = React.useState('')
    const [number, setNumber] = React.useState('')

    const [clickPrice, setClickPrice] = React.useState(false)

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const changeNumber=(e)=>{
        setNumber(e.target.value)
    }


    return (

        <div className={style.wrapper}>
            {clickPrice&&value&&number ? <Module setClickPrice={setClickPrice} value={value} number={number}/> : null}
            <div className={style.container}>
                {/* name */}
                <div className={style.names}>
                    <h1>Price</h1>
                    <p>Стоимость услуг</p>
                </div>
                {/* прайсы */}
                <div className={style.all}>
                    <div className={style.text}>
                        <h1>Включено</h1>
                        <p>Проживание в двухместном номере в отеле с завтраками
                        </p>
                        <p>Индивидуальный трансфер для нашей группы из Анкары и обратно
                        </p>
                        <p>Экскурсия на Солёное озеро
                        </p>
                        <p>Индивидуальная дневная экскурсия по лучшим местам Каппадокии с личным транспортом
                        </p>
                        <p>Фотосессия с профессиональным фотографом для каждой участницы(Несколько локаций, 5 лучших фото в обработке фотографа и весь материал (до 100 фотографий)</p>
                    </div>
                    <div>
                        <h1>Не включено</h1>
                        <p>Авиа Киев-Анкара-Киев (140-170$)</p>
                        <p>Обеды и ужины (150$ на поездку)

                        </p>
                        <p>Воздушный шар 200$</p>
                        <p>Дополнительные экскурсии (по желанию) от 30$
                        </p>
                    </div>
                    <div>
                        <img src="img/shar.svg" alt="shar" />
                    </div>
                </div>
                {/* формы */}
                <div className={style.form}>
                    <div className={style.prices}>
                        <h1>1.07.2020</h1>
                        <p>Ближайшая дата тура </p>
                        <h1>490$</h1>
                        <p>Стоимость</p>

                        <div className={style.formsInput}>
                            <h3>Оставить заявку или задать вопрос</h3>
                            <input type="text" placeholder='Имя' onChange={changeValue} value={value} />
                            <input type="text" placeholder='Телефон'  onChange={changeNumber} value={number}/>
                            <button  onClick={()=>setClickPrice(true)}>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>

                    </div>
                    <div className={style.photo}>
                        <img src="img/price.svg" alt="price" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price