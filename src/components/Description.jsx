import React from 'react'
import {motion} from "framer-motion"
import '../App.css'

const Description = () => {
    return (
        <div>
            <motion.div
                id='div1'
                initial={{
                    x: -1000,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 2,
                }}
            >
                <p>Любой проект начинается с того, что мы берем в руки карандаш для создания первого наброска...</p>
                <p>Наш магазин "Big Pen" поможет Вам сделать этот маленький шаг, с которого начинается долгий и
                    счастливый путь в
                    творчество!</p>
            </motion.div>

            <motion.div
                id='div2'
                initial={{
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 2,
                }}
            >
                <motion.img
                    src='/img/banner.jpg'
                    alt='banner'
                    title='Нажми меня'
                    className='banner'
                    width={1000}
                    initial={{
                        opacity: 0.8,
                    }}
                    transition={{
                        duration: 5
                    }}
                    whileTap={{
                        rotate: 360
                    }}
                >
                </motion.img>
            </motion.div>
        </div>
    )
}

export default Description