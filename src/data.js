//  icons
import {
  FiEdit,
  FiInstagram,
  FiUserCheck,
  FiFastForward,
  FiPenTool,
  FiMusic,
  FiMail,
  FiMapPin,
  FiSpeaker,
  FiVideo,
} from "react-icons/fi";

// companies icons
import AmazonMusicIcon from "./assets/img/brands/amazon-music.png";
import GooglePlayIcon from "./assets/img/brands/googleplay.png";
import HeadsetIcon from "./assets/img/brands/headset.png";
import SpotifyIcon from "./assets/img/brands/spotify.png";
import YoutubeIcon from "./assets/img/brands/youtube.png";
import DeezerIcon from "./assets/img/brands/deezer.png";

// projects images
import Project1 from "./assets/img/projects/p1.jpg";
import Project2 from "./assets/img/projects/p2.jpg";
import Project3 from "./assets/img/projects/p3.jpg";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.jpg";
import Project6 from "./assets/img/projects/p6.jpg";
import Project7 from "./assets/img/projects/p7.jpg";

//templates images
import ComingSoon from './assets/img/templates/coming-soon.jpg';
import Musician1 from './assets/img/templates/musician1.png';
import BlackWhite from './assets/img/templates/blackwhite.png'

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "templates",
    href: "templates",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// companies
export const brands = [
  {
    img: AmazonMusicIcon,
    href: "",
  },
  {
    img: GooglePlayIcon,
    href: "",
  },
  {
    img: DeezerIcon,
    href: "",
  },
  {
    img: YoutubeIcon,
    href: "",
  },
  {
    img: HeadsetIcon,
    href: "",
  },
  {
    img: SpotifyIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "concert name",
    category: "concert",
  },
  {
    id: "2",
    image: Project2,
    name: "tour name",
    category: "tour",
  },
  {
    id: "3",
    image: Project3,
    name: "concert name",
    category: "concert",
  },
  {
    id: "4",
    image: Project4,
    name: "record name",
    category: "record",
  },
  {
    id: "5",
    image: Project5,
    name: "festival name",
    category: "festival",
  },
  {
    id: "6",
    image: Project6,
    name: "festival name",
    category: "festival",
  },
  {
    id: "7",
    image: Project7,
    name: "broadcast name",
    category: "broadcast",
  },
  {
    id: "8",
    image: Project6,
    name: "broadcast name",
    category: "broadcast",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Concert",
  },
  {
    name: "Tour",
  },
  {
    name: "Record",
  },
  { name: "Broadcast" },
];

// services
export const services = [
  {
    icon: <FiEdit />,
    name: "UX/UXI Desing",
    description:
      "Web design with a human touch. A strategic approach to website design with responsive user interfaces",
  },
  {
    icon: <FiFastForward />,
    name: "Web Development",
    description:
      "Developing web application with latest technologies",
  },
  {
    icon: <FiInstagram />,
    name: "Social Accont Management",
    description:
      "Creating and scheduling content designed to grow and nurture an audience across social media platforms",
  },
  {
    icon: <FiUserCheck />,
    name: "Costumer Service",
    description:
      "Focus on costumer needs and implementing fast solutions",
  },
];

// testimonials
export const videos = [
  {
    videoUrl: 'https://www.youtube.com/embed/aq3z2c4ha80?controls=1',
    videoText: "Minor Swing - Django Reinhardt (Dimitris Dekavallas & George Patsiotis)",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/lOO4UZ7RT3I?controls=1',
    videoText: "DIMITRIS DEKAVALLAS: Adagio -Concierto de Aranjuez -Joaquin Rodrigo (Danube Symphony Orchestra)",
  },
  {
    videoUrl: 'https://www.youtube.com/embed/aq3z2c4ha80?controls=1',
    videoText: "Concierto de Aranjuez - Allegro con Spirito - Dimitris Dekavallas guitar",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at dimitrisdekavallas@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Budapest, Hungary",
    description: "Serving clients worldwide",
  },
];

export const templates = [
  {
    name:'Responsive modern web site with black and white colors',
    description: 'Black and White Personal Web Page',
    imgUrl: BlackWhite,
    url: 'https://dd-template1.onrender.com'
  },
  {
    name:'Personal portfolio web page for all artist',
    description:'Musican Personal Portfolio Web Page',
    imgUrl:Musician1,
    url: 'https://dd-template2.onrender.com'
  },
  {
    name:'Coming Soon',
    description: 'Thise template is under constructions',
    imgUrl: ComingSoon,
    url:'/'
  },
  {
    name:'Coming Soon',
    description: 'Thise template is under constructions',
    imgUrl: ComingSoon,
    url:'/'
  },
] 