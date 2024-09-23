import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const GradientButton = styled.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  text-decoration: none;
  margin: 0.75rem;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  background: ${(props) =>
    props.gradient === 'purple'
      ? 'linear-gradient(135deg, #9c4d9a 0%, #27DEBF 100%)'
      : 'linear-gradient(135deg, #27DEBF 0%, #9c4d9a 100%)'};
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    padding: 1rem 2.5rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;
