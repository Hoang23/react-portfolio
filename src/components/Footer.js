import React from 'react'
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'

const Footer = () => {
    return (
        <FooterContainer>
            <LogoIcon to='introduction-section' spy={true} smooth={true} offset={-90} duration={500}> Hoang<span>HH</span> </LogoIcon> @2021
        </FooterContainer>
        
        
    )
}

export default Footer

const FooterContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
`;

const LogoIcon = styled(LinkS)`
    
    font-weight: 600;
    color: #7CA29C;
    cursor: pointer;

    span {
        color: #A58D94;
    }
`;

