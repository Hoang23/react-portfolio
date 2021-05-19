import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import image from "../assets/code_thinking.svg";
import { Link as LinkS } from "react-scroll";
import { motion } from "framer-motion";
import blob from "../assets/blob_5-3-5.svg";

const Intro = () => {
  return (
    <>
      <Container>
        <IntroductionSection id='introduction-section'>
          <Text>
            <MeText>
              <p>
                Hello, <br />
                I'm <span>Hoang</span>
              </p>
            </MeText>

            <WhatText>
              <p>Developer</p>
              <p>Forever Student</p>
            </WhatText>
            <MainButtons>
              <ButtonLink1
                to='about-section'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                {" "}
                About{" "}
              </ButtonLink1>
              <ButtonLink2>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://drive.google.com/file/d/1Q-qoNygDiehCsVHNZT5kQpK3xM9xslU6/view?usp=sharing'
                >
                  Resume
                </a>
              </ButtonLink2>
            </MainButtons>
          </Text>

          <Right>
            <motion.div
              animate={{ y: [-200, 80, -30, 0] }}
              transition={{ delay: 0.3, duration: 1.2 }}
            >
              <TiltWrapper options={{ max: 25 }}>
                <img src={image} alt='' />
              </TiltWrapper>
            </motion.div>
          </Right>
        </IntroductionSection>
      </Container>

      <Blob>
        <motion.div
          animate={{
            y: [0, -100, 50, -30, 20, 90, -40],
            x: [-250, 100, 250, -100, 220, -150, -300],
            rotate: 180,
          }}
          transition={{ yoyo: Infinity, duration: 30 }}
        >
          <img src={blob} alt='' />
        </motion.div>
      </Blob>
    </>
  );
};

export default Intro;

const Right = styled.div`
  margin-left: 10%;
  margin-top: -17%;
`;

const TiltWrapper = styled(Tilt)`
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

  @media (max-width: 768px) {
    display: inline;
  }
`;

const IntroductionSection = styled.div`
  max-width: 1000px;
  height: calc(100vh - 65px);

  display: flex; // to put the text and image child containers side by side
  margin: 1.2rem; // give space on the sides to even up with nav space
  display: flex;
  align-items: center;
`;

// left container
const Text = styled.div`
  max-width: 1000px;
`;

const MeText = styled.div`
  margin-left: 0.4rem;
  font-size: 60px;

  p {
    margin-top: -80%;
    font-weight: 200;
  }
  span {
    color: #7ca29c;
    font-weight: 500;
  }
`;

const WhatText = styled.div`
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

const ButtonLink1 = styled(LinkS)`
  border: 2px solid;
  border-color: #7ca29c;
  background: #7ca29c;

  border-radius: 50px;
  margin-right: 2rem;
  font-size: 16px;

  padding: 0.2rem 28px;

  cursor: pointer;

  color: white;
`;

const ButtonLink2 = styled.div`
  margin-top: 6px;

  a {
    color: #7ca29c;
    text-decoration: none;
    border: 2px solid #7ca29c;
    border-radius: 50px;
    margin-right: 2rem;
    padding: 0.2rem 28px;
    cursor: pointer;
  }
`;

const Blob = styled.div`
  width: 550px;
  position: absolute;
  top: 90%;
  z-index: -99;
  opacity: 0.8;
`;
