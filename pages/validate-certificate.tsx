import { Box, Paper, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { ValidationModal } from "../components/certificate/certModals";
import { johndoe } from "../constants/certdata";
import { ICertificate } from "../interfaces";
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
      <ValidationModal
        open={true}
        loading={false}
        certificate={johndoe as ICertificate}
      />
    </>
  );
}
