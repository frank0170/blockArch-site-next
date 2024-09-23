import React from 'react';
import { StepContainer, StepIcon, StepContent, StepTitle, StepParagraph, StepsWrapper, StepIcon1, StepIcon2, StepIcon3 } from './IntroStyles';
import { SectionTitle, SectionText, Section, SectionDivider } from '../../styles/GlobalComponents';

const IntroSectionComponent = () => (
  <Section>
    <SectionTitle main>Creat Exclusiv pentru Tine</SectionTitle>
    <SectionText>
      Transformă viziunile clienților în realitate, construind proiecte personalizate care se bazează pe nevoile lor.
    </SectionText>
    <StepsWrapper>
      <StepContainer>
        <StepIcon>
          <StepIcon1 />
        </StepIcon>
        <StepContent>
          <StepTitle>1. Planificare</StepTitle>
          <StepParagraph>
            Analiza si audit tehnic al companiei, realizand un plan bazat pe nevoile curente.
          </StepParagraph>
        </StepContent>
      </StepContainer>
      <StepContainer>
        <StepIcon>
          <StepIcon2 />
        </StepIcon>
        <StepContent>
          <StepTitle>2. Achizitie</StepTitle>
          <StepParagraph>
            Achizitia, dezvoltarea si configurarea echipamentelor propuse in plan.
          </StepParagraph>
        </StepContent>
      </StepContainer>
      <StepContainer>
        <StepIcon>
          <StepIcon3 />
        </StepIcon>
        <StepContent>
          <StepTitle>3. Integrare</StepTitle>
          <StepParagraph>
            Integrarea sistemelor/programelor la sediul companiei.
          </StepParagraph>
        </StepContent>
            </StepContainer>
        </StepsWrapper>
        <br />
        <br />
        
    </Section>
  
);

export default IntroSectionComponent;
