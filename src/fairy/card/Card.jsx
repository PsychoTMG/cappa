import React from 'react'
import style from './card.module.scss'

const Card = ({ arrImg }) => {

    const [slide, setSlide] = React.useState(0)

    const next = () => {
        setSlide(slide === arrImg.length - 1 ? 0 : slide + 1)
    }
    const prev = () => {
        setSlide(slide === 0 ? arrImg.length - 1 : slide - 1)
    }

    return (
        <div>
            <div className={style.container}>
                <img src={arrImg[slide]} alt="" />

                <div className={style.buttons}>
                    <img onClick={prev} className={style.prevButton} src="img/prev.svg" alt="previous" />
                    <img onClick={next} className={style.nextButton} src="img/next.svg" alt="next" />
                </div>
            </div>

        </div>
    )
}

export default Card