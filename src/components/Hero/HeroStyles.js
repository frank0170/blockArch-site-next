import styled from 'styled-components';

export const HomeSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    /* padding: 24px 48px 0; */
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    text-align: center; */
    
    /* margin: 0 auto; */
  }



`;

export const ButtonContainer = styled.div`


  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    justify-content: center;
    
    
    
    
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    /* margin-left: 2rem; */
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
    font-size: 1.3rem;
    padding: 1rem 2.5rem;
    margin: 1rem;
   
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;
