'use client';
import LanguageContext from '@/context/LanguageContext';
import React, { useContext, useState } from 'react'

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [language, setLanguage] = useContext(LanguageContext);
    const { nav } = language;
    return (
        <header className='header'>
            <nav className="nav">
                <ul className={isNavVisible ? 'nav__list nav__list--visible' : 'nav__list'}>

                    <li className='nav__item'>
                        <a className='nav__link' href="#experience">{nav[0]}</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href="#projects">{nav[1]}</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href="#skills">{nav[2]}</a>
                    </li>
                </ul>

                <div className="nav__button" onClick={() => setIsNavVisible(!isNavVisible)}>
                    {
                        !isNavVisible
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=""><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                            : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#d1d5db"></path> </g></svg>
                    }
                </div>

                <div className='header__language'>
                    <img onClick={() => language !== 'es' && setLanguage('es')} className='header__img-button' src="/es.svg" alt="spain flag" />

                    <img onClick={() => language !== 'en' && setLanguage('en')} className='header__img-button' src="/gb.svg" alt="united kingdom flag" />
                </div>


            </nav>
        </header>
    )
}

export default Header