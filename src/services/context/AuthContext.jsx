import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../api/ApiConnection";
import { LoginService } from "../api/ApiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    apelido: "",
    role: "",
    token: "",
  });
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const respostaServiceLogin = await LoginService(username, password);
      if (!respostaServiceLogin) {
        logOut();
      }
      //console.log("resposta", respostaServiceLogin);
      setUser({
        id: respostaServiceLogin?.userId,
        apelido: respostaServiceLogin?.apelido,
        role: respostaServiceLogin?.cargo,
        token: respostaServiceLogin?.token,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: respostaServiceLogin?.userId,
          apelido: respostaServiceLogin?.apelido,
          role: respostaServiceLogin?.cargo,
          token: respostaServiceLogin?.token,
        })
      );
      setAuth(true);
      setToken(respostaServiceLogin?.token);
      localStorage.setItem("token", respostaServiceLogin?.token);
      return true;
    } catch (error) {
      logOut();
    }
  };

  const logOut = () => {
    setToken("");
    setAuth(false);
    localStorage.clear();
  };

  const isAuthenticated = async () => {
    var tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      var tokenDecoded = jwtDecode(tokenLocal);

      try {
        api.defaults.headers["Authorization"] = `Bearer ${tokenLocal}`;
        // TODO Alterar para requisição de validação do token
        await api.get(`usuario/${tokenDecoded.Id}`);
        setAuth(true);
      } catch (error) {
        logOut();
        console.log(error);
      }
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        login,
        logOut,
        isAuthenticated,
        user,
        auth,
        token,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
