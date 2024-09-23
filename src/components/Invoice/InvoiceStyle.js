import styled, {keyframes } from 'styled-components';
// Define the pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Container for the text content
export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 0;
  }
`;

// Container for bullet points
export const BulletContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

// Bullet point styles
export const Bullet = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and paragraph vertically */
  align-items: flex-start; /* Aligns bullet points to the start of the text */
  margin-bottom: 20px; /* Space between bullet points */
`;



// Bullet icon
export const BulletIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  margin-bottom: 10px;
  animation: ${pulse} 1.5s infinite; /* Apply the pulsing animation */
`;



// Image styling
export const Image = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 80%;
    margin-top: 20px; /* Space between text and image on smaller screens */
  }
`;

// Bullet title styling
export const BulletTitle = styled.h3`
  font-weight: 600;
  font-size: ${(props) => props.main ? '35px' : '25px'};
  line-height: ${(props) => props.main ? '52px' : '36px'};
  margin-bottom: 10px;
  width: max-content;
`;
