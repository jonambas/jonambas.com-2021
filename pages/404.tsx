import React from "react";
import { Box } from "@sweatpants/box";
import { Stack } from "@sweatpants/stack";
import Head from "../components/Head";
import SmallCardLink from "../components/SmallCardLink";
import { ArrowLeftIcon } from "../components/icons";

export default function NotFound() {
  return (
    <>
      <Head title="404" />
      <Box as="main" textAlign="center">
        <Stack>
          <p>Page not found</p>

          <div>
            <SmallCardLink href="/" type="internal">
              <Box display="flex" alignItems="center">
                <ArrowLeftIcon />
                <Box as="span" px="200">
                  Back to jonambas.com
                </Box>
              </Box>
            </SmallCardLink>
          </div>
        </Stack>
      </Box>
    </>
  );
}
