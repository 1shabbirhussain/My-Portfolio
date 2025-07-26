/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shabbir Hussain",
  title: "Hi all, I'm Shabbir",
  subTitle: emoji(
    "I'm a Certified and Experienced FLUTTER DEVELOPER, passionate about crafting high-quality mobile, desktop, and web applications. My work covers Android, iOS, web, and desktop platforms, with a strong foundation in UI/UX design."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1NNop4Wr0qwsQITnkL7Vbl9sOOK68Agar", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/1shabbirhussain",
  linkedin: "https://www.linkedin.com/in/shabbir-hussain-445338228/",
  gmail: "001.shabbirhussain@gmail.com",
  facebook: "https://www.facebook.com/shabbirhussain.00/",
  medium: "https://medium.com/@001.shabbirhussain",
  whatsapp: "https://wa.me/923478356631?text=Hello%20Shabbir%20Hussain",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FLUTTER DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop high-quality mobile applications for Android and iOS using Flutter"
    ),
    emoji("⚡ Create cross-platform desktop and web applications with Flutter framework"),
    emoji(
      "⚡ Design intuitive UI/UX interfaces and integrate third party services like Firebase/Rest APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
softwareSkills: [
  {
    skillName: "flutter",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "dart",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap"
  },
  {
    skillName: "app-store",
    fontAwesomeClassname: "fab fa-app-store"
  },
  {
    skillName: "google-play",
    fontAwesomeClassname: "fab fa-google-play"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "figma",
    fontAwesomeClassname: "fab fa-figma"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "github",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "gitlab",
    fontAwesomeClassname: "fab fa-gitlab"
  },
  {
    skillName: "bitbucket",
    fontAwesomeClassname: "fab fa-bitbucket"
  },
  {
    skillName: "jira",
    fontAwesomeClassname: "fab fa-jira"
  },
  {
    skillName: "trello",
    fontAwesomeClassname: "fab fa-trello"
  },
  {
    skillName: "fastlane",
    fontAwesomeClassname: "fas fa-rocket"
  },
  {
    skillName: "ci-cd",
    fontAwesomeClassname: "fas fa-cogs"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Karachi (UBIT)",
      logo: require("./assets/images/uok.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "January 2020 - December 2023",
      desc: "I have done my final year project on E-Procurement System using Full Stack and Flutter.",
      descBullets: [
        "Actively Volunteered in various tech events and workshops",
        "Participated in hackathons and coding competitions",
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Flutter Engineer",
      company: "Avialdo Solutions",
      companylogo: require("./assets/images/avialdo.png"),
      date: "June 2024 – Present",
      desc: "As a Flutter Developer, I used BLoC to deploy 50+ apps from a single codebase with 278 flavors. I optimized updates, added new features, themes, sockets, Firebase, and Deeplinks. I managed Play Store and App Store deployments and automated CI/CD with Fastlane for batch uploads.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Flutter Consultant (Freelance)",
      company: "Quick & Easy",
      companylogo: require("./assets/images/qne.png"),
      date: "January 2025 – Present",
      desc: "Joined an e-commerce grocery store as a Flutter Consultant (Freelance). Migrated the app from an older Flutter setup, created iOS builds, and handled deployments. I lead ongoing improvements, roll out new features and bug fixes, and manage junior developers to ensure smooth delivery.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Engineer",
      company: "Binate Digital",
      companylogo: require("./assets/images/binate.png"),
      date: "Jan 2024 – May 2024",
      desc: "As a Flutter Developer in a fast-paced, project-based setting, I led six projects—designing UIs and building key features like payments, maps, chat, and calling. I focused on optimizing provider management and handling complex integrations."
    },
    {
      role: "Flutter Developer",
      company: "Centilion",
      companylogo: require("./assets/images/centilion.png"),
      date: "Jan 2023 – Jan 2024",
      desc: "Started my career as a Flutter Developer using state management tools and Firebase authentication. Integrated backend APIs for real-time updates, turned UI/UX designs into functional apps, and implemented sockets, payment gateways, Google Maps, and unit tests."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/qne.png"),
      projectName: "Quick and Easy",
      projectDesc: "E-Commerce Grocery Store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qne.com.pk/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    
    achievementsCards: [
    {
      title: "Certified Flutter Developer",
      subtitle: "Completed Certifcation from Jawan Pakistan for Flutter Development",
      image: require("./assets/images/jawan_pakistan.png"),
      imageAlt: "Jawan Pakistan Logo",
      certificateImage: "/assets/images/certificates/flutter_jp.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },
    {
      title: "Flutter Hackathon Winner",
      subtitle:
        "Winner of Flutter Devathon anmong 100 students, organized by Saylani Mass IT Training (SMIT) in 2023.",
      image: require("./assets/images/smit.png"),
      imageAlt: "SMIT Logo",
      certificateImage: "/assets/images/certificates/devathon.png",
      footerLink: [
        {
          name: "Certification",
          url: "certificate",
          type: "certificate"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Soft Skills Program",
      subtitle:
        "An Online Program taught by Google and offered by PAFLA to improve my soft skills.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      certificateImage: "/assets/images/certificates/softskills.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },

    {
      title: "Membership of PAFLA",
      subtitle: "Member of Pakistan Flutter Association (PAFLA)",
      image: require("./assets/images/pafla.png"),
      imageAlt: "PAFLA Logo",
      certificateImage: "/assets/images/certificates/membership.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },
    {
      title: "Introduction to Flutter",
      subtitle: "Completed Certifcation from SkillUp for Introduction to Flutter Development",
      image: require("./assets/images/skillup.png"),
      imageAlt: "SkillUp Logo",
      certificateImage: "/assets/images/certificates/flutter.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },
    {
      title: "Java Script Crash Course",
      subtitle: "Completed Certifcation from SMIT for Java Script Crash Course",
      image: require("./assets/images/smit.png"),
      imageAlt: "SMIT Logo",
      certificateImage: "/assets/images/certificates/js.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },
    {
      title: "Certified Computer Operator (CCO)",
      subtitle: "Completed Certifcation from SMIT for Certified Computer Operator",
      image: require("./assets/images/smit.png"),
      imageAlt: "SMIT Logo",
      certificateImage: "/assets/images/certificates/cco.png",
      footerLink: [
        {name: "Certification", url: "certificate", type: "certificate"},
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-347-8356631",
  email_address: "001.shabbirhussain@gmail.com",
   display: false
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
