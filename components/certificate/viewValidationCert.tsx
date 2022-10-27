import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { humanReadableDate } from "../../helpers/dates";
import { getDosages } from "../../helpers/getDoses";
import { ICertificate, IDosageIndicator } from "../../interfaces";

type IProp = {
  certificate: ICertificate;
};

export function ViewValidationCert({ certificate }: IProp) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { dosages, boosterShots } = getDosages(certificate.dosageIndicators);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: matchesSM ? "100vh" : 600,
        overflow: "auto",
      }}
    >
      <Image src={"/check.png"} height={80} width={80} />
      <Typography variant={matchesSM ? "caption" : "body1"} color={"black"}>
        Name
      </Typography>
      <Typography
        variant={matchesSM ? "body1" : "h5"}
        color={"black"}
      >{`${certificate.firstname} ${certificate.lastname}`}</Typography>
      <Typography variant={matchesSM ? "caption" : "body1"} color={"black"}>
        Birth date
      </Typography>
      <Typography variant={matchesSM ? "body1" : "h5"} color={"black"}>
        {humanReadableDate(certificate.birthdate)}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: `${matchesSM ? "column" : "row"}`,
        }}
      >
        {dosages.map((dosage: IDosageIndicator) => {
          return (
            <DosageIndicatorBox key={dosage.dosageNumber} dosage={dosage} />
          );
        })}
      </Box>
      {boosterShots.length ? (
        <>
          <Box>
            {boosterShots.map((shot: IDosageIndicator) => {
              if (matchesSM) {
                return (
                  <DosageIndicatorBox key={shot.dosageNumber} dosage={shot} />
                );
              }

              return (
                <Box
                  key={shot.dosageNumber}
                  sx={{
                    border: "2px solid #092008",
                    borderRadius: "10px",
                    mt: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                    }}
                  >
                    <Typography variant="h5" color={"#092008"}>
                      Booster Dose
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <BoxRow label="site" value={shot.vaccinationSite} />
                      <BoxRow
                        label="date"
                        value={humanReadableDate(shot.vaccinationDate)}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <BoxRow label="name" value={shot.vaccineName} />
                    <BoxRow label="type" value={shot.type} />
                    <BoxRow label="batch number" value={shot.batchNumber} />
                    <BoxRow
                      label="expiration"
                      value={humanReadableDate(shot.expirationDate)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </>
      ) : null}
    </Box>
  );
}

type IBoxRow = {
  label: string;
  value: string | number;
};

const BoxRow = ({ label, value }: IBoxRow) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        padding: matchesSM ? "0" : "2px",
        margin: matchesSM ? "0" : "2px",
      }}
    >
      <Typography
        sx={{ mr: "4px", textTransform: "capitalize" }}
        variant={matchesSM ? "caption" : "body2"}
        color="black"
      >
        {label}:
      </Typography>
      <Typography variant={matchesSM ? "caption" : "body2"} color="black">
        {value}
      </Typography>
    </Box>
  );
};

const DosageIndicatorBox: FC<{ dosage: IDosageIndicator }> = ({ dosage }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4px",
        margin: "4px",
      }}
    >
      <Box sx={{ padding: "4px" }}>
        <>
          <Typography variant={matchesSM ? "body1" : "h6"}>
            Dose {dosage.dosageNumber}
          </Typography>
          <Typography variant="caption">
            Vaccination Date: {humanReadableDate(dosage.vaccinationDate)}
          </Typography>
        </>
      </Box>
      <BoxRow label="name" value={dosage.vaccineName} />
      <BoxRow label="type" value={dosage.type} />
      <BoxRow label="batch" value={dosage.batchNumber} />
      <BoxRow label="site" value={dosage.vaccinationSite} />
      <BoxRow
        label="expiration"
        value={humanReadableDate(dosage.expirationDate)}
      />
    </Paper>
  );
};
