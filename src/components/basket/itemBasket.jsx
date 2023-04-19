import React from 'react'

const itemBasket = (props) => {
    return (
        <div className='container py-3'>
            <main>
                <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
                    <div className='col px-3 py-3'>
                        <div className='card md-6 rounded'>
                            <div className='card-header py-2 px-3'>
                                <h5>{props.title}</h5>
                                <img className='rounded' width={'50%'} src={props.img} alt=''/>
                                <h5>
                                    <br/>
                                    <span>Всего: {props.price} руб.</span>
                                </h5>
                                <button
                                    type='button'
                                    className='w-100 btn btn-lg btn-primary'
                                    onClick={() => props.deleteItems(props.id)}
                                >X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default itemBasket