import { Box, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BasicButton from "../common/button";

import colors from "../../themes/siteColors";
import { useRouter } from "next/router";
import { LoadingModal } from "./certModals";
import { signatureUrl } from "../../helpers/certUrl";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type IProps = {
  signature: any;
};
export default function ViewCertificate({ signature }: IProps) {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function onDocumentLoadSuccess({ numPages }: any) {
    setLoading(false);
    setNumPages(numPages);
  }

  const Certificate = () => (
    <Document
      file={{
        url: signatureUrl(signature),
      }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} width={matchSM ? 300 : 500} />
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
        <Link href={signatureUrl(signature)}>
          <a target="_blank">
            <BasicButton
              sx={{
                borderRadius: "1px",

                mb: "5px",
                selfAlign: "left",
              }}
              title="download"
              size="small"
            />
          </a>
        </Link>

        <Certificate />
      </Box>

      <LoadingModal open={loading} message={"pdf loading"} />
    </Box>
  );
}
