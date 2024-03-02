import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

    //ScrollBar
    *::-webkit-scrollbar {
  width: 3px; 
}
  *::-webkit-scrollbar-track {
    background: transparent; 
}
*::-webkit-scrollbar-thumb {
    background-color: var(--marrom-primario); 
    border-top-right-radius: 50px; 
    border-bottom-right-radius: 50px; 
    padding-top: 1rem;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: var(--marrom-primario); 
  }
  *::-webkit-scrollbar-track-piece:start {
  margin-top: 10px; 
  }
  *::-webkit-scrollbar-track-piece:end {
  margin-bottom: 10px;
  }

  .bg-header {
      background-color: var(--cor-fundo) !important;
    }

    body {
    font-size: ${(props) => props.theme.font.size};
    list-style-type: none;
    background-color: var(--bg-color) !important;
    color: var(--preto-primario) !important;
    font-family: 'Source Sans Pro', sans-serif !important;
  }

:root {
  --branco: ${(props) => props.theme.colors.white};
  --branco-primario: ${(props) => props.theme.colors.whitePrimary};
  --preto: ${(props) => props.theme.colors.black};
  --preto-primario: ${(props) => props.theme.colors.blackPrimary};
  --bg: ${(props) => props.theme.colors.bg};
  --primario: ${(props) => props.theme.colors.primario};
  --secundario: ${(props) => props.theme.colors.secundario};
  --acentuado: ${(props) => props.theme.colors.acentuado};
  --extra: ${(props) => props.theme.colors.extra};
  
  --cor-fonte: var(--branco);
  --cor-fundo: var(--bg);
}
`;
export default GlobalStyle;
