// APP TEXT
export const APP_TITLE = 'MP';
export const APP_DESCRIPTION = 'React TypeScript Material-UI boilerplate by Welcome, Developer.';
export const FOOTER_TEXT = `${new Date().getFullYear()} @MP`;
// PAGES TITLE
export const PAGE_TITLE_HOME = 'Home';
export const PAGE_TITLE_DASHBOARD = 'Dashboard';
export const PAGE_TITLE_GH_PRIVATE = 'GitHub Private';
export const PAGE_TITLE_GH_PUBLIC = 'GitHub Public';
export const PAGE_TITLE_CODE = 'Code Editor';
export const PAGE_TITLE_SETTINGS = 'Settings';
export const PAGE_TITLE_PREFERENCES = 'Preferences';
// UI CONSTANTS
export const FOOTER_HEIGHT = 30;
export const HEADER_HEIGHT = 60;
export const DRAWER_WIDTH = 250;
// APP THEME
export const DARK_MODE_THEME = 'dark';
export const LIGHT_MODE_THEME = 'light';
// DEFAULT TIMEOUT VALUE FOR LETTER WRITER
export const DEFAULT_TIMEOUT_MILLI = 150;

export const LOCATION_API = 'https://ipapi.co/json/';
export const COMMANDS_API = 'https://api.npoint.io/a8174bdf8a908f1dad72';
export const KEYS_API = 'https://api.npoint.io/a6717183b4ff692c2c4c';

export const KEYS_DATA = {
  "name": "Prashanth Molakala",
  "bio": "Software engineering lead with seven years of hands on technical expertise and passion towards architecting, building and providing solutions for software products",
  "experience": [
    "Software Engineering Lead at Egen since past three years, currently leading multiple teams",
    "Worked with Tempus as a Senior Software Engineer for around one and a half year between Feb, 2018 to July 2019",
    "Worked with Uptake as a Software Engineer for around one and a half year between Sep, 2016 to Jan, 2018"
  ],
  "skills": [
    "Java, JavaScript, Python",
    "Reactjs, Nestjs, Java Spring, Python Flask",
    "Elasticsearch, Postgresql, MongoDB, Firestore, Redis, AWS S3",
    "Splunk, Grafana, Kibana, Jenkins",
    "Docker, AWS, GCP, Azure"
  ],
  "education": [
    "Masters in Computer Science from Illinois Institute of Technology in the year 2016",
    "Bachelors in Electronics and Communication Engineering from JNTU Hyderabad in the year 2014"
  ]
};

export const COMMANDS_DATA = [
  {
    "text": "start execution of resume",
    "isCmd": true,
    "timeout": 150,
    "loadscale": 5
  },
  {
    "text": "fetching resume data",
  },
  {
    "text": "...........................",
    "isCmd": true,
    "timeout": 10
  },
  {
    "text": "resume data successfully fetched",
    "timeout": 350
  },
  {
    "text": ""
  },
  {
    "text": "print ${NAME}",
    "isCmd": true,
    "timeout": 80
  },
  {
    "key": "name",
    "timeout": 250
  },
  {
    "text": ""
  },
  {
    "text": "print ${BIO}",
    "isCmd": true,
    "timeout": 60
  },
  {
    "key": "bio"
  },
  {
    "text": ""
  },
  {
    "text": "print ${Experience}",
    "isCmd": true,
    "timeout": 125
  },
  {
    "key": "experience"
  },
  {
    "text": ""
  },
  {
    "text": "print ${Skills}",
    "isCmd": true,
    "timeout": 50
  },
  {
    "key": "skills"
  },
  {
    "text": ""
  },
  {
    "text": "print ${Education}",
    "isCmd": true,
    "timeout": 110
  },
  {
    "key": "education"
  },
  {
    "text": ""
  },
]