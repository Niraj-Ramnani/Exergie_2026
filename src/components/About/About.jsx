// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";
import PastGlimpse from "../PastGlimpse/PastGlimpse";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>EXERGIE- 2026</h2>
            <p className={classes.para}>
              EXERGIE'26 is a premier intercollege technical and cultural
              festival offering a diverse range of events and competitions. It
              provides a dynamic platform for students to showcase their
              talents, learn from peers, and foster creativity, teamwork, and
              problem-solving abilities. By exposing attendees to the latest
              advancements in technology and vibrant cultural showcases, EXERGIE
              helps broaden their knowledge and skillset, making it a fun,
              engaging, and enriching experience for everyone. Get ready to be a
              part of the biggest extravaganza of the year 2k26 – EXERGIE'26!
            </p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
        <PastGlimpse />
      </section>
    </>
  );
};

export default About;
