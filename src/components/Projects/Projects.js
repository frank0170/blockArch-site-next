import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section  id="projects">
    <SectionDivider />
    <SectionTitle main>Proiectele Noastre</SectionTitle>
    <SectionText>
      Aceste proiecte reprezintă soluțiile noastre ERP.
    </SectionText>
    <GridContainer>
      {projects.slice(0, 2).map((p, i) => (
        <BlogCard key={i} onClick={() => window.location.href = p.visit}>
          <Img src={p.image} alt={p.title} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            {/* <TitleContent>Stack</TitleContent> */}
            <TagList>
              {p.tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer">Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
