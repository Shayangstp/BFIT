import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ bodyPart, setBodypart, setExrcises, item, title }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2526" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",

        gap: "47px",
      }}
    >
      <img src={Icon} alt="Icon" style={{ width: "40px", height: "40xp" }} />

      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
