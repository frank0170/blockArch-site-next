import styled, {keyframes} from 'styled-components';

// Animation definitions
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #0F1624;
`;

export const ServiceTitle = styled.h3`
  font-size: 2.5rem; /* Larger title size */
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem; /* Increased gap between items */
  justify-items: center; /* Center items horizontally */
`;

// export const ServiceItem = styled.div`
//   display: flex;
//   flex-direction: column; /* Stack items vertically */
//   align-items: center; /* Center items horizontally */
//   background: #1A2335;
//   padding: 2rem;
//   border-radius: 8px;
//   color: #ffffff;
//   gap: 1rem; /* Space between icon, title, and text */
//   transition: transform 0.3s ease;
//   max-width: 100%;
//   text-align: center; /* Center text content */
  
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1A2335;
  padding: 2rem;
  border-radius: 8px;
  color: #ffffff;
  gap: 1rem;
  transition: transform 0.3s ease;
  max-width: 100%;
  text-align: center;
  opacity: 0;  /* Start invisible */
  transform: translateY(50px); /* Start below */

  /* Animation settings */
  animation: fadeInUp 0.7s ease forwards;
  
  &:hover {
    transform: scale(1.05);
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply a staggered delay to each child */
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
  &:nth-child(6) {
    animation-delay: 1.2s;
  }
`;


export const ServiceIcon = styled.div`
  color: #27debf; /* Purple color for icons */
  font-size: 3.5rem; /* Larger icon size */
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
`;


export const ServiceDescription = styled.p`
  font-size: 1.6rem; /* Larger description size */
  line-height: 1.6;
  color: #d0d0d0;
  margin-top: 0.5rem;
`;


// New styled components for the image-text section
// export const ImageTextSection = styled.div`
//   display: flex;
//   flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
//   align-items: center;
//   gap: 3.5rem;
//   margin: 6rem 0;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;

//   }
// `;

export const ImageTextSection = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 3.5rem;
  margin: 6rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  opacity: 0; /* Start with 0 opacity */
  transform: translateX(50px); /* Initial transform */

  &.visible {
    animation: ${fadeInLeft} 1s ease forwards;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

// export const TextWrapper = styled.div`
//   flex: 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   p {
//     font-size: 1.8rem;
//     color: #d0d0d0;
//   }
// `;

export const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Start with 0 opacity */
  transform: translateX(-50px); /* Initial transform */

  &.visible {
    animation: ${fadeInRight} 1s ease forwards;
  }

  p {
    font-size: 1.8rem;
    color: #d0d0d0;
  }
`;

export const ServiceDivider = styled.hr`
  border: none;
  border-top: 1px solid #d3d3d3; /* Light grey color */
  margin: 3rem 0; /* Space around the line */
  width: 100%; /* Full width */
`; 

export const CallToActionSection = styled.section`
  margin: 4rem 0;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CallToActionBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #0F1624 0%, #1A2335 100%);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  min-height: 110px;
  max-width: 1100px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  // Background animation
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(39,222,191,0.4) 0%, rgba(255,255,255,0) 80%);
    top: -50px;
    right: -100px;
    animation: rotateGradient 6s infinite linear;
    z-index: 1;
  }

  @keyframes rotateGradient {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
`;

export const CallToActionText = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  z-index: 2;
  flex: 1;
`;

export const CallToActionButton = styled.a`
  background-color: #1fbfa7; /* Slightly darker than #27DEBF */
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  z-index: 2;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #1a9c8d; /* Darker on hover */
    transform: scale(1.05);
  }
`;
