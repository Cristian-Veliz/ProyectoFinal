import React from 'react';
import styles from './About.module.css'; // Importa el módulo CSS

export default function About() {
    return (
        <section className={styles['about-container']}>
            <div className={styles.about}>
                <h1>FINAL PROJECT - DIVANO</h1>
                <p>This project was created as part of my full-stack developer education at <a className={styles['href-henry']} href='https://www.soyhenry.com/'>Henry bootcamp.</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna eu risus hendrerit mattis. Nulla facilisi. Integer hendrerit est eu justo congue ultricies. Vestibulum laoreet turpis ac risus convallis, non eleifend dolor rhoncus. Curabitur at ligula eu ante finibus mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula velit a hendrerit cursus. Maecenas at libero eget velit faucibus sagittis.Nullam luctus ipsum a diam cursus, id venenatis purus ultrices. Aliquam erat volutpat.</p>
            </div>
            <h1 className={styles['tech-title']}>Used technologies:</h1>
            <div className={styles['tech-container']}>
                <div className={styles.javascript}>
                    <img className={styles['img-javascript']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                    <h1 className={styles['text-javascript']}>Javascript</h1>
                </div>
                <div className={styles.html}>
                    <img className={styles['img-html']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                    <h1 className={styles['text-html']}>HTML</h1>
                </div>
                <div className={styles.css}>
                    <img className={styles['img-css']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                    <h1 className={styles['text-css']}>CSS</h1>
                </div>
                <div className={styles.react}>
                    <img className={styles['img-react']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                    <h1 className={styles['text-react']}>React</h1>
                </div>
                <div className={styles.redux}>
                    <img className={styles['img-redux']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                    <h1 className={styles['text-redux']}>Redux</h1>
                </div>
                <div className={styles.express}>
                    <img className={styles['img-express']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                    <h1 className={styles['text-express']}>Express</h1>
                </div>
                <div className={styles.PostgreSQL}>
                    <img className={styles['img-PostgreSQL']} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                    <h1 className={styles['text-PostgreSQL']}>PostgreSQL</h1>
                </div>
            </div>
        </section>
    );
}
