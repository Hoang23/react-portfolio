import React from 'react'
import styled from "styled-components"
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

// import { createStore } from 'react-hooks-global-state';


const Sidebar = ({toggle, isOpen }) => {


    return (
        <>
       
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}> 
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about-section' spy={true} smooth={true} offset={-90} duration={500} onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to='portfolio-section' spy={true} smooth={true} offset={-90} duration={500} onClick={toggle}>
                            Portfolio
                        </SidebarLink>
                        <SidebarLink to='contact-section' spy={true} smooth={true} offset={-90} duration={500} onClick={toggle}>
                            Contact
                        </SidebarLink>
                    </SidebarMenu>

                        {/* <SideBtnWrap> 
                            <SidebarLogo to='/signin'> Sign In </SidebarLogo>
                        </SideBtnWrap>  */}

                </SidebarWrapper>
            </SidebarContainer>

        
            
        </>
    )
}

export default Sidebar


const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999; // above everything, no matter where i click the sidebar is going to be clickable
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items:  center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; // Opacity is 100% if true
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; // this is for the effect

    // return to to desktop mode if greater than 768px
    @media (min-width: 768px) {
        display: none;
    }

`;

const CloseIcon = styled(FaTimes)` // FaTiems = x
    height: 20px;
    width: 20px;
    
`;

const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const SidebarWrapper = styled.div`
    color: #000;
`;

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,60px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6 ,60px);
    }
`;

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;


    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

// export const SideBtnWrap = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// later on change to light/dark mode
// export const SidebarLogo = styled.div`
//     border-radius: 50px;
//     background: #A58D94;
//     white-space: nowrap;
//     padding: 16px 64px;
//     color: #01bf71;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
// `;