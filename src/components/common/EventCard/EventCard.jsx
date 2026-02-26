import React from "react";
import classes from "./EventCard.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { id, image, name } = eventData;
  return (
    <>
      <NavLink to={`/events/${id}`} style={{ textDecoration: "none" }}>
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
            <Button link={`/events/${id}`} label="View More" />
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default EventCard;
