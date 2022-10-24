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

  console.log(response.data);

  if (response.ok) return response.data;
};
