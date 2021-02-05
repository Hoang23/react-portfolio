import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'

const Navbar = ({ toggle }) => {
   
  
    return (
        <>
            <Nav>
                <Container>       
                    <LogoIcon to='introduction-section' spy={true} smooth={true} offset={-90} duration={500}> Hoang.dev </LogoIcon>
                    <HamburgerIcon onClick={toggle}> 
                        <FaBars />
                    </HamburgerIcon>

                    <Menu>
                        <LinksWrapper>
                            <NavItem>
                                <NavLinks to='about-section' spy={true} smooth={true} offset={-90} duration={500}> About</NavLinks>
                            </NavItem>  
                            <NavItem>
                            {/* <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li> */}
                                <NavLinks to='portfolio-section' spy={true} smooth={true} offset={-90} duration={500}> Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact-section' spy={true} smooth={true} offset={200} duration={500}> Contact</NavLinks>
                            </NavItem>
                            
                        </LinksWrapper>
                    </Menu>
                </Container> 
            </Nav>
        </>
    )
}

export default Navbar

const Nav = styled.div`
    width: 100%;
    height: 65px;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; // needed to flex hamburger menu downwards
    position: sticky;
    top: 0;
    z-index: 3;

    
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1); // shadow under nav
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap; /* to wrap downwards on smaller screen size */

    /* margin: auto; */
    /* padding: 2rem;  */

    margin: 1.2rem; // margin to give burger and logo space on the sides
  
    /* border: 2px solid black; */

`;

//tmp
const LogoIcon = styled(LinkS)`
    /* width: 30px;
    height: 30px;
    background: #A58D94; */

    font-weight: 600;
    font-size: 20;
    color: #A58D94;
    cursor: pointer;
`;

// only display when desktop mode
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* background: red;  for testing */

    // do not show the menu (instead the hamburger is shown)
    @media (max-width: 768px) {
        display: none;
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
    
`;

const HamburgerIcon= styled.div`
    display:none;
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
    

    font-size: .95rem;
    transition: all 0.1s ease-in;
    cursor: pointer;

    /* bounce and highlight on hover */
    &:hover {
        transform: translateY(-5px);
        color: #7CA29C;
    }
`;


