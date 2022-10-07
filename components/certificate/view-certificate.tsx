import { Box } from "@mui/material";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BasicModal from "../common/modal";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ViewCertificate() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: any) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setNumPages(numPages);
  }

  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Document
        file="/sample-certificate.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <BasicModal open={loading} message={"pdf loading"} />
    </Box>
  );
}
