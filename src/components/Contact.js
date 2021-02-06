import React from 'react'
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
const Contact = () => {
    return (
        <>
            <Container>
                <ContactSection id="contact-section">
                    <Title><p>Contact</p></Title> 

                    <Email > hoanghh9623@gmail.com </Email>

                    <Icons>
                            <a target="_blank" rel="noreferrer" href="https:///github.com/hoang23">
                            <FaGithub fill="black" size="32px"/>
                            </a> 
                    </Icons>

                </ContactSection>
            </Container>
        </>
    )
}

export default Contact

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContactSection= styled.div`
    max-width: 1000px;
    margin: 1.2rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    p {
        color: #7CA29C;
        font-weight: 400;
        font-size: 26px;
    }
`;

const Email = styled.div`
    font-weight: 500;
    font-size: 20px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;

    

    a {
        padding-top: 1rem;
    }

    
`;