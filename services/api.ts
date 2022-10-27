import { create } from "apisauce";

const api = create({ baseURL: "https://covid19.health.gov.mw/api" });

export const searchCertBySignature = async (signature: string) => {
  const response = await api.get(
    `v1/certificates/${encodeURIComponent(signature)}`
  );

  if (response.ok) return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await api.post("auth/local", {
    identifier: username,
    password,
  });

  if (response.ok) return response.data;
};

export const fetchDashboards = async (token: string) => {
  const response = await api.get(
    "dashboards",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.ok) return response.data;
};

export const fetchCertificate = async (epiNo: string) => {
  return formaResponse(
    await api.post("v1/certificates", {
      epiNo,
    })
  );
};
export const fetchCertificateWithSignature = async (signature: string) => {
  return formaResponse(await api.get(`v1/certificates/${signature}`));
};
const formaResponse = (response: any) => {
  if (response.ok) return { status: 200, data: response.data };
  return { status: response.status, data: response.data.message };
};
