import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";
import taranginiImg from "../../assets/contacts/tarangini.png";
import prerakImg from "../../assets/contacts/prerak.jpeg";
import narendraImg from "../../assets/contacts/narendra.jpeg";
import meghaImg from "../../assets/contacts/megha.jpeg";

import lalitImg from "../../assets/contacts/lalit.png";
import amitImg from "../../assets/contacts/amit.png";
import vishvesImg from "../../assets/contacts/vishves.png";
import abhinavImg from "../../assets/contacts/abhinav.png";

const exergieLeads = [
  {
    name: "Megha Panwar",
    designation: "Literature Club",
    phone: "+91 7296800189",
    image: meghaImg,
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
    name: "Tarangini Pahal",
    designation: "Dance Club",
    phone: "+91 9306905853",
    image: taranginiImg,
  },
];

const hackathonLeads = [
  {
    name: "Amit Kumar",
    designation: "Hackathon Club",
    phone: "+91 9256954320",
    image: amitImg,
  },
  {
    name: "Lalit Punjabi",
    designation: "Hackathon Club",
    phone: "+91 9653926918",
    image: lalitImg,
  }
];

const capitalArenaLeads = [
  {
    name: "Vishvesh Soni",
    designation: "E-Cell",
    phone: "+91 9664275136",
    image: vishvesImg,
  }
];

const projectathonLeads = [
  {
    name: "Abhinav Singh Chandel",
    designation: "Industrial Automation Club",
    phone: "+91 9680776035",
    image: abhinavImg,
  }
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

        <div className={classes.categorySection}>
          <div className={classes.headingBox}>
            <h2 className={classes.categoryHeading}>Exergie'26 Related Queries</h2>
          </div>
          <div className={classes.leadsGrid}>
            {exergieLeads.map((lead, index) => (
              <div key={index} className={classes.leadCard}>
                <div className={classes.imgContainer}>
                  <img src={lead.image} alt={lead.name} className={classes.leadImg} />
                </div>
                <h3 className={classes.leadName}>{lead.name}</h3>
                <p className={classes.leadDesignation}>{lead.designation}</p>
                <a href={`tel:${lead.phone.replace(/\\s+/g, '')}`} className={classes.leadPhone}>
                  {lead.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.categorySection}>
          <div className={classes.headingBox}>
            <h2 className={classes.categoryHeading}>Hackathon Related Queries</h2>
          </div>
          <div className={classes.leadsGridSecondary}>
            {hackathonLeads.map((lead, index) => (
              <div key={index} className={classes.leadCard}>
                <div className={classes.imgContainer}>
                  <img src={lead.image} alt={lead.name} className={classes.leadImg} />
                </div>
                <h3 className={classes.leadName}>{lead.name}</h3>
                <p className={classes.leadDesignation}>{lead.designation}</p>
                <a href={`tel:${lead.phone.replace(/\\s+/g, '')}`} className={classes.leadPhone}>
                  {lead.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.combinedTertiarySection}>
          <div className={classes.categorySection}>
            <div className={classes.headingBox}>
              <h2 className={classes.categoryHeading}>Capital Arena 2.0 Related Queries</h2>
            </div>
            <div className={classes.leadsGridTertiary}>
              {capitalArenaLeads.map((lead, index) => (
                <div key={index} className={classes.leadCard}>
                  <div className={classes.imgContainer}>
                    <img src={lead.image} alt={lead.name} className={classes.leadImg} />
                  </div>
                  <h3 className={classes.leadName}>{lead.name}</h3>
                  <p className={classes.leadDesignation}>{lead.designation}</p>
                  <a href={`tel:${lead.phone.replace(/\\s+/g, '')}`} className={classes.leadPhone}>
                    {lead.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.categorySection}>
            <div className={classes.headingBox}>
              <h2 className={classes.categoryHeading}>Projectathon Related Queries</h2>
            </div>
            <div className={classes.leadsGridTertiary}>
              {projectathonLeads.map((lead, index) => (
                <div key={index} className={classes.leadCard}>
                  <div className={classes.imgContainer}>
                    <img src={lead.image} alt={lead.name} className={classes.leadImg} />
                  </div>
                  <h3 className={classes.leadName}>{lead.name}</h3>
                  <p className={classes.leadDesignation}>{lead.designation}</p>
                  <a href={`tel:${lead.phone.replace(/\\s+/g, '')}`} className={classes.leadPhone}>
                    {lead.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
