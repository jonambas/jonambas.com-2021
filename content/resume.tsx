import React from "react";

const resume = {
  meta: {
    name: "Jon Ambas",
    email: "jon@jonambas.com",
  },
  jobs: [
    {
      company: "SparkPost (MessageBird)",
      positions: [
        {
          position: "Lead UX Engineer",
          startDate: "June 2019",
          endDate: "Present",
          experience: [
            "Work closely with product managers and designers to define, understand and clarify goals and product requirements",
            <>
              Design, build, and maintain{" "}
              <a href="https://github.com/SparkPost/matchbox">Matchbox</a>, a
              design system, saving SparkPost 4,100 design hours and 9,500
              engineering hours per year
            </>,
            "Anticipate how product decisions and aspects of the design system affect the design, engineering and user experience",
            "Manage projects, planning and scheduling for frontend engineering and design teams",
            "Produce prototypes to support the research, design, development and testing of new product features",
            "Provide technical mentorship and guidance to frontend and UX engineers",
          ],
        },
        {
          position: "Front End Engineer",
          startDate: "October 2016",
          endDate: "June 2019",
          experience: [
            "Worked within a distributed team of engineers responsible for SparkPost's React web application",
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
        "Produced wireframes and prototypes using Sketch, Invision, and After Effects",
        "Designed and created branding concepts, logos, and style guides",
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
