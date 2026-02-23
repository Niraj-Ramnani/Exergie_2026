import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";
import profileImg from "../../assets/contactinfo/profile.png";

const leads = [
  {
    name: "John Doe",
    designation: "President",
    phone: "+91 9876543210",
    image: profileImg,
  },
  {
    name: "Jane Smith",
    designation: "Vice President",
    phone: "+91 9876543211",
    image: profileImg,
  },
  {
    name: "Alex Johnson",
    designation: "Event Head",
    phone: "+91 9876543212",
    image: profileImg,
  },
  {
    name: "Sarah Williams",
    designation: "Technical Lead",
    phone: "+91 9876543213",
    image: profileImg,
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
