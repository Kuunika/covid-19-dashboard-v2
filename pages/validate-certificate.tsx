import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { ValidationModal } from "../components/certificate/certModals";
import { ICertificate, IDosageIndicator } from "../interfaces";
import { searchCertBySignature } from "../services/api";

export default function () {
  const [open, setOpen] = useState(false);
  const [certificate, setCertificate] = useState({} as ICertificate);

  const handleModalClose = () => {
    setOpen(false);
    setCertificate({});
  };
  const handleScan = async (result, error) => {
    if (!result) return;

    let response;

    if (!!result) {
      try {
        const signature = result.text.split("?sg=")[1];
        response = await searchCertBySignature(signature);
        setCertificate(response as ICertificate);
        setOpen(true);
      } catch (error) {}
      return;
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <>
      <QrReader onResult={handleScan} />
      <ValidationModal
        open={open}
        loading={false}
        certificate={certificate}
        onClose={handleModalClose}
      />
    </>
  );
}
