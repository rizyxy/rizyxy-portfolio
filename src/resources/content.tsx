import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mukhammad",
  lastName: "Rizki",
  name: `Mukhammad Rizki`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "rizkyyxy@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rizyxy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mukhammad-rizki-18b75518b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">WhatToEat</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/what-to-eat",
  },
  subline: (
    <>
      I'm Rizki, an Information System Graduate from Universitas Airlangga.
      <br />I've built several personal projects and organization's projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A Surabaya-based software engineer, Rizki is passionate about turning ideas into reality.
        He specializes in full-stack development, from architecting a system's core to building
        and deploying the final product.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Cipta Nirmala",
        timeframe: "Nov 2023 - Dec 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developed datalyst, an all-in-one solution for effortless data processing and analysis,
            delivered through a sleek, intuitive web dashboard.
          </>,
        ],
        images: [
          {
            src: "/images/projects/datalyst/datalyst-web.jpg",
            alt: "Datalyst",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PT Cipta Nirmala",
        timeframe: "Jun 2023 - Nov 2023",
        role: "Project Manager Intern",
        achievements: [
          <>
            Led PT Cipta Nirmala's ERP migration project supervised by supervisor
          </>,
          <>
            Created documentations following PM2 Project Management guideline.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Airlangga",
        description: <>Information System</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile App Development",
        description: (
          <>Able to create a mobile app</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter"
          },
          {
            name: "Kotlin",
            icon: "kotlin"
          }
        ]
      },
      {
        title: "Frontend Development",
        description: (
          <>Able to create a frontend app using various technologies</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html"
          },
          {
            name: "CSS",
            icon: "css"
          },
          {
            name: "Javascript",
            icon: "javascript"
          },
          {
            name: "Bootstrap",
            icon: "bootstrap"
          },
          {
            name: "Tailwind",
            icon: "tailwind"
          },
          {
            name: "React",
            icon: "react"
          }
        ]
      },
      {
        title: "Backend Development",
        description: (
          <>Able to create a backend app using various technologies</>
        ),
        tags: [
          {
            name: "FastAPI",
            icon: "fastapi"
          },
          {
            name: "NodeJS",
            icon: "nodejs"
          },
          {
            name: "ExpressJS",
            icon: "expressjs"
          },
          {
            name: "Gin",
            icon: "gin"
          },
          {
            name: "Typescript",
            icon: "typescript"
          },
          {
            name: "Golang",
            icon: "golang"
          },
          {
            name: "Python",
            icon: "python"
          }
        ]
      },
      {
        title: "Fullstack Development",
        description: (
          <>Able to create a fullstack app using various technologies</>
        ),
        tags: [
          {
            name: "Django",
            icon: "django"
          },
          {
            name: "Laravel",
            icon: "laravel"
          },
          {
            name: "NextJS",
            icon: "nextjs"
          },
        ]
      },
      {
        title: "Database",
        description: (
          <>Able to create and manage database</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql"
          },
          {
            name: "PostgreSQL",
            icon: "postgresql"
          },
          {
            name: "MongoDB",
            icon: "mongodb"
          },
          {
            name: "Firebase Firestore",
            icon: "firebase"
          }
        ]
      },
      {
        title: "Machine Leaning",
        description: (
          <>Able to create a machine learning model ranging from classifier, regression, to NLP</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python"
          },
          {
            name: "NLTK",
            icon: "nltk"
          },
          {
            name: "Sklearn",
            icon: "sklearn"
          }
        ]
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/what-to-eat.png",
      alt: "WhatToEat",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/datalyst.jpg",
      alt: "Datalyst",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/mall-hub.jpg",
      alt: "MallHub",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
