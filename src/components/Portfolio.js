import React from 'react'
import styled from 'styled-components';
import project3 from '../assets/keyboardUI.PNG'
import project2 from '../assets/blog-projects.png'
import project1 from '../assets/studios.PNG'

const Portfolio = () => {
    return (
        <>  
            <Container >
                <PortfolioSection id="portfolio-section">
                    <Title><p>Portfolio</p></Title> 
                    <Projects >

                        <Project>
                            <Image> <img src={project3} alt=""/></Image>
                            <Summary>
                                <h6>UI Designs</h6> <br/>
                                <p>Figma</p>

                                <MainButtons>
                                    <ButtonLink1 >
                                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1HDPsA9Nfv02oPVOEX0lODsMsmOG4iJzD/view?usp=sharing">Visit</a> 
                                    </ButtonLink1>
                                </MainButtons>
                            </Summary>
                            
                        </Project>
                            <br/> 
                        <Project>
                            <Summary>
                                <h6>Blog</h6> <br/>
                               
                                <p>Hugo - Markdown</p>
                                <MainButtons>
                                    <ButtonLink1>
                                        <a target="_blank" rel="noreferrer" href="https://hoangh.com">Visit</a> 
                                    </ButtonLink1>
                                    {/* <ButtonLink2>
                                        <a target="_blank" rel="noreferrer" href="https://google.com">Source</a> 
                                    </ButtonLink2> */}
                                </MainButtons>
                                
                            </Summary>
                            <Image> <img src={project2 } alt=""/></Image>
                        </Project> <br/>

                        <Project>
                            <Image> <img src={ project1} alt=""/></Image>
                            <Summary>
                                <h6>Imperium Studios</h6> <br/>
                                <p>Wordpress (Elementor, Themes, Plugins) - HTML - CSS</p>

                                <MainButtons>
                                    <ButtonLink1 >
                                        <a target="_blank" rel="noreferrer" href="https://imperiumgg.com">Visit</a> 
                                    </ButtonLink1>
                                </MainButtons>
                            </Summary>
                        </Project>

                    </Projects>
                </PortfolioSection>
            </Container>
           
        </>
    )
}

export default Portfolio


// this container is needed to set the max-width on introductionsection class for alignment
const Container = styled.div`
    padding-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;

    /* width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0; */
    
`;

const PortfolioSection= styled.div`
    /* border: 1px solid black; */
    max-width: 1000px;
    margin: 1.2rem;
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 8rem;

    p {
        color: #7CA29C;
        font-weight: 400;
        font-size: 26px;
    }
    
`;
const Projects = styled.div`
    /* border: 1px solid red;    */
    
`;
const Project = styled.div`
    /* border: 1px solid green; */
    display: flex;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        /* margin-left: -15%; */
        flex-wrap: wrap; 
        /* flex-direction: column; */
    }

    
`;
const Image = styled.div`
    max-width: 50%; 
    width: 50%;
    
    display: flex;
        
        
        align-items: center;
    

    

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
    /* border: 1px solid grey; */

    width: 50%;
    margin-left: 2.2rem;
    margin-right: 2.2rem;
    margin-top: 5%;

    
    h6 {
        font-size: 20px;
        color: #7CA29C;
        border-bottom: 2px solid #A58D94;
        border-bottom-width: 5px;
        

    }

`;




const MainButtons = styled.div`
    margin-top: 15%;
    display: flex;
`;
    

const ButtonLink1= styled.div`
    

    a{
        color: white;
        text-decoration: none; // remove underline from anchor tag
        border: 2px solid;
        border-color: #7CA29C;
        background: #7CA29C;

        border-radius: 50px;
        margin-right: 2rem;
        font-size: 16px;

        padding: 0.2rem 28px;

        cursor: pointer;
    }

`;

// const ButtonLink2= styled.div`

//     a {
//         border: 2px solid;
//         border-color: #7CA29C;
//         border-radius: 50px;
//         margin-right: 2rem;
//         font-size: 16px;
//         padding: 0.2rem 28px;
//         cursor: pointer;
//         color: #7CA29C;
//         text-decoration: none;
//     }
    
// `;