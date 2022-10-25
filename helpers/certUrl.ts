export const signatureUrl = (signature: string) =>
  `https://covid19.health.gov.mw/api/v1/certificates/${encodeURIComponent(
    signature
  )}?format=pdf`;
