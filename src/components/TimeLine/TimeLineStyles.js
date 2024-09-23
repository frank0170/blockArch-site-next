import styled from 'styled-components';
import { RiSendPlane2Line } from "react-icons/ri";

export const TimelineContainer = styled.div`
  /* max-width: 800px; */
  width: 100%;
  /* margin: 0 auto; */
  padding: 2rem;
  background: #0F1624;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100vh;
  align-items: flex-start;
  
  /* Center the timeline container */


`;
export const SectionTime = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  /* @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  } */

 /* For medium-sized screens */
 @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr; /* Switch to single column */
    padding: 24px 24px 0;
    flex-direction: column;

    /* Add extra height and adjust padding */
    min-height: 100vh; /* Adjusted height */
    gap: 2rem; /* Ensure proper spacing */
  }

  /* For small-sized screens */
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
    grid-template-columns: 1fr; /* Single column */
    margin-bottom: 2rem;
    /* Add more height and adjust padding */
    min-height: 120vh; /* Adjusted height */
    gap: 2rem; /* Ensure proper spacing */
  }


  /* & > *:last-child {
    margin-bottom: 0rem; 
  } */

  /* @media (max-width: 390px) {
    min-height: 166vh;
  }

  @media (min-width: 340px) and (max-width: 362px) {
    min-height: 176vh;
  }

  
  @media (min-width: 321px) and (max-width: 340px) {
    min-height: 186vh;
  }



  @media (max-width: 320px) {
    min-height: 196vh;
  } */

  

    /* @media (min-width: 362px) and (max-width: 400px) {
      min-height: 150vh;

    }

    @media (min-width: 342px) and (max-width: 361px) {
      min-height: 150vh;

    }

    @media (min-width: 337px) and (max-width: 341px) {
      min-height: 185vh;

    }

    @media (min-width: 320px) and (max-width: 336px) {
      min-height: 170vh;

    } */

`

// export const SectionTime = styled.section`
//   display: flex;
//   flex-direction: ${(props) => (props.row ? "row" : "column")};
//   padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
//   margin: 0 auto;
//   max-width: 1040px;
//   box-sizing: border-box;
//   position: relative;
//   overflow: hidden;
//   min-height: 100vh; /* Use viewport height units for a minimum height */
  
//   /* Medium-sized screens */
//   @media ${(props) => props.theme.breakpoints.md} {
//     flex-direction: column;
//     padding: 24px 24px 0;
//     min-height: 100vh; /* Ensure section grows with content */
//   }

//   /* Small-sized screens */
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
//     width: calc(100vw - 32px);
//     min-height: 100vh; /* Ensure section grows with content */
//   }

//   /* Ensure no content overflow */
//   overflow: hidden;
//   box-sizing: border-box;
// `;


export const TimeDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }

  @media (max-width: 401px) {
  
    display: none;
  
}

  
`

export const TimelineItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
`;

export const TimelineItem = styled.div`
  background: #0E131F;
  border-radius: 5px;
  max-width: 100%;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 400px) {
    max-width: 300px; 
  }

`;

// export const TimelineItemDot = styled.div`
//   width: 20px;
//   height: 20px;
//   background: ${(props) => props.active ? '#d4c0c0' : '#6b3030'};
//   border-radius: 50%;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   /* left: -10px; */
//   transition: background 0.3s ease-in-out;
// `;

export const TimelineItemIcon = styled(RiSendPlane2Line)`
  font-size: 20px;
  color: ${(props) => (props.active ? '#d4c0c0' : '#6b3030')};
  position: absolute;
  top: 16.5%;
  left: 10px; /* You can adjust this for alignment */
  transform: translateY(-50%);
  transition: color 0.3s ease-in-out;
`;


export const TimelineItemContent = styled.div`
  margin-left: ${(props) => (props.isOdd ? '0' : '40px')};
  margin-right: ${(props) => (props.isOdd ? '40px' : '0')};
  width: 100%;
`;

export const TimelineItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

export const TimelineItemText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.5rem;
  /* max-width: 500px; */
  width: 80%;
`;
