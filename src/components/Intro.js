import React from 'react'
import styled from 'styled-components';
import Tilt from 'react-tilt'
import image from '../assets/code_thinking.svg'
import {Link as LinkS} from 'react-scroll'

const Intro = () => {
    return (
        <>
            <Container>
                <IntroductionSection id="introduction-section" >
                    <Text >
                        <MeText >
                            <p>
                                Hello, <br/>
                                I'm <span>Hoang</span>
                            </p>
                        </MeText>
                        
                        <WhatText >
                            <p>Developer</p>
                            <p>Designer</p>
                        </WhatText>
                        <MainButtons>
                            <ButtonLink1 to='about-section' spy={true} smooth={true} offset={-90} duration={500}> About </ButtonLink1>
                            <ButtonLink2>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Q-qoNygDiehCsVHNZT5kQpK3xM9xslU6/view?usp=sharing">Resume</a> 
                            </ButtonLink2>
                        </MainButtons>
                    </Text >
                    
                    <Right>
                        <TiltWrapper options={{ max: 25 }}>
                            <img src={image} alt=""/>
                        </TiltWrapper> 
                    </Right>
                </IntroductionSection>
            </Container>
        </>
            
    
    )
}

export default Intro

// cant i just do this on the tilt wrapper?
const Right = styled.div`
    /* border: 1px solid purple; */
 
    margin-left: 10%;
    margin-top: -17%;
`;

const TiltWrapper = styled(Tilt)`
    /* border: 1px solid green; */
    @media (max-width: 768px) {
        display: none;
    }

    img {
        width: 100%;
    }

`;

// this container is needed to set the max-width on introductionsection class for alignment
const Container = styled.div`
    // this section allows the content to evenly move up when the page height is resized
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    /* border: 1px solid blue; */
    @media (max-width: 768px) {
        /* Turn off flex. The initial value of display is inline, so display: initial is equivalent to display: inline. */
        display: inline;
    }
    
`;



const IntroductionSection = styled.div`
    width: 100%;
    max-width: 1000px;
    height: calc(100vh - 65px);
    /* max-height: calc(100vh - 65px); // 65px for navbar */
    /* border: 1px solid red;  */
    

    display: flex; // to put the text and image child containers side by side

    margin: 1.2rem; // give space on the sides to even up with nav space
   
    
    // moves the section up when scrolled
    display: flex;
    align-items: center;
    
`;

// left container
const Text = styled.div`
    /* border: solid pink; */
    max-width: 1000px;
    
    /* height: 100%; */


    /* width: 100%;  (this messes up the responsiveness once the image disappears*/ 
    /* font-size: 35px; */

    /* @media (max-width: 670px) {
        width: calc(100% - 170%);
    } */
    
`;

const MeText = styled.div`
    
    /* border: solid;
    border-color: yellow; */
    
    margin-left: 0.4rem;
    font-size: 60px;
    

    p {
        margin-top: -80%;
        font-weight: 200;
        
    }
    span {
        color: #7CA29C;
        font-weight: 500;
    }
`;

const WhatText = styled.div`
    /* border: solid; */
    /* border-color: blue; */
    
    margin-top: 1rem;
    font-size: 16px;

    p {
        padding-top: 12px;
    }
`;

const MainButtons = styled.div`
    margin-top: 16%;
    display: flex;
`;
    

const ButtonLink1= styled(LinkS)`
    border: 2px solid;
    border-color: #7CA29C;
    background: #7CA29C;

    border-radius: 50px;
    margin-right: 2rem;
    font-size: 16px;

    padding: 0.2rem 28px;

    cursor: pointer;
    
    color: white;

`;

const ButtonLink2= styled.div`
   
    margin-top: 6px; // fix allignment issue due to css being in anchor tag compared to button 1
    
    
    a {
        color: #7CA29C;
        text-decoration: none;
        border: 2px solid #7CA29C;
        border-radius: 50px;
        margin-right: 2rem;
        padding: 0.2rem 28px;
        cursor: pointer;
    }

`;