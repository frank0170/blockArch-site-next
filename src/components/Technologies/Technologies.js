import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, SubParagf, SubTitle, Checklist, ChecklistItem, CheckIcon } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tehnologii</SectionTitle>
    <SectionText>
      Avem experiență cu diferite tehnologii de ultimă generație
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js,
            NextJs,
            CSS, 
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, ExpressJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
    <SubTitle>Platforme modulare</SubTitle>
    <SectionText>Dezvoltam platforme si sisteme modulare, integrate cu API-uri deja existente sau pe care le dezvoltam la cerere. Integrari cu programe institutionale/licentiate.</SectionText>
    <Checklist>
      <ChecklistItem><CheckIcon /> Statistici si rapoarte</ChecklistItem>
      <ChecklistItem><CheckIcon /> Desktop/Web App</ChecklistItem>
      <ChecklistItem><CheckIcon /> API's</ChecklistItem>
      <ChecklistItem><CheckIcon /> Gestiune inventar</ChecklistItem>
    </Checklist>
    <br />
    <br />
    <SectionDivider colorAlt />

  </Section>
);

export default Technologies;
