import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

export const NavBarStyle = styled(Navbar)`
  background-color: var(--cor-fundo) !important;
  color: var(--cor-fonte);

  .navBotao {
    margin-left: 0.313rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-toggler {
    background-color: white;
  }

  .navbar-brand {
    color: var(--cor-fonte);
  }

  .dropdown-toggle {
    color: var(--cor-fonte);
  }

  .dropdown-toggle:focus {
    color: var(--extra);
  }

  .navDrops {
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 992px) {
    .navDrops {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .dropdown-menu {
    text-align: center;
    min-width: 100px;
  }

  .navLink {
    margin-left: 100px;
  }

  .navForm {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    min-width: 37.5rem;
    gap: 5px;
  }
`;
