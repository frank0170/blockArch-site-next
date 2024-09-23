import React from "react";
import { SectionTitle, SectionText, Section } from '../../styles/GlobalComponents';
import { TextContainer, BulletContainer, Bullet, BulletIcon, BulletTitle } from "./InvoiceStyle";

const Invoice = () => (
  <Section>
    <TextContainer>
      <SectionTitle main>
        From the big picture to every tiny detail, we got you covered.
      </SectionTitle>
      <BulletContainer>
        <Bullet>
          <BulletIcon color="#FF5733" />
          <BulletTitle>Pentru Dezvoltatori</BulletTitle>
          <SectionText>
          Dezvoltam proiectele cu o atenție deosebită la nevoile și cerințele dezvoltatorilor, creând astfel soluții care le optimizează fluxul de lucru și le facilitează munca creativă.
          </SectionText>
        </Bullet>
        <Bullet>
          <BulletIcon color="#33FF57" />
          <BulletTitle>Pentru Designeri</BulletTitle>
          <SectionText>
          De asemeea abordăm construirea proiectelor cu o focalizare deplină asupra nevoilor designerilor, creând soluții care le permit să-și exprime creativitatea și să ofere experiențe vizuale remarcabile.
          </SectionText>
        </Bullet>
        <Bullet>
          <BulletIcon color="#3357FF" />
          <BulletTitle>Pentru Echipe</BulletTitle>
          <SectionText>
          Nu lasam deoparte in construirea proiectelor si nevoile echipelor, oferind soluții personalizate care facilitează colaborarea eficientă, comunicarea fluidă și maximizarea productivității."
          </SectionText>
        </Bullet>
      </BulletContainer>
    </TextContainer>

  </Section>
);

export default Invoice;
