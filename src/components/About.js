import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Container>
        <AboutSection id='about-section'>
          <Title>
            <p>About</p>
          </Title>

          <Text>
            <p>
              Hello I'm <span>Hoang</span>, a lifelong learner from{" "}
              <span>Melbourne</span> who loves exploring technical and creative
              endeavours. This webpage is built with React and is mainly
              dedicated to frontend development.
            </p>{" "}
            <br />
            <p>
              You can find out more about me, my experience and skills on my{" "}
              <a href='http://hoangh.netlify.com'>blog</a> as I share random
              things that I'm interested in.
            </p>
          </Text>
        </AboutSection>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutSection = styled.div`
  max-width: 1000px;
  margin: 1.2rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  p {
    color: #7ca29c;
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
      color: #fa976e;
    }
  }

  a {
    color: #fa976e;
  }
`;
