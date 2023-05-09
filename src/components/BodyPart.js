import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/icon-1.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      
      justifyContent={{ xs: "center", lg: "space-between" }}
      alignItems={{ xs: "center"}}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF0000" : "none",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "280px",
        height: "170px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, behavior: "smooth" });
      }
      
      }
    >
      <img
        src={Icon}
        alt="icon"
        style={{ width: "50%", height: "50%", objectFit: "cover", marginTop: "20px" }}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#9c27b0" textTransform='uppercase'>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
