import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { ValidationModal } from "../components/certificate/certModals";
import { ICertificate, IDosageIndicator } from "../interfaces";
import { searchCertBySignature } from "../services/api";

export default function () {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState({} as ICertificate);

  const handleModalClose = () => {
    setOpen(false);
    setCertificate({} as ICertificate);
  };
  const handleScan = async (result, error) => {
    if (!result) return;

    let response;

    if (!!result) {
      try {
        const signature = result.text.split("?sg=")[1];
        setLoading(true);
        setOpen(true);
        response = await searchCertBySignature(signature);
        setLoading(false);
        setCertificate(response.data as ICertificate);
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
        loading={loading}
        certificate={certificate}
        onClose={handleModalClose}
      />
    </>
  );
}
