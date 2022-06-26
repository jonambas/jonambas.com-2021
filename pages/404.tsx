import React from "react";
import { Box } from "@sweatpants/box";
import { Stack } from "@sweatpants/stack";
import Head from "../components/Head";
import CardLink from "../components/CardLink";
import ArrowLeftIcon from "../components/ArrowLeftIcon";

export default function NotFound() {
  return (
    <>
      <Head title="404" />
      <Box as="main" textAlign="center">
        <Stack>
          <p>Page not found</p>

          <div>
            <CardLink href="/" type="internal" p="300" display="inline-block">
              <CardLink.Description>
                <Box display="flex" alignItems="center">
                  <ArrowLeftIcon />
                  <Box as="span" px="200">
                    Back to jonambas.com
                  </Box>
                </Box>
              </CardLink.Description>
            </CardLink>
          </div>
        </Stack>
      </Box>
    </>
  );
}
