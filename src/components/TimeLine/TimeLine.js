import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import {
  TimelineContainer,
  TimelineItem,
  TimelineItemContent,
  TimelineItemDot,
  TimelineItemText,
  TimelineItemTitle,
  TimelineItemWrapper,
  TimelineItemIcon,
  SectionTime,
  TimeDivider
} from './TimeLineStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef();

  // const handleClick = (i) => {
  //   setActiveItem(i);
  // }


  useEffect(() => {
    // Check if the screen width is less than 405px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 405);
    };

    // Initial check for mobile on component mount
    handleResize();

    // Add an event listener to detect window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (i) => {
    setActiveItem(i);
  };

  // Only show 2 items on mobile (screen width < 405px)
  const displayedItems = isMobile ? TimeLineData.slice(0, 2) : TimeLineData;

  // useEffect(() => {
  //   // Optionally, reset the active item on resize
  //   const handleResize = () => {
  //     // Any resize logic if needed
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <SectionTime id="about">
      <SectionTitle>De la Idee la Implementare</SectionTitle>
      <SectionText>
      Procesul nostru de dezvoltare a aplicațiilor este conceput să transforme viziunea ta în realitate, asigurându-ne că fiecare etapă este executată cu maximă atenție și profesionalism. Înțelegem importanța detaliilor și a colaborării strânse cu clienții noștri pentru a asigura succesul proiectului. Iată pașii principali pe care îi urmăm în dezvoltarea unei aplicații:
      </SectionText>
      <TimelineContainer ref={carouselRef}>
      {displayedItems.map((item, index) => (
          <TimelineItemWrapper key={index} isOdd={index % 2 !== 0}>
          <TimelineItem
              active={activeItem === index}
              onClick={() => handleClick(index)}
            >
              <TimelineItemIcon active={activeItem === index} />
              <TimelineItemContent>
                <TimelineItemTitle>{item.title}</TimelineItemTitle>
                <TimelineItemText>{item.text}</TimelineItemText>
              </TimelineItemContent>
            </TimelineItem>
          </TimelineItemWrapper>
        ))}
      </TimelineContainer>
      <br />
      {/* <TimeDivider /> */}
    </SectionTime>
  );
};

export default Timeline;
