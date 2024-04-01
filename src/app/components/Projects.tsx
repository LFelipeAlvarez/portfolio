
const ProjectsObj = [
    {
        title: 'Frontend Quiz App',
        img: '/shots_so1.png',
        description: 'Aplicación interactiva de quiz que permite a los usuarios elegir entre una variedad de temas de tecnologías frontend, como HTML, CSS, JavaScript y accesibilidad web. Consta de 10 preguntas desafiantes que ponen a prueba el conocimiento del usuario en el tema seleccionado.',
        technologies: ['HTML', 'CSS', 'React', 'Typescript'],
        repoUrl: 'https://github.com/LFelipeAlvarez/frontend-quiz-app',
        prevUrl: 'https://frontendquiz-app.netlify.app/'
    },

    {
        title: 'Información de Paises',
        img: '/shots_so5.png',
        description: 'Aplicación intuitiva que proporciona información detallada sobre cualquier país del mundo. Los usuarios pueden buscar países por su nombre y obtener datos como su bandera, moneda, población, capital, idioma y más, todo presentado de manera clara y visualmente atractiva.',
        technologies: ['HTML', 'CSS', 'React', 'SASS'],
        repoUrl: 'https://github.com/LFelipeAlvarez/contries-info-app',
        prevUrl: 'https://fmcountries-app.netlify.app/'
    },
    {
        title: 'Juego de Memoria de Pares',
        img: '/shots_so4.png',
        description: 'Juego de memoria entretenido en el que los jugadores deben encontrar todos los pares de cartas ocultas en el tablero. No hay límite de tiempo, pero se registra el tiempo que cada jugador tarda en completar todos los pares. La aplicación permite jugar hasta 4 jugadores de forma individual, lo que brinda una experiencia competitiva y divertida para cada participante.',
        technologies: ['HTML', 'CSS', 'React', 'Typescript'],
        repoUrl: 'https://github.com/LFelipeAlvarez/memory-game',
        prevUrl: 'https://lf-memorygame.netlify.app/'
    },

    {
        title: 'Gestion de Tareas',
        img: '/shots_so3.png',
        description: 'Aplicación práctica para la gestión eficiente de tareas que permite a los usuarios crear, organizar y gestionar sus tareas diarias. Con funciones como marcar tareas como completadas, ordenar por prioridad, filtrar por categoría, esta aplicación ayuda a los usuarios a mantenerse organizados y productivos.',
        technologies: ['HTML', 'CSS', 'React', 'SASS'],
        repoUrl: 'https://github.com/LFelipeAlvarez/frontend-quiz-app',
        prevUrl: 'https://todo-app-fm.netlify.app/'
    },
    {
        title: 'Landing Page con Acortador de URLs',
        img: '/shots_so2.png',
        description: 'Una landing page minimalista y funcional que ofrece un servicio de acortamiento de URL. Los usuarios pueden ingresar una URL larga en un formulario y recibir una versión corta y única que pueden compartir fácilmente. Con una interfaz simple y un proceso rápido, esta aplicación facilita la creación de enlaces cortos y personalizados.',
        technologies: ['HTML', 'CSS', 'React', 'Typescript'],
        repoUrl: 'https://github.com/LFelipeAlvarez/shortly-challenge',
        prevUrl: 'https://linkshortly-challenge.netlify.app/'
    },



];



const Projects = () => {
    return (
        <section className="section section--3" id="projects">
            <div className="section__inner">

                <h2 className="section__title section__title--smaller">Proyectos</h2>
                <main className="section__main">
                    {ProjectsObj.map((project, i) => <article key={i} className="card card--2">
                        <div className="card__group card__img-container">
                            <img className="card__img" src={project.img} alt={project.title} />
                        </div>
                        <div className="card__group">
                            <h3 className="card__subtitle">{project.title}</h3>
                            <main className="card__main">
                                <p>{project.description}</p>
                                <ul className="card__list card__list--rounded">
                                    {project.technologies.map((tech, i) => <li key={i} className="card__rounded">{tech}</li>)}
                                </ul>
                            </main>

                            <footer className="card__footer">
                                <a className="card__button" href={project.repoUrl} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                    Código
                                </a>
                                <a className="card__button" href={project.prevUrl} target="_blank">
                                    <svg className="button__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    Prev
                                </a>
                            </footer>
                        </div>
                    </article>)}
                </main>
            </div>
        </section>
    )
}

export default Projects