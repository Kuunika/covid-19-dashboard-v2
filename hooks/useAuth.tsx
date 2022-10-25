import { useState } from "react";

const KEY = "token";

export function useAuth() {
  const [token, setToken] = useState(
    isWindowDefined() && localStorage.getItem(KEY)
  );

  const storeToken = (token: string) => {
    if (isWindowDefined()) {
      localStorage.setItem(KEY, token);
      setToken(token);
    }
  };
  const getToken = () => {
    if (isWindowDefined()) {
      const token = localStorage.getItem(KEY);
      setToken(token);
      return token;
    }
    return "";
  };

  const deleteToken = () => {
    if (isWindowDefined()) {
      localStorage.removeItem(KEY);
      setToken("");
    }
  };

  return { isAuthenticated: Boolean(token), storeToken, deleteToken, getToken };
}

const isWindowDefined = () => (typeof window !== "undefined" ? true : false);
