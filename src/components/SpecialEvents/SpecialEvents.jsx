import React from 'react';
import classes from './SpecialEvents.module.css';
import hackAryaverseImg from '../../assets/specialevents/hackaryaverse.png';
import capitalArenaImg from '../../assets/specialevents/capitalarena.png';
import projectathonImg from '../../assets/specialevents/projectathon.png';

const SpecialEvents = () => {
    const handleComingSoon = (e) => {
        e.preventDefault();
        alert('Details will be shared soon!');
    };

    return (
        <section className={classes.specialSection}>
            <h2 className={classes.mainHeading}>Special Events</h2>

            <div className={classes.cardsContainer}>
                {/* Hack AryaVerse 2.0 */}
                <a href="https://linktr.ee/HackAryaVerse_2.0" target="_blank" rel="noopener noreferrer" className={classes.card}>
                    <img src={hackAryaverseImg} alt="Hack AryaVerse 2.0" className={classes.cardImage} loading="lazy" decoding="async" />
                    <div className={classes.overlay}></div>
                    <button className={classes.viewMoreBtn}>View More</button>
                </a>

                {/* Capital Arena */}
                <div onClick={handleComingSoon} className={classes.card} role="button" tabIndex={0}>
                    <img src={capitalArenaImg} alt="Capital Arena 2026" className={classes.cardImage} loading="lazy" decoding="async" />
                    <div className={classes.overlay}></div>
                    <button className={classes.viewMoreBtn}>View More</button>
                </div>

                {/* Projectathon 2.0 */}
                <div onClick={handleComingSoon} className={classes.card} role="button" tabIndex={0}>
                    <img src={projectathonImg} alt="Projectathon 2.0" className={classes.cardImage} loading="lazy" decoding="async" />
                    <div className={classes.overlay}></div>
                    <button className={classes.viewMoreBtn}>View More</button>
                </div>
            </div>
        </section>
    );
};

export default SpecialEvents;
