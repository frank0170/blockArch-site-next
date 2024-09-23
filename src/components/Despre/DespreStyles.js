import styled, { keyframes } from 'styled-components';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TimelineSection = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  padding: 4rem 1rem; /* Increased padding */
  @media (max-width: 768px) {
    padding: 2rem 1rem; /* Smaller padding for mobile */
  }
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Single column for vertical timeline */
  gap: 4rem; /* Increased gap between timeline items */
  position: relative;
  padding-left: 4rem; /* Increased padding for more space */

  @media (max-width: 768px) {
    padding-left: 2rem; /* Reduced padding on mobile */
  }

  /* Vertical line */
  &:before {
    content: '';
    position: absolute;
    left: 75px; /* Adjusted for more space */
    top: 0;
    bottom: 0;
    width: 4px;
    background: #9c4d9a;
    border-radius: 4px;
    @media (max-width: 768px) {
      left: 40px; /* Adjusted for mobile */
    }
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 75px auto; /* Icon on the left, content on the right */
  gap: 1.5rem; /* More space between icon and content */
  align-items: center;
  position: relative;
  animation: ${fadeIn} 0.8s ease-in-out forwards; /* Adding animation */
  opacity: 0; /* Initially hidden */

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

  /* Vertical connecting line */
  &:before {
    content: '';
    position: absolute;
    left: 75px; /* Adjusted for more space */
    top: 0;
    height: 100%;
    width: 4px;
    background: #1a2335;
    @media (max-width: 768px) {
      left: 40px; /* Adjusted for mobile */
    }
  }

  &:last-child:before {
    background: none; /* Remove line for the last item */
  }
`;

export const TimelineIcon = styled.div`
  background-color: #1A2335;
  color: #9c4d9a;
  width: 75px; /* Bigger icon */
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2rem; /* Larger icon size */
  z-index: 1;

  @media (max-width: 768px) {
    width: 50px; /* Smaller icon on mobile */
    height: 50px;
    font-size: 1.5rem; /* Smaller font for mobile */
  }
`;

export const TimelineContent = styled.div`
  h3 {
    color: #ffffff;
    font-size: 2rem; /* Larger title font size */
    margin-bottom: 0.75rem;
    @media (max-width: 768px) {
      font-size: 1.6rem; /* Slightly smaller font for mobile */
    }
  }

  p {
    color: #d0d0d0;
    font-size: 1.6rem;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 1.4rem; /* Adjusted font size for mobile */
    }
  }
`;



export const TeamSection = styled.section`
  padding: 4rem 2rem;
  background-color: #0F1624;
  display: flex;
  justify-content: center;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 3 columns on larger screens, single column on smaller */
  gap: 3rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 342px) {
    grid-template-columns: 1fr; /* Single column layout for very small screens */
    padding: 0 1rem; /* Reduce side padding for smaller screens */
  }

  @media (max-width: 320px) {
    padding: 0 0.5rem; /* Even smaller padding for tiny screens */
  }
`;

export const TeamCard = styled.div`
  background-color: #1A2335;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px); /* Slight hover effect */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const TeamIcon = styled.div`
  font-size: 4rem;
  color: #27DEBF;
  margin-bottom: 1.5rem;
`;

export const TeamContent = styled.div`
  color: #ffffff;
`;

export const TeamName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const TeamRole = styled.h4`
  font-size: 1.4rem;
  color: #9c4d9a;
  margin-bottom: 1rem;
`;

export const TeamDescription = styled.p`
  font-size: 1.4rem;
  color: #d0d0d0;
  line-height: 1.6;
`;