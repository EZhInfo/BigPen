import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/sl01.jpg"
                    alt="First slide"
                    width={400}
                    height={600}
                />
                <Carousel.Caption>
                    <h3 className='carousel-caption-title'>С нашей помощью - любая работа станет любимой!</h3>
                    <p className='carousel-caption-text'>Только комфорт позволит наслаждаться и отдыхом, и работой</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/sl02.jpg"
                    alt="Second slide"
                    width={400}
                    height={600}
                />

                <Carousel.Caption>
                    <h3 className='carousel-caption-title'>Мы поддержим ваше отличное настроение!</h3>
                    <p className='carousel-caption-text'>Наши товары не только практичны - они поднимут ваше настроение
                        и помогут в решении задач</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/sl03.jpg"
                    alt="Third slide"
                    width={400}
                    height={600}
                />

                <Carousel.Caption>
                    <h3 className='carousel-caption-title'>Создайте свою рабочую атмосферу!</h3>
                    <p className='carousel-caption-text'>Каждый найдет в нашем магизине что-то интересное для себя</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;