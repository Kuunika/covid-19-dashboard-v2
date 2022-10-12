import { Box, Paper, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { johndoe } from "../constants/certdata";
import { getDosages } from "../helpers/getDoses";
import { IDosageIndicator } from "../interfaces";
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

  const dosages = getDosages(johndoe.dosageIndicators).dosages;
  const boosterShots = getDosages(johndoe.dosageIndicators).boosterShots;

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
          variant="h5"
          color={"black"}
        >{`${johndoe.firstname} ${johndoe.lastname}`}</Typography>
        <Typography variant="body1" color={"black"}>
          Birth date
        </Typography>
        <Typography variant="h5" color={"black"}>
          {johndoe.birthdate}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {dosages.map((dosage: IDosageIndicator) => {
            return <DosageIndicatorBox dosage={dosage} />;
          })}
        </Box>
      </Box>
    </>
  );
}

type IBoxRow = {
  label: string;
  value: string | number;
};
const BoxRow = ({ label, value }: IBoxRow) => {
  return (
    <Box sx={{ display: "flex", padding: "2px", margin: "2px" }}>
      <Typography
        sx={{ mr: "4px", textTransform: "capitalize" }}
        variant="body1"
        color="black"
      >
        {label}:
      </Typography>
      <Typography variant="body1" color="black">
        {value}
      </Typography>
    </Box>
  );
};

const DosageIndicatorBox: FC<{ dosage: IDosageIndicator }> = ({ dosage }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4px",
        margin: "1px",
      }}
    >
      <Box sx={{ padding: "4px" }}>
        <>
          <Typography variant="h5">Dose {dosage.dosageNumber}</Typography>
          <Typography variant="caption">
            Vaccination Date: {dosage.vaccinationDate}
          </Typography>
        </>
      </Box>
      <BoxRow label="name" value={dosage.vaccineName} />
      <BoxRow label="type" value={dosage.type} />
      <BoxRow label="batch" value={dosage.batchNumber} />
      <BoxRow label="site" value={dosage.vaccinationSite} />
      <BoxRow label="expiration" value={dosage.expirationDate} />
    </Paper>
  );
};
