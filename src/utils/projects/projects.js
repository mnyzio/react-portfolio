import nexus from './img/nexus-sq.png';
import techSpot from './img/techSpot-sq.png';
import weather from './img/weather-sq.png';
import quiz from './img/quiz-sq.png';
import writeIt from './img/writeIt-sq.png';
import travel from './img/travel-sq.png';


const projects = [
  {
    id: "1",
    projectName: "Project Nexus",
    projectDesc: "A website that caters to developers of all levels, providing them with a platform to connect, collaborate, and learn from each other.",
    linkDeployed: "https://project-nexus.herokuapp.com/",
    linkGitHub: "https://github.com/arlindo2017/project-nexus",
    imageSrc: nexus,
    imgAlt: "Project Nexus"
  },
  {
    id: "2",
    projectName: "Tech-Spot",
    projectDesc: "CMS style Technology Blog which allows users to share their passion for tech by creating posts that other users can comment on as well as adding comments on other users posts.",
    linkDeployed: "https://techspot.herokuapp.com/",
    linkGitHub: "https://github.com/mnyzio/tech-spot",
    imageSrc: techSpot,
    imgAlt: "tech-spot"
  },
  {
    id: "3",
    projectName: "Weather Dashboard",
    projectDesc: "Weather Dashboard that shows current weather and 5 day forcast for user's approximate location or any other city.",
    linkDeployed: "https://mnyzio.github.io/weather-dashboard/",
    linkGitHub: "https://github.com/mnyzio/weather-dashboard",
    imageSrc: weather,
    imgAlt: "Weather"
  },
  {
    id: "4",
    projectName: "Code Quiz",
    projectDesc: "A timed quiz with multiple-choice questions that will test user's knowledge on javascript fundamentals.",    
    linkDeployed: "https://mnyzio.github.io/code-quiz/",
    linkGitHub: "https://github.com/mnyzio/code-quiz",
    imageSrc: quiz,
    imgAlt: "Project Nexus"
  },
  {
    id: "5",
    projectName: "Write It",
    projectDesc: "Progressive Web Applications (PWA): Text Editor App uses IndexDB and LocalStorage which allows users to create notes or code snippets with or without internet connection that can be retrieved for later use.",
    linkDeployed: "https://write-it.herokuapp.com",
    linkGitHub: "https://github.com/mnyzio/write-it",
    imageSrc: writeIt,
    imgAlt: "write-it"
  },
  {
    id: "6",
    projectName: "Travel buddy",
    projectDesc: "Website that enables users to get lodging information based on various forms of location (either by getting their current location or searching by zip code).",
    linkDeployed: "https://jrodz0313.github.io/travelbuddy/",
    linkGitHub: "https://github.com/Jrodz0313/travelbuddy",
    imageSrc: travel,
    imgAlt: "travel"
  },
];

export { projects };
