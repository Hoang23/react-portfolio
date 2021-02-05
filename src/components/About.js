import React from 'react'
import styled from 'styled-components'
const About = () => {
    return (
        <>
        <Container>
            <AboutSection id="about-section">
                <Title><p>About</p></Title> 

                <Text>
                    <p>Hello I'm <span>Hoang</span>, a lifelong learner from <span>Melbourne</span> who loves exploring things that are technical and creative. I have a range of experience within IT and currently have an interest in both frontend and backend. </p> <br/>

                    <p>Right now, I am learning React so that I can create complex web applications. This website itself is built with React and is currently undergoing continuos change. A feature I am looking to implement is a toggle to switch between light and dark mode. </p> <br/>

                    <p>You can find out more about me, my experience and skills on my <a href="http://hoangh.netlify.com">blog</a> as I share random things that I'm interested in.</p>
                </Text>
            </AboutSection>
        </Container>
    </>
    )
}

export default About

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AboutSection= styled.div`
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

const Text = styled.div`
    text-align: center;

    
    span {
        
        &:nth-of-type(1) {
            font-weight: 700;
        }

        &:nth-of-type(2) {
            color: #7CA29C;
            
        }
    }

    a{
        color: #A58D94;
    }
`;