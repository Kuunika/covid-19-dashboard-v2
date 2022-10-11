import { create } from "apisauce";

const api = create({ baseURL: "https://covid19.health.gov.mw/api/v1" });

export const searchCertBySignature = async (signature: string) => {
  const response = await api.get(
    `certificates/${encodeURIComponent(signature)}`
  );

  if (response.ok) {
    return response.data;
  }
};
