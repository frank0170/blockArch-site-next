import styled from 'styled-components';
import { FaRegCalendarAlt, FaMoneyBill , FaRegMap } from 'react-icons/fa'; // Example icons, replace as needed

export const StepsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between; /* Distribute space evenly */
  align-items: flex-start; /* Align items to the start */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 100%;
  gap: 32px; /* Add space between each step */

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 16px; /* Reduce gap on smaller screens */
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1; /* Allow flexibility to grow/shrink */
  padding: 0 16px;
`;

export const StepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StepParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const StepIcon1 = styled(FaRegCalendarAlt)``;
export const StepIcon2 = styled(FaMoneyBill)``;
export const StepIcon3 = styled(FaRegMap)``;