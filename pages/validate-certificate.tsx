import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { johndoe } from "../constants/certdata";
import { searchCertBySignature } from "../services/api";

export default function () {
  useEffect(() => {
    console.log(johndoe);
  }, []);
  const handleScan = async (result, error) => {
    if (!result) return;
    let certificate;
    if (!!result) {
      try {
        const jsonData = JSON.parse(result);
        certificate = await searchCertBySignature(jsonData.signature);
      } catch (error) {
        const signature = result?.text.split("?sg=")[1];
        certificate = await searchCertBySignature(signature);
      }
      return;
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30ch",
        }}
      >
        <Typography variant="body1" color={"black"}>
          Name
        </Typography>
        <Typography
          variant="h4"
          color={"black"}
        >{`${johndoe.firstname} ${johndoe.lastname}`}</Typography>
        <Typography variant="body1" color={"black"}>
          Birth date
        </Typography>
        <Typography variant="h4" color={"black"}>
          {johndoe.birthdate}
        </Typography>
      </Box>
    </>
  );
}
