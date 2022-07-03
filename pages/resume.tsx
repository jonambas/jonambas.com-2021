import React from "react";
import { Box } from "@sweatpants/box";
import Head from "../components/Head";
import { ArrowLeftIcon, DownloadIcon } from "../components/icons";
import Footer from "../components/Footer";
import SmallCardLink from "../components/SmallCardLink";
import resume from "../content/resume";
import meta from "../content/meta";

function Experience(props) {
  return (
    <Box as="ul">
      {props.experience.map((item, i) => (
        <Box as="li" mb="400" lineHeight="1.4em" key={i}>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export default function Resume() {
  return (
    <Box maxWidth="620px">
      <Head title="Jon Ambas' Resume" description={meta.description} />
      <Box mb="800" display="flex" style={{ gap: "1rem" }}>
        <SmallCardLink href="/" type="internal">
          <Box display="flex" alignItems="center">
            <ArrowLeftIcon />
            <Box as="span" px="200">
              Back
            </Box>
          </Box>
        </SmallCardLink>
        <SmallCardLink
          type="external"
          href="/JonAmbas-Resume-2022.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Box display="flex" alignItems="center">
            <DownloadIcon />
            <Box as="span" px="200">
              Download PDF
            </Box>
          </Box>
        </SmallCardLink>
      </Box>

      <Box as="h1" mb="800">
        {resume.meta.name}
      </Box>

      <Box mb="800">
        {resume.jobs.map((job, i) => {
          return (
            <Box mb="800" key={i}>
              <Box as="h4" mb="100">
                {job.positions
                  ? `${job.positions[0].position}, `
                  : `${job.position}, `}
                {job.company}
              </Box>
              {job.positions ? (
                job.positions.map((position, i) => {
                  return (
                    <Box my="600" key={i}>
                      <Box mb="100">{position.position}</Box>
                      <Box mb="500">
                        <Box fontSize="0.9em" as="em">
                          {position.startDate} – {position.endDate}
                        </Box>
                      </Box>
                      <Experience experience={position.experience} />
                    </Box>
                  );
                })
              ) : (
                <Box>
                  <Box mb="500">
                    <Box fontSize="0.9em" as="em">
                      {job.startDate} – {job.endDate}
                    </Box>
                  </Box>
                  <Experience experience={job.experience} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <div>
        <Box mb="200">{resume.education.degree}</Box>
        <div>{resume.education.school}</div>
      </div>
      <Footer />
    </Box>
  );
}
