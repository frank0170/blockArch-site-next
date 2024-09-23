import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, GradientButton, ButtonContainer, HomeSection } from './HeroStyles';

const Hero = (props) => (
  <HomeSection row nopadding>
    <LeftSection>
      <SectionTitle main center>
        We're here <br />
        for the long run
      </SectionTitle>
      <SectionText>
        O companie de dezvoltare software cu 4 ani de excelență în afaceri, putem dezvolta soluții software fiabile, scalabile și sigure pentru orice sistem de operare, browser și dispozitiv.
      </SectionText>
      <ButtonContainer>

    
<GradientButton
    href="mailto:contact@example.com"
    gradient="purple"
    onClick={props.handleClick}
  >
    Cere o Ofertă
  </GradientButton>
  <GradientButton
    href="/doc/Brosura.pdf"
    gradient="green"
    download
  >
    Broșură
  </GradientButton>
  </ButtonContainer>
    </LeftSection>

  </HomeSection>
);

export default Hero;
