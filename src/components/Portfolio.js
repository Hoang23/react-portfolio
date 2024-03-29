import React from "react";

import styled from "styled-components";
import project3 from "../assets/keyboardUI.PNG";
// import project2 from "../assets/blog-projects.png";
import project1 from "../assets/studios.PNG";
// import project4 from "../assets/chooseOne.PNG";
import project5 from "../assets/RealNews.PNG";
import project6 from "../assets/NoteTaking.PNG";
import project7 from "../assets/signInLanding.PNG";
import project8 from "../assets/login-internal.png";
import PortfolioProject from "./PortfolioProject";

const Portfolio = () => {
  return (
    <>
      <Container>
        <PortfolioSection id='portfolio-section'>
          <Title>
            <p>Portfolio</p>
          </Title>
          <SubTitle>
            <p>
              Webapps with interactivity and functionality such as
              authentication, CRUD operations, integration with API's etc...
            </p>
          </SubTitle>
          <Projects>
            <PortfolioProject
              Title='Notes App'
              Description='React - HTML/CSS - Javascript - Material UI - Jest'
              Link='https://ikanotes.netlify.app'
              Image={project6}
              LeftRight={false}
            />

            {/* <PortfolioProject
              Title='Blog'
              Description='Hugo - Markdown'
              Link='https://hoangh.netlify.app/'
              Image={project2}
              LeftRight={false}
            /> */}

            <PortfolioProject
              Title='True Story'
              Description='React - Reddit API - HTML/CSS - JavaScript - Styled-Components'
              Link='https://true-story.netlify.app/'
              Image={project5}
              LeftRight={true}
            />
          </Projects>
          <SubTitle>
            <p>Simple websites, designs and animation etc...</p>
          </SubTitle>
          <Projects>
            <PortfolioProject
              Title='Task Box - Signin Landing'
              Description='Quick practice making shapes with css and animating them with Framer-motion'
              Link='https://tasksbox.netlify.app/'
              Image={project7}
              LeftRight={false}
            />

            <PortfolioProject
              Title='Imperium Studios'
              Description='An old Wordpress (Elementor, Themes, Plugins) site with hundreds of hits per month for an amatuer esport organisation'
              Link='https://imperiumgg.com'
              Image={project1}
              LeftRight={true}
            />


            <PortfolioProject
              Title='Responsive Login Page'
              Description='A landing page was required for an internal hr system. References were used to come up with a simplistic design to match the branding of the NFP foundation'
              Link='https://foxg1-hr.netlify.app/'
              Image={project8}
              LeftRight={false}
            />

            
            <PortfolioProject
              Title='Website Prototype & Wireframe Design'
              Description='Figma'
              Link='https://www.figma.com/file/tJZUXvU19g6KgV0OyEZXuR/Hoang-Huynh-Works?node-id=0%3A1'
              Image={project3}
              LeftRight={true}
            />
          </Projects>
        </PortfolioSection>
      </Container>
    </>
  );
};

export default Portfolio;

// this container is needed to set the max-width on introductionsection class for alignment
const Container = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PortfolioSection = styled.div`
  max-width: 1000px;
  margin: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;

  p {
    color: #7ca29c;
    font-weight: 400;
    font-size: 26px;
  }
`;

const SubTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;

  p {
    color: #7ca29c;
    margin-bottom: 2rem;
  }
`;

const Projects = styled.div``;
