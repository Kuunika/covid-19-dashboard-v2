import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { searchCertBySignature } from "../services/api";

export default function () {
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
      console.log(certificate);

      return;
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <>
      <QrReader onResult={handleScan} />
    </>
  );
}
