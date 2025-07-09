// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import quantumLogo from "./images/Quantum-atom-icon.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "jorgecs";

// Navbar Logo image
export const navLogo = quantumLogo;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = <Icon icon="mdi:home" width="35" height="35" />;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a passionate software engineer with a strong focus on quantum computing. I have developed an interest in quantum algorithms and quantum software engineering.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="simple-icons:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 2,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:angular" className="display-4" />,
    name: "Angular",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:qiskit" className="display-4" />,
    name: "Qiskit",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:django" className="display-4" />,
    name: "Django",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Scheduler", "Autoscheduler", "AsyncAPIQuantum"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [ //TODO
  {
    name: "example-1",
    image: Logo,
  },
];

/* Publications
 ************************************************************** 
  List the publications you want to include (they will be sorted by date).
  Each publication should be an object with the following properties:
  - title: string - "Publication Title"
  - journal: string - "Journal Name" (optional)
  - conference: string - "Conference Name" (optional)
  - date: string - "2024-01-01" (optional)
  - link: string - "https://link-to-publication.com"
*/

export const publicationsData = [
  {
    id: 1,
    title: "Circuit Scheduling Policies on Current QPUs: QCRAFT Scheduler",
    journal: "Lecture Notes in Computer Science",
    date: "2024-12-07",
    link: "https://doi.org/10.1007/978-981-96-0808-9_15"
  },
  {
    id: 2,
    title: "Scheduling Process of Quantum Circuits to Optimize Tasks Execution on Quantum Computers",
    conference: "IEEE International Conference on Quantum Computing and Engineering (QCE)",
    date: "2024-09-15",
    link: "https://doi.org/10.1109/QCE60285.2024.10275"
  },
  {
    id: 3,
    title: "A Noise Validation for Quantum Circuit Scheduling Through a Service-Oriented Architecture",
    journal: "International Journal of Software Engineering and Knowledge Engineering",
    date: "2024-08-30",
    link: "https://doi.org/10.1142/s0218194024410018"
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mnnvkwnq";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
