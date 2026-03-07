// import Khoj from "./Events/Khoj.png";
// import BlindCoding from "./Events/BlindCoding.png";
// import FlyHigh from "./Events/FlyHigh.png";
// import SpaceExpo from "./Events/SpaceExpo.png";
// import RoboRace from "./Events/RoboRace.png";
// import RelayRacing from "./Events/RelayRacing.png";
// import MurderMystery from "./Events/MurderMystery.png";
// import ShotOnQuiz from "./Events/ShotOnQuiz.png";
// import RoboSoccer from "./Events/RoboSoccer.png";
// import DraicPlayground from "./Events/DraicPlayground.png";
// import HopSites from "./Events/HopSites.png";
// import CodeBuddies from "./Events/CodeBuddies.png";
// import MaskedCoding from "./Events/MaskedCoding.png";
// import Blogathon from "./Events/Blogathon.png";
// import BotBusters from "./Events/BotBusters.png";
// import CadCompetiton from "./Events/CadCompetiton.png";
// import GamingZone from "./Events/GamingZone.png";
// import KeynoteSession from "./Events/KeynoteSession.png";
// import ReadandType from "./Events/ReadandType.png";
// import SpeedTypers from "./Events/SpeedTypers.png";
// import web3 from "./Events/Web3.png";
// import SupercarShow from "./Events/SupercarShow.png";
// import TremblingTower from "./Events/TremblingTower.png";
import cipherImage from "./club posters/cipher premier league.png";
import esportsImage from "./club posters/campuscombat.png";
import momentGridImage from "./club posters/momentgrid.png";
import aquaThrustImage from "./club posters/Aqua Thrust.jpg";
import ittefaqImage from "./club posters/ITTEFAQ.jpeg";
import alpanaImage from "./club posters/alpana.jpeg";
import innoCanvasImage from "./club posters/inocanvas.jpeg";
import reelRumbleImage from "./club posters/reelrumble.png";
import robowarImage from "./club posters/robowar.png";
import robosoccerImage from "./club posters/robosoccer.png";
import jamImage from "./club posters/jam.png";
import musicManiaImage from "./club posters/musicmania.png";
import gyrationImage from "./club posters/gyration.png";
import donDeModeImage from "./club posters/dondemode.png";
import blindCodingImage from "./club posters/blindcoding.jpeg";
import reverseCodingImage from "./club posters/reversecoding.png";
import cssBattleImage from "./club posters/cssbattle.jpeg";
import buildWithoutCodeImage from "./club posters/buildwithoutcode.jpeg";
import confernoImage from "./club posters/confero.jpeg";
import squidGameImage from "./club posters/squidgame.png";
import buildBlitzImage from "./club posters/buildblitz.png";
import hackAryaverseImg from "./specialevents/hackaryaverse.png";
import capitalArenaImg from "./specialevents/capitalarena.png";
import projectathonImg from "./specialevents/projectathon.png";
// import quiz from "./Events/quiz.png";

