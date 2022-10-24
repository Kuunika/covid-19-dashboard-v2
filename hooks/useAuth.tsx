import { useState } from "react";

const KEY = "token";

export function useAuth() {
  const [token, setToken] = useState(
    isWindowDefined() && localStorage.getItem(KEY)
  );

  const storeToken = (token: string) => {
    if (isWindowDefined()) {
      localStorage.setItem(KEY, token);
    }
  };

  const deleteToken = () => {
    if (isWindowDefined()) {
      localStorage.removeItem(KEY);
    }
  };

  return { isAuthenticated: Boolean(token), storeToken, deleteToken };
}

const isWindowDefined = () => (typeof window !== "undefined" ? true : false);
