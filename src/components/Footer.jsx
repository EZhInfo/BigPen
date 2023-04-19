import React from 'react'

const Footer = () => {
    return (
        <div className='container'>
            <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
                <div className='col mb-3'>
                    <a className='' href='/#'>
                        <img src='/img/logo1.jpg' className='bi me-2' width={180} height={180} alt=''>
                        </img>
                    </a>
                </div>
                <div className='col mb-2'>
                    <p>Любят карандаши не только малыши!</p>
                </div>
                <div className='col mb-3'>

                </div>
                <div className='col mb-4'>
                    <h5>Наши контакты</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item mb-3'>
                            <a className='nav-link p-0 text-muted' href='/#'>Телефон: 8-800-888-88-88</a>
                        </li>
                        <li className='nav-item mb-3'>
                            <a className='nav-link p-0 text-muted' href='/#'>WhatsApp: 8-800-888-88-88</a>
                        </li>
                    </ul>
                </div>
                <div className='col mb-4'>
                    <h5>Обратная связь</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item mb-3'>
                            <a className='nav-link p-0 text-muted' href='/#'>Саппорт: мы где-то тут, рядом</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>);
}

export default Footer