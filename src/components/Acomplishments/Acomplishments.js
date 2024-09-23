import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Proiecte Implementate'},
  { number: 30, text: 'Componente Hardware Vandute', },
  { number: 2, text: 'Software-uri Proprii', },
  { number: 10, text: 'Servere Active', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider style={{marginBottom: "30px"}}/>
    <SectionTitle>Realizările Noastre</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
