import React from 'react';
import classes from './SpecialEvents.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const SpecialEvents = () => {
    return (
        <section className={classes.specialSection}>
            <h2 className={classes.mainHeading}>Special Events</h2>

            <div className={classes.cardsContainer}>
                {/* Hack AryaVerse 2.0 */}
                <a href="https://linktr.ee/HackAryaVerse_2.0" target="_blank" rel="noopener noreferrer" className={`${classes.card} ${classes.hackCard}`}>
                    <div className={classes.cardContent}>
                        <div className={classes.hackLogo}>
                            <span className={classes.hackText}>HACK ARYAVERSE <span className={classes.cyanText}>2.0</span></span>
                        </div>
                        <p className={classes.hackSub}>&lt; 24 HOUR IN-PERSON HACKATHON &gt;</p>
                        <div className={classes.linkIcon}><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                    </div>
                </a>

                {/* Capital Arena */}
                <a href="https://capitalarena2026.netlify.app/" target="_blank" rel="noopener noreferrer" className={`${classes.card} ${classes.capitalCard}`}>
                    <div className={classes.cardContent}>
                        <h3 className={classes.capitalTitle}>CAPITAL ARENA-2026</h3>
                        <p className={classes.capitalSub}>(THE GRAND STARTUP MELA OF "ARYA")</p>
                        <p className={classes.capitalTagline}>PITCH BOLD ⟳ GET JUDGED ⟳ GET FUNDED</p>
                        <div className={classes.linkIcon}><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                    </div>
                </a>

                {/* Projectathon 2.0 */}
                <a href="#" className={`${classes.card} ${classes.projectathonCard}`}>
                    <div className={classes.cardContent}>
                        <h3 className={classes.projectTitle}>PROJECTATHON 2.0</h3>
                        <p className={classes.projectSub}>Build by Students, Loved by All...</p>
                        <div className={classes.linkIcon}><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default SpecialEvents;
