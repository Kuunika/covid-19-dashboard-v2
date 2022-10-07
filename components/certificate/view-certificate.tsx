import { Box, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BasicButton from "../common/button";
import BasicModal from "../common/modal";
import colors from "../../themes/siteColors";
import { useRouter } from "next/router";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ViewCertificate() {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function onDocumentLoadSuccess({ numPages }: any) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setNumPages(numPages);
  }

  const Certificate = () => (
    <Document
      file="/sample-certificate.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} width={matchSM ? 300 : 600} />
    </Document>
  );

  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <BasicButton
          onClick={() => {
            router.push("/sample-certificate.pdf");
          }}
          sx={{
            // backgroundColor: "#E8E8E8",
            // color: colors.primaryColor,
            borderRadius: "1px",
            // "&:hover": { backgroundColor: "#E8E8E8" },
            mb: "5px",
            selfAlign: "left",
          }}
          title="download"
          size="small"
        />

        <Certificate />
      </Box>
      <BasicModal open={loading} message={"pdf loading"} />
    </Box>
  );
}
