import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';

// Keyframes for text animations
const textAppearance = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const textDisappearance = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

// Preloader styling
const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(150deg, rgba(15,22,36,1) 0%, rgba(11,16,50,1) 52%, rgba(5,7,34,1) 100%);
  overflow: hidden;
  z-index: 9999;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 2s ease-out;
`;

const LoaderHeading = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  gap: 5px;
`;

const LoadText = styled.div`
  display: flex;
  font-size: 45px;
  font-weight: 200;
  letter-spacing: 15px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 5vw;
  }

  @media (max-width: 480px) {
    font-size: 6vw;
  }
`;

const Span = styled.span`
  animation: ${props => (props.isAppearing ? textAppearance : textDisappearance)} 1s forwards;
  animation-delay: ${props => props.delay};
`;

// Preloader component
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const checkIfMobile = () => {
      return window.innerWidth <= 768; // Consider devices with screen width <= 768px as mobile
    };
    
    setIsMobile(checkIfMobile());

    // Set scroll position to the top when component is mounted
    if (!isMobile) {
      window.scrollTo(0, 0);

      // Check if the preloader has been shown already in this session
      const hasShownPreloader = sessionStorage.getItem('preloaderShown');

      if (!hasShownPreloader) {
        // Show preloader only on initial load
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('preloaderShown', 'true'); // Store that preloader has been shown
        }, 3500); // Adjust the duration as needed

        return () => clearTimeout(timer);
      } else {
        // Skip preloader if it's already been shown
        setIsLoading(false);
      }
    } else {
      setIsLoading(false); // Skip preloader on mobile devices
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isLoading && !isMobile) {
      // Ensure that the page stays at the top when preloader is finished
      window.scrollTo(0, 0);
    }
  }, [isLoading, isMobile]);

  return (
    !isMobile && isLoading && (
      <PreloaderWrapper isLoading={isLoading}>
        <LoaderHeading>
          <LoadText>
            <Span isAppearing={isLoading} delay="0s">L</Span>
            <Span isAppearing={isLoading} delay="0.1s">O</Span>
            <Span isAppearing={isLoading} delay="0.2s">A</Span>
            <Span isAppearing={isLoading} delay="0.3s">D</Span>
            <Span isAppearing={isLoading} delay="0.4s">I</Span>
            <Span isAppearing={isLoading} delay="0.5s">N</Span>
            <Span isAppearing={isLoading} delay="0.6s">G</Span>
          </LoadText>
        </LoaderHeading>
      </PreloaderWrapper>
    )
  );
};

export default Preloader;
