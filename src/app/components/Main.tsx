'use client';
import React from 'react'
import Projects from './Projects'
import LanguageContext from "@/context/LanguageContext";
import { useContext } from "react";

const Main = () => {
    const [language] = useContext(LanguageContext);
    const { about, experience, stack } = language;

    return (
        <>
            <main>
                <section className="section section--1" id="about">
                    <div className="section__inner">
                        <article className="section__article article article--1">
                            <header className="article__header" >
                                <h1 className="article__title">{about.title}</h1>
                            </header>
                            <main className="article__main">
                                {about.text}
                            </main>
                            <footer className="article__footer">
                                <ul className="article__list">
                                    <li className="article__item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        Medellín, Colombia
                                    </li>
                                    <li className="article__item">
                                        <span className="article__circle"></span>
                                        {about.text2}
                                    </li>
                                </ul>
                                <ul className="article__list article__list--social">
                                    <li className="article__item">
                                        <a className="article__button" href="https://github.com/LFelipeAlvarez/" target="_blank">
                                            <svg className="article__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                        </a>
                                    </li>
                                    <li className="article__item">
                                        <a className="article__button" href="https://www.linkedin.com/in/felipe-alvarez00/" target="_blank">
                                            <svg className="article__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                                        </a>
                                    </li>
                                </ul>
                                <div></div>
                            </footer>
                        </article>
                        <article className="section__article">
                            <img className="article__img" src="/profile.png" alt="profile picture" />
                        </article>
                    </div>
                </section>

                <section className="section section--2" id="experience">
                    <div className="section__inner">

                        <h2 className="section__title section__title--smaller">{experience.title}</h2>
                        <main className="section__main">

                            {
                                experience.items.map((exp: any, i: number) => <article key={i} className="card">
                                    <div className="card__group card__group--1">
                                        <h3 className="card__title">{exp.title}</h3>
                                        <h4 className="card__subtitle">{exp.company}</h4>
                                        <time className="card__time">{exp.date}</time>
                                    </div>
                                    <ul className="card__list card__group">
                                        {
                                            exp.tasks.map((task: any, i: number) => <li key={i} className="card__item">{task}</li>)
                                        }
                                    </ul>
                                </article>)
                            }
                        </main>
                    </div>
                </section>
                <Projects />
                <section className="section section--4" id="skills">
                    <div className="section__inner">
                        <h2 className="section__title--smaller">{stack.title}</h2>
                        <div className="section__main">

                            <ul className="grid">
                                <li className="grid__item">
                                    <img className='grid__img' src="/html5.svg" alt="HTML icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/css.svg" alt="CSS icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/javascript.svg" alt="JavaScript icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/typescript.svg" alt="typescript icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/react.svg" alt="react icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/sass.svg" alt="sass icon" />
                                </li>
                                <li className="grid__item">
                                    <img className='grid__img' src="/git.svg" alt="git icon" />
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

            </main>

            <footer className="footer">
                <div className="section__inner section__inner--footer">
                    <p>© {new Date().getFullYear()} <a href="#">Felipe Alvarez</a></p>

                    <ul className="article__list article__list--social">
                        <li className="article__item">
                            <a className="article__button" href="https://github.com/LFelipeAlvarez/" target="_blank">
                                <svg className="article__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                        </li>
                        <li className="article__item">
                            <a className="article__button" href="https://www.linkedin.com/in/felipe-alvarez00/" target="_blank">
                                <svg className="article__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Main