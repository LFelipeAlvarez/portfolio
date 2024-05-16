'use client';

import { useState, createContext } from "react";


type Language = 'en' | 'es';

interface LanguageContentType {
    nav: string[]
    about: About
    experience: Experience
    projects: Projects
    stack: Stack
}

interface About {
    title: string
    text: string
    text2: string
}

interface Experience {
    title: string
    items: Item[]
}

interface Item {
    title: string
    company: string
    date: string
    functions: string[]
}

export interface Projects {
    title: string
    items: Item2[]
}

interface Item2 {
    title: string
    img: string
    description: string
    technologies: string[]
    repoUrl: string
    prevUrl: string
}

interface Stack {
    title: string
}

const contentByLanguage = {
    es: {
        nav: ['Experiencia', 'Proyectos', 'Tecnologías'],
        about: {
            title: 'Hola! Soy Felipe 👋',
            text: 'Programador web con 2+ años de experiencia y solidos conocimientos en HTML, CSS, Javascript y librerías como React.',
            text2: 'Disponible para trabajar'
        },
        experience: {
            title: 'Experiencia Laboral',
            items: [
                {
                    title: 'Programador Web',
                    company: 'Talent.com',
                    date: 'Agosto 2021 - Presente',
                    tasks: [
                        'Creacion de scripts para extraer información de diferentes páginas web usando Javascript/PHP.',
                        'Optimización de código aplicando buenas prácticas y código moderno ES6.',
                        'Mantenimiento a código para la solucion y prevención de posibles errores.'
                    ]
                },
            ]
        },
        projects: {
            title: 'Proyectos',
            textButtonRepo: 'Código',
            items: [
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

                // {
                //     title: 'Gestion de Tareas',
                //     img: '/shots_so3.png',
                //     description: 'Aplicación práctica para la gestión eficiente de tareas que permite a los usuarios crear, organizar y gestionar sus tareas diarias. Con funciones como marcar tareas como completadas, ordenar por prioridad, filtrar por categoría, esta aplicación ayuda a los usuarios a mantenerse organizados y productivos.',
                //     technologies: ['HTML', 'CSS', 'React', 'SASS'],
                //     repoUrl: 'https://github.com/LFelipeAlvarez/frontend-quiz-app',
                //     prevUrl: 'https://todo-app-fm.netlify.app/'
                // },
                {
                    title: 'Gestion de Tareas',
                    img: '/shots_so6.png',
                    description: 'Aplicación práctica para la gestión eficiente de tareas que permite a los usuarios crear, organizar y gestionar sus tareas diarias. Con funciones como marcar tareas como completadas, ordenar por prioridad, filtrar por categoría, esta aplicación ayuda a los usuarios a mantenerse organizados y productivos.',
                    technologies: ['HTML', 'CSS', 'React', 'Express', 'MySQL'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/task-management',
                    prevUrl: 'https://task-management-challenge.netlify.app/'
                },
                {
                    title: 'Landing Page con Acortador de URLs',
                    img: '/shots_so2.png',
                    description: 'Una landing page minimalista y funcional que ofrece un servicio de acortamiento de URL. Los usuarios pueden ingresar una URL larga en un formulario y recibir una versión corta y única que pueden compartir fácilmente. Con una interfaz simple y un proceso rápido, esta aplicación facilita la creación de enlaces cortos y personalizados.',
                    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/shortly-challenge',
                    prevUrl: 'https://linkshortly-challenge.netlify.app/'
                }
            ]
        },
        stack: {
            title: 'Tecnologías'
        }
    },

    en: {
        nav: ['Experience', 'Projects', 'Technologies'],
        about: {
            title: 'Hello! I\'m Felipe 👋',
            text: 'Web developer with 2+ years of experience and solid knowledge in HTML, CSS, Javascript, and libraries like React.',
            text2: 'Available for work'
        },
        experience: {
            title: 'Work Experience',
            items: [
                {
                    title: 'Web Developer',
                    company: 'Talent.com',
                    date: 'August 2021 - Present',
                    tasks: [
                        'Script creation to extract information from different web pages using Javascript/PHP.',
                        'Code optimization by applying best practices and modern ES6 code.',
                        'Code maintenance for solution and prevention of potential errors.'
                    ]
                }
            ]
        },
        projects: {
            title: 'Projects',
            textButtonRepo: 'Code',
            items: [
                {
                    title: 'Frontend Quiz App',
                    img: '/shots_so1.png',
                    description: 'Interactive quiz application that allows users to choose from a variety of frontend technology topics such as HTML, CSS, JavaScript, and web accessibility. Consists of 10 challenging questions that test the user\'s knowledge in the selected topic.',
                    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/frontend-quiz-app',
                    prevUrl: 'https://frontendquiz-app.netlify.app/'
                },
                {
                    title: 'Country Information',
                    img: '/shots_so5.png',
                    description: 'Intuitive application that provides detailed information about any country in the world. Users can search for countries by name and get data such as their flag, currency, population, capital, language, and more, all presented in a clear and visually appealing way.',
                    technologies: ['HTML', 'CSS', 'React', 'SASS'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/contries-info-app',
                    prevUrl: 'https://fmcountries-app.netlify.app/'
                },
                {
                    title: 'Pairs Memory Game',
                    img: '/shots_so4.png',
                    description: 'Entertaining memory game where players must find all pairs of hidden cards on the board. There is no time limit, but the time each player takes to complete all pairs is recorded. The application allows up to 4 players to play individually, providing a competitive and fun experience for each participant.',
                    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/memory-game',
                    prevUrl: 'https://lf-memorygame.netlify.app/'
                },
                // {
                //     title: 'Task Management',
                //     img: '/shots_so3.png',
                //     description: 'Practical application for efficient task management that allows users to create, organize, and manage their daily tasks. With features like marking tasks as completed, sorting by priority, filtering by category, this application helps users stay organized and productive.',
                //     technologies: ['HTML', 'CSS', 'React', 'SASS'],
                //     repoUrl: 'https://github.com/LFelipeAlvarez/frontend-quiz-app',
                //     prevUrl: 'https://todo-app-fm.netlify.app/'
                // },
                {
                    title: 'Task Management',
                    img: '/shots_so6.png',
                    description: 'Practical application for efficient task management that allows users to create, organize, and manage their daily tasks. With features like marking tasks as completed, sorting by priority, filtering by category, this application helps users stay organized and productive.',
                    technologies: ['HTML', 'CSS', 'React', 'Express', 'MySQL'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/task-management',
                    prevUrl: 'https://task-management-challenge.netlify.app/'
                },
                {
                    title: 'URL Shortener Landing Page',
                    img: '/shots_so2.png',
                    description: 'A minimalist and functional landing page that offers a URL shortening service. Users can enter a long URL in a form and receive a short and unique version that they can easily share. With a simple interface and a quick process, this application makes it easy to create short and personalized links.',
                    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
                    repoUrl: 'https://github.com/LFelipeAlvarez/shortly-challenge',
                    prevUrl: 'https://linkshortly-challenge.netlify.app/'
                }
            ]
        },
        stack: {
            title: 'Skills'
        }
    }

}

export const LanguageContext = createContext<any>(contentByLanguage.en);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

    const [language, setLanguage] = useState<Language>('en');
    const currentLanguage = contentByLanguage[language];

    return <LanguageContext.Provider value={[currentLanguage, setLanguage, language]}>
        {children}
    </LanguageContext.Provider>
}

export default LanguageContext;
export { LanguageProvider };

