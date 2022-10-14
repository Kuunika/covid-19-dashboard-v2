import { Box, Typography, Paper } from "@mui/material";
import { FC } from "react";
import { humanReadableDate } from "../../helpers/dates";
import { getDosages } from "../../helpers/getDoses";
import { ICertificate, IDosageIndicator } from "../../interfaces";

type IProp = {
  certificate: ICertificate;
};

export function ViewValidationCert({ certificate }: IProp) {
  const { dosages, boosterShots } = getDosages(certificate.dosageIndicators);
  return (
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
      >{`${certificate.firstname} ${certificate.lastname}`}</Typography>
      <Typography variant="body1" color={"black"}>
        Birth date
      </Typography>
      <Typography variant="h5" color={"black"}>
        {humanReadableDate(certificate.birthdate)}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {dosages.map((dosage: IDosageIndicator) => {
          return (
            <DosageIndicatorBox key={dosage.dosageNumber} dosage={dosage} />
          );
        })}
      </Box>
      {boosterShots.length ? (
        <>
          <Box>
            {boosterShots.map((shot: IDosageIndicator) => (
              <Box
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
                    // backgroundColor: "#DCE7DD",
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
            ))}
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
  return (
    <Box sx={{ display: "flex", padding: "2px", margin: "2px" }}>
      <Typography
        sx={{ mr: "4px", textTransform: "capitalize" }}
        variant="body2"
        color="black"
      >
        {label}:
      </Typography>
      <Typography variant="body2" color="black">
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
