import React from "react";
import classes from "./OrganizerCards.module.css";

import collegeImg from "../../assets/club logos/Arya College of Engineering & IT Jaipur.jpg";
import cipherImg from "../../assets/club logos/Arya Cipher Coding Club.jpg";
import musicImg from "../../assets/club logos/Arya Music Club.jpg";
import danceImg from "../../assets/club logos/Arya Dance Club.jpg";
import hackathonImg from "../../assets/club logos/Arya Hackathon Club.jpg";
import photoImg from "../../assets/club logos/Arya PhotoSphere Club.jpg";
import roboticsImg from "../../assets/club logos/Arya Robotics Club.jpg";

const clubs = [
    { name: "Arya College of Engineering & IT Jaipur", img: collegeImg },
    { name: "Arya Cipher Coding Club", img: cipherImg },
    { name: "Arya Music Club", img: musicImg },
    { name: "Arya Dance Club", img: danceImg },
    { name: "Arya Hackathon Club", img: hackathonImg },
    { name: "Arya PhotoSphere Club", img: photoImg },
    { name: "Arya Robotics Club", img: roboticsImg },
];

const OrganizerCards = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h3 className={classes.subtitle}>Behind the Magic</h3>
                <h2 className={classes.title}>Organized By</h2>
                <div className={classes.divider}></div>
            </div>
            <div className={classes.grid}>
                {clubs.map((club, i) => (
                    <div key={i} className={classes.card}>
                        <div className={classes.imgWrap}>
                            <img src={club.img} alt={club.name} className={classes.logo} />
                        </div>
                        <p className={classes.name}>{club.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OrganizerCards;
