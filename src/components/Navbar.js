import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import Toggledark from "../components/Toggledark";

const Navbar = ({ toggle, theme, toggleTheme }) => {
  return (
    <>
      <Nav>
        <Container>
          <LogoIcon
            to='introduction-section'
            spy={true}
            smooth={true}
            offset={-90}
            duration={1000}
          >
            Hoang
            <span>HH</span>
          </LogoIcon>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <Menu>
            <LinksWrapper>
              <NavItem>
                <NavLinks
                  to='about-section'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >
                  {" "}
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='portfolio-section'
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1000}
                >
                  {" "}
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='contact-section'
                  spy={true}
                  smooth={true}
                  offset={200}
                  duration={1000}
                >
                  {" "}
                  Contact
                </NavLinks>
              </NavItem>
              <Toggledark theme={theme} toggleTheme={toggleTheme} />
            </LinksWrapper>
          </Menu>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 3;

  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1); // shadow under nav
`;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap; /* to wrap downwards on smaller screen size */
  margin: 1.2rem; // margin to give burger and logo space on the sides
`;

//tmp
const LogoIcon = styled(LinkS)`
  font-weight: 600;
  font-size: 20;
  color: #7ca29c;
  cursor: pointer;

  display: flex;
  flex-direction: row;

  span {
    color: #fa976e;
  }

  img {
    width: 45%;
    z-index: -99;
  }
`;

// only display when desktop mode
const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

// each individual item
const NavItem = styled.div`
  padding: 0px 1.9rem;
`;

const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;

  font-size: 0.95rem;
  transition: all 0.1s ease-in;
  cursor: pointer;

  /* bounce and highlight on hover */
  &:hover {
    transform: translateY(-5px);
    color: #7ca29c;
  }
`;
