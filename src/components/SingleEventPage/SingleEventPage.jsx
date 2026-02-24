import React, { useEffect } from "react";
import classes from "./SingleEventPage.module.css";
import Button from "../common/Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import { eventsData } from "../../assets/eventsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SingleEventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Lock background scrolling when modal opens
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const requiredEvent = eventsData.find((event) => event.id === +eventId);

  if (!requiredEvent) {
    return (
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <h2 style={{ color: "white" }}>Event not found</h2>
          <button onClick={() => navigate("/")} className={classes.backBtn}>Go Back</button>
        </div>
      </div>
    )
  }

  const {
    name,
    image,
    description,
    rules,
    prizes,
    team,
    fees,
    contactInfo,
    location,
    date,
    link,
    onSpot,
    disqualification,
    rulebookLink, // Destructuring rulebookLink
  } = requiredEvent;

  return (
    <div className={classes.singleEvent}>
      <div className={classes.singleEventCard}>
        {/* Close Button */}
        <button className={classes.closeBtn} onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className={classes.col1}>
          <div className={classes.posterWrapper}>
            <img className={classes.eventPoster} src={image} alt={name} />
          </div>
          {/* Rulebook Download Button */}
          {rulebookLink && (
            <div className={classes.rulebookBtnContainer}>
              <a
                href={rulebookLink}
                download
                target="_blank"
                rel="noreferrer noopener"
                className={classes.downloadBtn}
              >
                Download Rule Book
              </a>
            </div>
          )}
        </div>

        <div className={classes.col2}>
          <h1 className={classes.eventHeading}>{name}</h1>

          <div className={classes.sectionWrap}>
            <h2 className={classes.heading}>Description</h2>
            <p className={classes.content}>{description}</p>
          </div>

          <div className={classes.rowcol}>
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Team/Individual</h2>
              <p className={classes.content}>{team}</p>
            </div>
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Fees</h2>
              <p className={classes.content}>{fees}</p>
            </div>
          </div>

          <div className={classes.rowcol}>
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Location</h2>
              <p className={classes.content}>{location}</p>
            </div>
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Date & Time</h2>
              <p className={classes.content}>{date}</p>
            </div>
          </div>

          {prizes && (
            <div className={classes.sectionWrap}>
              <h2 className={classes.headingp}>Prizes</h2>
              <ul className={classes.list}>
                {prizes?.map((prize, i) => (
                  <li key={i} className={classes.content}>{prize}</li>
                ))}
              </ul>
            </div>
          )}

          {rules && (
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Rules and Regulations</h2>
              <ul className={classes.list}>
                {rules?.map((rule, i) => (
                  <li key={i} className={classes.content}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {disqualification && (
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Disqualification</h2>
              <ul className={classes.list}>
                {disqualification?.map((rule, i) => (
                  <li key={i} className={classes.content}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {contactInfo && contactInfo.length > 0 && (
            <div className={classes.sectionWrap}>
              <h2 className={classes.heading}>Contact Info</h2>
              {contactInfo?.map((contact, i) => (
                <p key={i} className={classes.content}>{contact}</p>
              ))}
            </div>
          )}



          <div className={classes.actionFooter}>
            {link !== "" ? (
              <Button hrefLink={link} label="Register Now" />
            ) : onSpot !== "" ? (
              <p className={classes.soon}>Registration will be taken on spot!</p>
            ) : (
              <p className={classes.soon}>Registration will be open soon.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
