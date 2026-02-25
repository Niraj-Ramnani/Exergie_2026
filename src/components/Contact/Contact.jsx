import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";
import taranginiImg from "../../assets/contacts/tarangini.png";
import prerakImg from "../../assets/contacts/prerak.jpeg";
import narendraImg from "../../assets/contacts/narendra.jpeg";
import meghaImg from "../../assets/contacts/megha.jpeg";

const leads = [
  {
    name: "Tarangini Pahal",
    designation: "Dance Club",
    phone: "+91 9306905853",
    image: taranginiImg,
  },
  {
    name: "Prerak Sharma",
    designation: "Art & Craft Club",
    phone: "+91 6376232585",
    image: prerakImg,
  },
  {
    name: "Narendra Singh",
    designation: "Robotics Club",
    phone: "+91 6375103597",
    image: narendraImg,
  },
  {
    name: "Megha Panwar",
    designation: "Literature Club",
    phone: "+91 7296800189",
    image: meghaImg,
  },
];

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
        </div>
      </div>

      <div className={classes.leadsSection}>
        <div className={classes.headingBox}>
          <h2 className={classes.heading}>Contact Us</h2>
        </div>
        <div className={classes.leadsGrid}>
          {leads.map((lead, index) => (
            <div key={index} className={classes.leadCard}>
              <div className={classes.imgContainer}>
                <img src={lead.image} alt={lead.name} className={classes.leadImg} />
              </div>
              <h3 className={classes.leadName}>{lead.name}</h3>
              <p className={classes.leadDesignation}>{lead.designation}</p>
              <a href={`tel:${lead.phone}`} className={classes.leadPhone}>
                {lead.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
