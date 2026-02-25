import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";

const MainEvents = () => {
  const cipherEvent = eventsData.find(e => e.id === 1);
  const miniEvents = eventsData.filter(e => e.id >= 16 && e.id <= 19);
  const otherEvents = eventsData.filter(e => e.id !== 1 && (e.id < 16 || e.id > 19));
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
        <h1 className={classes.heading}>Events</h1>
        <img src="x" alt="" />

        {cipherEvent && (
          <div className={classes.cipher_section}>
            <h2 className={classes.cipher_main_heading}>Cipher Premier League</h2>

            <h3 className={classes.mini_heading}>4 Mini Coding Contests</h3>
            <div className={classes.mini_events_container}>
              {miniEvents.map((eventData, idx) => (
                <div key={idx} className={classes.mini_card_wrapper}>
                  <EventCard eventData={eventData} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={classes.events_container}>
          {otherEvents.map((eventData, i) => {
            return <EventCard eventData={eventData} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