export const eventsData = [
  {
    id: 1,
    image: cipherImage,
    name: "Cipher Premier League",
    description: "Blind Coding, Reverse Coding, CSS Battle, Build without Code",
    rules: [
      "Only individual participation is allowed.",
      "Participants must report on time.",
      "Participant College ID must be visible."
    ],
    prizes: ["Certificates of Merit & Goodies"],
    type: "individual",
    price: 50,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "ALRC",
    date: "13 to 14 March, 11:00 AM to 3:00 PM",
    note: [""],
    link: "https://forms.gle/J8MUEvjCMTGM6tEK9",
    rulebookLink: "/dummy-rulebook.pdf",
  },
  {
    id: 2,
    image: jamImage,
    name: "JAM (Talent Hunt)",
    description: "JAM (Just A Minute) is a fun and interactive individual event organized by the Music Club to encourage creativity, spontaneity, confidence, and quick thinking. Participants perform engaging one-minute challenges based on given topics or tasks.",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "individual",
    price: 50,
    contactInfo: ["Ayushi Satpathy: 9870583055"],
    location: "Badminton Court",
    date: "13 March",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1dk1P7D9Z7hYd34KPqI2Kwnh_0H8lGPDz/view?usp=sharing",
  },
  {
    id: 3,
    image: musicManiaImage,
    name: "Music Mania",
    description: "MUSIC MANIA (Antakshari) is a team-based musical competition organized by the Music Club that celebrates musical enthusiasm through structured singing rounds following the traditional Antakshari format.",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "team_fixed",
    minMembers: 2,
    maxMembers: 4,
    price: 200,
    contactInfo: ["Ayushi Satpathy: 9870583055"],
    location: "Badminton Court",
    date: "13 March",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1L8m9cuOwnmHEv71pWipGWrCcuWkXK6Qn/view?usp=sharing",
  },
  {
    id: 4,
    image: alpanaImage,
    name: "Alpana",
    description: "Inter College Rangoli Competition | Alpana is a creative competition designed to encourage artistic expression, cultural representation, and innovative design skills among students. The event aims to provide a platform for participants to showcase their creativity through vibrant and meaningful rangoli designs.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "team_fixed",
    minMembers: 1,
    maxMembers: 2,
    price: 100,
    contactInfo: ["Prerak Sharma: 6376232585"],
    location: "New Academic Block Ground Floor",
    date: "13 March, 10:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/15tOVeMYYy8ywV5pIH7CMQv1Bvr8xRrZz/view?usp=sharing",
  },
  {
    id: 5,
    image: innoCanvasImage,
    name: "InnoCanvas",
    description: "Inter College Poster Competition | InnoCanvas is a creative art-based activity designed to complement and encouraging students to visually represent their technological ideas. The event provides a platform for participants to transform their imagination of future innovations, digital solutions, and emerging technologies into structured artistic expressions. Theme: Technology Through Your Imagination (AI in Everyday Life, Smart Cities, Human +AI Collaboration, cutting age technology).",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "individual",
    price: 100,
    contactInfo: ["Prerak Sharma: 6376232585"],
    location: "Lawn in Front of Temple",
    date: "14 March, 10:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/10-q-FgVO9aKAyX6kK9A667slK3m0NXfx/view?usp=sharing",
  },
  {
    id: 6,
    image: reelRumbleImage,
    name: "Reel Rumble",
    description: "REEL RUMBLE – Shoot. Post. Dominate. 🎬🔥 Reel Na Banegi Dobara! As part of Exergie 2026 at Arya College of Engineering & IT, Reel Rumble is an electrifying individual reel-making competition where creativity meets campus energy. Capture the fest vibes, post your reel, and compete for epic prizes! 🎥 30–90 seconds.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications",
      "Best Reel Award"
    ],
    type: "individual",
    price: 50,
    contactInfo: ["Awantika Jaiswal: 9871843402"],
    location: "Must be shot during events on 13th & 14th March",
    date: "13 March, 9:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1YnOW6iHO1VFfmGSgFiZcharerQZ28hh-/view?usp=sharing",
  },
  {
    id: 7,
    image: confernoImage,
    name: "Confero: The AI Debate",
    description: "The Clash Of Logic in the age of AI.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "individual",
    price: 50,
    contactInfo: ["Khushi Lalwani: 8107107436"],
    location: "TBD",
    date: "14 March",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1xtLg_dlRpnV2M5_fE9SydD1nHEZGoRKm/view?usp=sharing",
  },
  {
    id: 8,
    image: esportsImage,
    name: "Campus Combat League",
    description: "The ACEIT Esports Club is excited to host CAMPUS COMBAT LEAGUE which is an intercollege offline lan gaming tournament featuring majorly two games BGMI and FREEFIRE.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications",
      "Trophy to the top 3"
    ],
    type: "team_fixed",
    minMembers: 3,
    maxMembers: 5,
    price: 200,
    contactInfo: [
      "HIMANSHU THAKUR: 7428529728",
      "Abhiraj Srivastva: 6202391180"
    ],
    location: "Arya College of Engineering and IT",
    date: "13 March, 9:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/13dH5yAVEBGMxsxKfzG7vL_asGg5ccDtG/view?usp=sharing",
  },
  {
    id: 9,
    image: gyrationImage,
    name: "Gyration",
    description: "Are you ready to set the stage on fire? Gyration is the ultimate Dance Competition where teams will showcase their energy! Pricing: Teams with up to 10 members – ₹1000. Teams with 11–20 members – ₹1500.",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "team_fixed",
    minMembers: 1, // Minimum 1 to allow UI to scale up dynamically
    maxMembers: 20, // Max 20 per new rule
    price: 1000, // Base price for 1-10 members
    contactInfo: ["Tarangini: 9306905853"],
    location: "Arya Ground",
    date: "13th March 2026",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1ANDsA4shDU-szIcn0ZyPB2Yxiu8FsPtO/view?usp=sharing",
  },
  {
    id: 10,
    image: donDeModeImage,
    name: "Don-De-Mode",
    description: "Step into the spotlight and own the runway at Don-De-Mode, the signature Fashion Show event! Showcase stunning designs, fierce walks, and thematic representations with your team. Do you have what it takes to be the top models of 2026?",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "team_fixed",
    minMembers: 10,
    maxMembers: 20,
    price: 1500,
    contactInfo: ["Laxman Moond: 9352562476"],
    location: "Arya Ground",
    date: "13th March 2026",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1UJ_1_OWmAsh1SO6Xje9735S5LiyMhPsV/view?usp=sharing",
  },
  {
    id: 11,
    image: aquaThrustImage,
    name: "Aqua Thrust & Drift Xperience",
    description: "🚀🔥 Aqua Thrust & Drift Xperience 2026 is a dynamic technical and motorsport event organized by ARYA GO-KART CLUB under Shraddhanjali 2026. Aqua Thrust challenges teams to design and launch high-performance water rockets using principles of fluid dynamics and propulsion, while Drift Xperience delivers an adrenaline-filled showcase of precision drifting and vehicle control by professional drivers.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications",
      "Trophy to the top 3"
    ],
    type: "team_fixed",
    minMembers: 2,
    maxMembers: 2,
    price: 100,
    contactInfo: [
      "Daud Ibrahim: 8809788959",
      "Priyanshu Soni: 8209385914"
    ],
    location: "College Ground",
    date: "14 March, 10:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1_4VTAh-ilLgHM5lBQIWBLo7SLb2OnFC9/view",
  },
  {
    id: 12,
    image: robosoccerImage,
    name: "Robo Soccer",
    description: "Robo Soccer is a team-based robotics competition inspired by the game of football, where manually controlled or semi-autonomous robots compete to score goals against the opposing team within a defined arena. The event evaluates mechanical design, speed, ball control, coordination, and strategic gameplay. Participants must design robust and agile robots capable of effective ball handling, precise movement, and tactical positioning while adhering to the competition rules.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "team_fixed",
    minMembers: 2,
    maxMembers: 4,
    price: 999,
    contactInfo: ["Ritik Raj Singh: 9351550941"],
    location: "Front lawn",
    date: "13 March, 10:30 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1hdtAxyjdEbO3AYhDKtDXZC77G8tMxzJC/view?usp=sharing",
  },
  {
    id: 13,
    image: robowarImage,
    name: "Robo War",
    description: "Robo War is a high-intensity combat robotics competition where teams design, build, and control robots to battle against opponents inside a secured arena. The event evaluates mechanical robustness, weapon integration, control accuracy, and strategic planning while strictly following safety regulations.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "team_fixed",
    minMembers: 2,
    maxMembers: 6,
    price: 1499,
    contactInfo: ["Nilesh Kumar Dev: 6207448003"],
    location: "Front lawn",
    date: "13 March, 5:00 PM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/136MQrdTVuIJAACyoRROzoP_0E51HU7o9/view?usp=sharing",
  },
  {
    id: 14,
    image: ittefaqImage,
    name: "ITTEFAQ",
    description: "ITTEFAQ – Where Coincidence Creates Connection! A high-energy networking event under Exergie 2K26, where participants are randomly paired with strangers to collaborate on fun and creative challenges. From storytelling and startup pitches to team coordination games like Pair Musical Chairs, ITTEFAQ is designed to spark spontaneous teamwork, boost confidence, and build meaningful connections — all in a professional yet entertaining environment.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "individual",
    price: 50,
    contactInfo: ["Harshvardhan Bhatt: 7357885079"],
    location: "Badminton Court, Arya College of Engineering and IT",
    date: "14 March, 11:00 AM",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1lXFlLy3AmJmqnSLip745zFKVaI8C7Vqc/view?usp=sharing",
  },
  {
    id: 15,
    image: momentGridImage,
    name: "Moment Grid",
    description: "Moment Grid is a creative campus photography initiative designed to document real-time moments across hackathons, club events, and competitions conducted on campus. While graphic editing is allowed, the photographs must communicate a clear story through moments, emotions, and composition rather than graphic elements.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "individual",
    price: 50,
    contactInfo: ["Yash Chandravanshi: 8829840346"],
    location: "Arya College of Engineering and IT",
    date: "13 March, Whole Day",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1pqZxztj8n2BkMtiJJoJr4r7msCHhi5y0/view?usp=sharing",
  },
  {
    id: 16,
    image: blindCodingImage,
    name: "Blind Coding",
    description: "Code without seeing your screen! Test your coding accuracy and memory in this unique challenge.",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "individual",
    price: 50,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "ALRC",
    date: "14 March, 11:00 am",
    note: [""],
    link: "https://forms.gle/J8MUEvjCMTGM6tEK9",
    rulebookLink: "https://drive.google.com/file/d/1v9_8l8SXklcwwNNLJUo3Eacx-V_wpsN_/view?usp=sharing",
  },
  {
    id: 17,
    image: reverseCodingImage,
    name: "Reverse Coding",
    description: "Given an executable or output, figure out the source code. Sharpen your logic and deduction skills!",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "individual",
    price: 50,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "ALRC",
    date: "13 March, 11:00 am",
    note: [""],
    link: "https://forms.gle/J8MUEvjCMTGM6tEK9",
    rulebookLink: "https://drive.google.com/file/d/1vQqG5Jex9is8GWlV_QvUTjLSq_xK9yAx/view?usp=sharing",
  },
  {
    id: 18,
    image: cssBattleImage,
    name: "CSS Battle",
    description: "Replicate the given UI using only HTML and CSS. Show off your frontend styling skills!",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "individual",
    price: 50,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "ALRC",
    date: "13 March, 1:30 pm",
    note: [""],
    link: "https://forms.gle/J8MUEvjCMTGM6tEK9",
    rulebookLink: "https://drive.google.com/file/d/1zgdjkdt7a5b9DSXpBcnd23eff_WA9lGF/view?usp=sharing",
  },
  {
    id: 19,
    image: buildWithoutCodeImage,
    name: "Build without Code",
    description: "Use No-Code tools to build a functional prototype. Fast, creative, and logic-driven!",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes"],
    type: "individual",
    price: 50,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "ALRC",
    date: "14 March, 1:30 pm",
    note: [""],
    link: "https://forms.gle/J8MUEvjCMTGM6tEK9",
    rulebookLink: "https://drive.google.com/file/d/104ajYCfdHpg-Atn3EbHEt9A4qu74rsBQ/view?usp=sharing",
  },
  {
    id: 20,
    image: squidGameImage,
    name: "Arya Exergie Squid Game",
    description: "Arya Exergie presents Squid Game: The Aceit Challenge, an adrenaline-filled campus event inspired by thrilling survival style games. Get ready to test your speed, focus, and teamwork in exciting rounds like Red Light Green Light, Sack Race, and Musical Chairs, along with many more surprise games. Designed to bring fun competition and high energy vibes, this event promises an unforgettable experience for all participants. With a registration fee of just ₹30, everyone gets a chance to compete and win cool prizes and mementos. Gather your friends, step into the challenge, and prove your skills at Arya College of Engineering and IT!",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "individual",
    price: 49,
    contactInfo: ["Rishi Joshi: 8441000770"],
    location: "Main Ground",
    date: "13 March, whole day",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1UZXxSBJPMIpD16b-JWGnKl-DhNjTGvxM/view?usp=sharing",
  },
  {
    id: 21,
    image: buildBlitzImage,
    name: "Build Blitz",
    description: "Build Blitz is a time-bound innovation competition where participants are given a real-world problem statement and must design and develop a functional IoT prototype within the specified duration. In addition, participants must create a creative meme highlighting potential real-world failure scenarios to demonstrate technical understanding with a touch of humour.",
    rules: ["To be announced"],
    prizes: [
      "Interesting cash prizes",
      "Certifications"
    ],
    type: "team_fixed",
    minMembers: 1,
    maxMembers: 4,
    price: 200,
    contactInfo: ["Anshula: 7339808765"],
    location: "To be declared",
    date: "13 March",
    note: [""],
    link: "#",
    rulebookLink: "https://drive.google.com/file/d/1w_r6Leib2Gd4gs5dg0qo4LvRThYGt3tc/view?usp=sharing",
  },
  {
    id: 22,
    image: hackAryaverseImg,
    name: "Hack AryaVerse 2.0",
    description: "Hack AryaVerse 2.0 is a 24-hour hackathon designed to bring together the brightest minds to build innovative solutions for real-world problems. Whether you're a coder, designer, or problem solver, this is your chance to showcase your skills and win amazing prizes.",
    rules: ["To be announced"],
    prizes: ["Exciting Prizes", "Certificates", "Merchandise"],
    type: "team_fixed",
    minMembers: 2,
    maxMembers: 4,
    price: 0,
    contactInfo: ["Niraj Ramnani: 7339915052"],
    location: "Arya Main Campus",
    date: "14th - 15th March 2025",
    link: "https://linktr.ee/HackAryaVerse_2.0",
    isSpecial: true,
    directLink: true,
  },
  {
    id: 23,
    image: capitalArenaImg,
    name: "Capital Arena 2.0",
    description: "Season 2 of Capital Arena brings you the ultimate pitching platform. Pitch bold, get judged, and get funded. A premier business and startup pitch event for aspiring entrepreneurs.",
    rules: ["To be announced"],
    prizes: ["Funding Opportunities", "Mentorship", "Trophy"],
    type: "individual",
    price: 0,
    contactInfo: ["Vishvesh Soni: 9664275136"],
    location: "Arya Main Campus",
    date: "March 2025",
    link: "https://unstop.com/competitions/capital-arena-season-2-arya-college-of-engineering-and-information-technology-aceit-jaipur-rajasthan-1648863?lb=DoaYWVzM&utm_medium=Share&utm_source=dwbcplje60572&utm_campaign=Competitions",
    isSpecial: true,
    directLink: true,
  },
  {
    id: 24,
    image: projectathonImg,
    name: "Projectathon 2.0",
    description: "Projectathon 2.0 is a technical innovation event designed to promote creativity, enhance technical skills, and encourage real-world industrial problem-solving in the field of automation and smart technologies. The event provides a dynamic platform for students to transform their ideas into practical, working solutions aligned with modern industrial needs.",
    rules: ["To be announced"],
    prizes: ["Interesting cash prizes", "certifications"],
    type: "team",
    minMembers: 1,
    maxMembers: 4,
    price: 200,
    contactInfo: ["Abhinav Singh Chandel: 9680776035"],
    location: "To be declared",
    date: "14 March",
    link: "https://forms.gle/H6NQ5g94ELvqfswGA",
    rulebookLink: "https://drive.google.com/file/d/1V39FmRUFgyJevEo-suPToGlEcQtAtM7w/view?usp=sharing",
    isSpecial: true,
  }
];

