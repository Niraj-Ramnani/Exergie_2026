import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";
import SpecialEvents from "../SpecialEvents/SpecialEvents";

const MainEvents = () => {
  const technicalEventIds = [16, 17, 18, 19, 12, 13, 21];
  const technicalEvents = technicalEventIds.map(id => eventsData.find(e => e.id === id)).filter(Boolean);

  let culturalEvents = eventsData.filter(e => !technicalEventIds.includes(e.id) && e.id !== 1);

  // Sort Cultural Events to prioritize Gyration (9) and Don-De-Mode (10)
  culturalEvents.sort((a, b) => {
    const priority = [9, 10];
    const indexA = priority.indexOf(a.id);
    const indexB = priority.indexOf(b.id);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.id - b.id; // Stable ascending sort for the rest
  });
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Our Events</h1>
        <p className={classes.subheading}>
          Are you interested? Register and enjoy Exergie 2026!
        </p>

        <SpecialEvents />

        <div className={classes.category_section}>
          <h2 className={classes.category_heading}>Technical Events</h2>
          <h3 className={classes.category_subheading}>
            Unleash your coding, engineering, and problem-solving skills!
          </h3>
          <div className={classes.events_container}>
            {technicalEvents.map((eventData, idx) => (
              <EventCard eventData={eventData} key={`tech-${idx}`} />
            ))}
          </div>
        </div>

        <div className={classes.category_section}>
          <h2 className={classes.category_heading}>Cultural Events</h2>
          <h3 className={classes.category_subheading}>
            Express your creativity, showcase your talent, and steal the spotlight!
          </h3>
          <div className={classes.events_container}>
            {culturalEvents.map((eventData, idx) => (
              <EventCard eventData={eventData} key={`culture-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvents;
