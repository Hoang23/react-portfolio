import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer";
import { motion } from "framer-motion";

const PortfolioProject = (props) => {
  // how to animate when element is in view https://stackoverflow.com/questions/58958972/framer-motion-animate-when-element-is-in-view-when-you-scroll-to-element
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      {props.LeftRight === true ? (
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Project>
            <Summary>
              <TitleDescriptionContainer>
                <h6>{props.Title}</h6> <br />
                <p>{props.Description}</p>
              </TitleDescriptionContainer>

              <MainButtons>
                <ButtonLink1>
                  <a target='_blank' rel='noreferrer' href={props.Link}>
                    Visit
                  </a>
                </ButtonLink1>
              </MainButtons>
            </Summary>
            <Image>
              {" "}
              {/* for some reason only passing image as prop without destructuring works */}
              <img src={props.Image} alt='' />
            </Image>
          </Project>
        </motion.div>
      ) : (
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Project>
            <Image>
              {" "}
              {/* for some reason only passing image as prop without destructuring works */}
              <img src={props.Image} alt='' />
            </Image>
            <Summary>
              <TitleDescriptionContainer>
                <h6>{props.Title}</h6> <br />
                <p>{props.Description}</p>
              </TitleDescriptionContainer>

              <MainButtons>
                <ButtonLink1>
                  <a target='_blank' rel='noreferrer' href={props.Link}>
                    Visit
                  </a>
                </ButtonLink1>
              </MainButtons>
            </Summary>
          </Project>
        </motion.div>
      )}
    </>
  );
};

export default PortfolioProject;

const Project = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  padding-bottom: 3rem;


  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

`;
const Image = styled.div`
  max-width: 50%;
  width: 50%;

  display: flex;

  align-items: center;

  /* border: 1px solid green; */
  img {
    width: 100%;
    min-width: 275px;
    border-radius: 10px;
  }

  // on smaller screens let the image always be on top
  @media (max-width: 768px) {
    order: -1;

    // allow image container to cover the screen again once
    max-width: 100%;
    width: 100%;
  }
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 200px;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
  /* border: 1px solid blue; */

  h6 {
    font-size: 20px;
    color: #7ca29c;
    border-bottom: 2px solid #a58d94;
    border-bottom-width: 5px;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const TitleDescriptionContainer = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

const MainButtons = styled.div`
  /* margin-top: 1rem; */
  /* display: flex; */
`;

const ButtonLink1 = styled.div`
  a {
    color: white;
    text-decoration: none; // remove underline from anchor tag
    border: 2px solid;
    border-color: #7ca29c;
    background: #7ca29c;

    border-radius: 50px;
    margin-right: 2rem;
    font-size: 16px;

    padding: 0.2rem 28px;

    cursor: pointer;
  }
`;
