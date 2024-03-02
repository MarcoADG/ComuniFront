import { api } from "./ApiConnection";

import { jwtDecode } from "jwt-decode";

const LoginService = async (username, password) => {
  var tokenDecodificado = null;

  try {
    const resposta = await api.post("/login/signin", {
      username: username,
      password: password,
    });
    //console.log("resposta", resposta.data.accessToken);
    if (!!resposta.data.accessToken) {
      tokenDecodificado = jwtDecode(resposta.data.accessToken);
      tokenDecodificado["token"] = resposta.data.accessToken;
      //console.log("token", tokenDecodificado);
      // api.defaults.headers[
      //   "Authorization"
      // ] = `Bearer ${resposta.data.accessToken}`;

      return tokenDecodificado;
    }
  } catch (error) {}
};

export { LoginService };
