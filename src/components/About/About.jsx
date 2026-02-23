// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";
import OrganizerCards from "../OrganizerCards/OrganizerCards";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>EXERGIE- 2026</h2>
            <p className={classes.para}>
              EXERGIE'26 is a technical festival offering a diverse range of events
              and competitions focused on technology and innovation. It provides
              a platform for individuals to showcase their skills, learn from
              others, and foster creativity, teamwork, and problem-solving
              abilities. By exposing attendees to the latest advancements in
              technology, Sambhav helps broaden their knowledge and skillset,
              making it a fun, engaging, and enriching experience for all
              attendees. Get ready to be a part of the biggest technical
              extravaganza of the year 2k26 – EXERGIE'26!
            </p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
      <OrganizerCards />
    </>
  );
};

export default About;
