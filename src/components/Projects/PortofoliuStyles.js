// import styled from 'styled-components';

// export const PortfolioSection = styled.section`
//   padding: 4rem 2rem;
//   background: #0F1624; /* Matches your existing background */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const PortfolioTitle = styled.h2`
//   color: #ffffff;
//   font-size: 2.5rem;
//   margin-bottom: 1rem;
//   text-align: center;
//   background: linear-gradient(121.57deg, #27DEBF 10%, rgba(255, 255, 255, 0.66) 30.15%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   @media (max-width: 768px) {
//     font-size: 2rem; /* Adjust font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 1.5rem; /* Adjust font size for small screens */
//   }
// `;

// export const PortfolioGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
//   max-width: 1200px;
//   width: 100%;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* Single column for medium screens */
//   }
// `;

// export const ProjectCard = styled.div`
//   background: #1A2335;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   position: relative;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
//   }
// `;

// export const ProjectImage = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
// `;

// export const ProjectContent = styled.div`
//   padding: 1rem;
//   color: #ffffff;
// `;

// export const ProjectTitle = styled.h3`
//   font-size: 1.8rem;
//   margin-bottom: 0.5rem;
//   color: #27DEBF;

//   @media (max-width: 768px) {
//     font-size: 1.5rem; /* Adjust font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 1.2rem; /* Adjust font size for small screens */
//   }
// `;

// export const ProjectDescription = styled.p`
//   font-size: 1.4rem;
//   line-height: 1.6;
//   color: rgba(255, 255, 255, 0.75);

//   @media (max-width: 768px) {
//     font-size: 1.2rem; /* Adjust font size for medium screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 1rem; /* Adjust font size for small screens */
//   }
// `;

import styled from 'styled-components';
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa'; // Import necessary icons
import { FaArrowRight } from 'react-icons/fa';

export const PortfolioSection = styled.section`
  padding: 6rem 2rem; /* Increased padding for more space */
  background: #0F1624;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioTitle = styled.h2`
  color: #ffffff;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(121.57deg, #27DEBF 10%, rgba(255, 255, 255, 0.66) 90.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 2.2rem; /* Adjust font size for small screens */
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust grid for responsiveness */
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 369px) {
    grid-template-columns: 1fr; /* Use a single column layout for screens <= 369px */
    padding: 0 1rem; /* Adjust padding to center the cards */
  }

  @media (max-width: 320px) {
    padding: 0 0.5rem; /* Smaller padding for tiny screens */
  }
`;

export const ProjectCard = styled.div`
  background: #1A2335;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  padding: 1rem;
`;

export const ProjectContent = styled.div`
  padding: 1rem;
  color: #ffffff;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #27DEBF;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Adjust font size for small screens */
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Adjust font size for small screens */
  }
`;

export const TechIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TechIcon = styled.a`
  color: #9c4d9a; /* Icon color */
  font-size: 2.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.2); /* Scale up on hover */
    color: #ffffff;
  }
`;



export const CTAButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #9c4d9a, #27DEBF); /* Gradient from purple to green */
  color: #ffffff;
  width: 60px; /* Square button size */
  height: 60px;
  border-radius: 10px;
  font-size: 24px; /* Adjust icon size */
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slightly scale up on hover */
    background: linear-gradient(135deg, #27DEBF, #9c4d9a); /* Reverse gradient on hover */
  }

  @media (max-width: 768px) {
    width: 50px; /* Adjust size for smaller screens */
    height: 50px;
    font-size: 20px; /* Adjust icon size */
  }

  @media (max-width: 480px) {
    width: 40px; /* Further adjust size for small screens */
    height: 40px;
    font-size: 16px; /* Adjust icon size */
  }
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a2335, #0F1624); /* Darker background for contrast */
  position: relative;
  overflow: hidden;

  /* Add an animated background effect */


`;

export const CTAContent = styled.div`
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const CTAButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #9c4d9a, #27DEBF); /* Gradient from purple to green */
  color: #ffffff;
  width: 250px; /* Adjust width as needed */
  padding: 15px;
  border-radius: 10px;
  font-size: 18px; /* Adjust font size */
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
    background: linear-gradient(135deg, #27DEBF, #9c4d9a); /* Reverse gradient on hover */
  }
`;

export const CTAButtonText = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const CTAArrow = styled(FaArrowRight)`
  font-size: 24px; /* Adjust icon size */
  transition: transform 0.3s ease;
  
  ${CTAButtonWrapper}:hover & {
    transform: translateX(5px) rotate(15deg); /* Animate arrow on hover */
  }
`;