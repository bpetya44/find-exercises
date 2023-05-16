import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/icon-3.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Icon} alt="logo" width="200px" height="40px" />
        <Typography
          variant="body1"
          color="#9c27b0"
          textAlign="center"
          pb="40px"
          mt="20px"
        >
          © 2021 All rights reserved. Made with ❤️ by{" "}
          <a href="https://bpetya.me/" target="_blank" rel="noreferrer">
            Petya
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
