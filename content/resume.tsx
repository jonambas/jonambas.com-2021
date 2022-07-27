import React from "react";
import Link from "../components/Link";

const resume = {
  meta: {
    name: "Jon Ambas",
    email: "jon@jonambas.com",
  },
  jobs: [
    {
      company: "MessageBird (SparkPost)",
      positions: [
        {
          position: "Staff UX Engineer",
          startDate: "June 2019",
          endDate: "Present",
          experience: [
            <>
              Design, build, and maintain{" "}
              <Link href="https://github.com/SparkPost/matchbox">Matchbox</Link>
              , a design system, saving SparkPost 4,000 design hours and 9,000
              engineering hours per year
            </>,
            "Coordinate with product managers, designers and engineers to define, understand and clarify goals and product requirements",
            "Anticipate how product decisions and aspects of the design system affect the design, engineering and user experience",
            "Oversee projects, planning and prioritization for frontend and design teams",
            "Provide mentorship and direction to designers and frontend engineers",
          ],
        },
        {
          position: "Front End Engineer",
          startDate: "October 2016",
          endDate: "June 2019",
          experience: [
            "Worked within a distributed team of engineers responsible for SparkPost's React web application",
            "Lead design and technical implementation of several product initiatives",
            "Provided creative and technical guidance to marketing, product, developer relations, and other engineering teams on several projects",
          ],
        },
      ],
    },
    {
      position: "Web Developer",
      company: "Polymath Innovations",
      startDate: "August 2015",
      endDate: "October 2016",
      experience: [
        "Worked with a distributed team of engineers and designers to build Laravel applications",
        "Produced product designs, prototypes, branding concepts and style guides using Sketch, Invision, and After Effects",
        "Provided technical direction to other developers to assist the development of Wordpress websites",
      ],
    },
    {
      position: "Web Developer",
      company: "Fifteen4",
      startDate: "September 2013",
      endDate: "August 2015",
      experience: [
        "Produced component libraries, style guides, wireframes and prototypes to support clients’ products or website development",
        "Collaborated with Fifteen4’s animation and video departments to create interactive micro sites and landing pages",
      ],
    },
  ],
  education: {
    degree: "BA, Communication",
    school: "University of Maryland, College Park",
  },
};

export default resume;
