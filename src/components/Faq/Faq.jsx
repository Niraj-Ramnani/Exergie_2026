import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is EXERGIE 2026?",
    answer: "EXERGIE 2026 is one of the biggest Technical, Cultural and E-Sports events featuring 15+ incredible competitions."
  },
  {
    question: "When and where is Exergie 2026 happening?",
    answer: "The fest spans 3 action-packed days: March 13th to March 15th, 2026, hosted at Arya College of Engineering and IT campus (Arya 1st Old Campus, Estd Yr 2000), SP-42, RIICO Industrial Area, Kukas, Delhi Road, Near Hotel Le-Meridian, Jaipur, Rajasthan."
  },
  {
    question: "Who can participate in the events?",
    answer: "As an inter-college event, EXERGIE 2026 is open to all students from any college or university. Some events are individual while others like Campus Combact League and Robo Soccer require teams."
  },
  {
    question: "How do I register for events like Cipher Premier League or Gyration?",
    answer: "You can click on 'View More' on any event card on our Events page to find the specific registration link and details."
  },
  {
    question: "Are there entry fees and prizes?",
    answer: "Yes, nominal entry fees apply for premium events, with massive cash rewards, certificates and goodies for the top performers."
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Absolutely! You can sign up for as many events as your schedule allows, from tech (Robo War) to cultural (JAM, Musi-Mania)."
  }
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${clicked === i ? classes.answer : classes.noAnswer
                  }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
