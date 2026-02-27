import React from "react";
import classes from "./EventCard.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { id, image, name, directLink, link } = eventData;

  const CardContent = (
    <div className={classes.card}>
      <div className={classes.img_container}>
        <img
          className={classes.event_image}
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className={classes.event_name}>{name}</h3>
      <div className={classes.view_more_btn}>
        <Button
          hrefLink={directLink ? link : null}
          link={!directLink ? `/events/${id}` : null}
          label={directLink ? "Register Now" : "View More"}
        />
      </div>
    </div>
  );

  if (directLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {CardContent}
      </a>
    );
  }

  return (
    <NavLink to={`/events/${id}`} style={{ textDecoration: "none" }}>
      {CardContent}
    </NavLink>
  );
};

export default EventCard;
