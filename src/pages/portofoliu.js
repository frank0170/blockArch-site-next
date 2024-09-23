import React from 'react';
import { Layout } from '../layout/Layout';
import { ServiceSection } from '../components/Services/ServicesStyles';
import { SectionTitle, SectionText } from '../styles/GlobalComponents';
import { PortfolioSection, PortfolioTitle, PortfolioGrid, ProjectCard, ProjectImage, ProjectContent, ProjectTitle, ProjectDescription, TechIcons, TechIcon, CTAButton, CTASection, CTAArrow, CTAButtonText, CTAButtonWrapper, CTAContent,   } from '../components/Projects/PortofoliuStyles';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaCss3Alt  } from 'react-icons/fa';
import { TbBrandRedux } from "react-icons/tb";
import { FaArrowRight } from 'react-icons/fa'; // Use an icon for the button

const portfolioData = [
    {
      title: 'Smarty ERP',
      description: 'Smarty ERP este o soluție completă pentru gestionarea inventarului, locațiilor și flotei de vehicule. Optimizează operațiunile și oferă vizibilitate totală asupra tuturor resurselor afacerii.',
      imageUrl: '/images/ssma.png',
      techLinks: [
        { icon: <FaReact />, url: 'https://reactjs.org/' },
        { icon: <FaNodeJs />, url: 'https://nodejs.org/' },
        { icon: <FaDatabase />, url: 'https://www.mongodb.com/' },
        { icon: <FaCss3Alt />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      ],
      source: 'https://smarty-erp.ro/',
      visit: 'https://smarty-erp.ro/',
    },
    {
      title: 'AiPos Cloud ERP - Launching Soon',
      description: 'AiPos Cloud este o soluție inovatoare pentru managementul sistemelor POS viitoare, oferind stocare în cloud și funcționalități avansate pentru comerțul de detaliu.',
      imageUrl: '/images/aipos.png',
      techLinks: [
        { icon: <FaCloud />, url: 'https://cloud.google.com/' },
        { icon: <FaReact />, url: 'https://reactjs.org/' },
        { icon: <TbBrandRedux />, url: 'https://redux.js.org/' },
      ],
      source: 'https://google.com',
      visit: 'https://google.com',
    },
  ];

const Portofoliu = () => {
  return (
    <Layout>
      <ServiceSection>
        <br />
        <SectionTitle style={{marginTop: "30px"}}>
          Proiectele Noastre
        </SectionTitle>
        <SectionText>
        Acestea sunt proiectele BlockArch, dezvoltate pentru clienții noștri într-un sistem ERP personalizat, adaptat perfect la nevoile lor specifice.
        </SectionText>

        <PortfolioSection>
          <PortfolioTitle>Our ERP Softwares</PortfolioTitle>
          <PortfolioGrid>
            {portfolioData.map((project, index) => (
              <a href={project.visit} target="_blank" rel="noopener noreferrer" key={index}>
                <ProjectCard>
                  <ProjectImage src={project.imageUrl} alt={project.title} />
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TechIcons>
                      {project.techLinks.map((tech, techIndex) => (
                        <TechIcon key={techIndex} href={tech.url} target="_blank" rel="noopener noreferrer">
                          {tech.icon}
                        </TechIcon>
                      ))}
                    </TechIcons>
                  </ProjectContent>
                </ProjectCard>
              </a>
            ))}
          </PortfolioGrid>
        </PortfolioSection>

        <CTASection>
          <CTAContent>
            <h2>Interesat să Lucrezi cu Noi?</h2>
            <p>Contactează-ne astăzi pentru a începe proiectul tău sau pentru a afla mai multe despre serviciile noastre!</p>
          </CTAContent>
          <CTAButtonWrapper href="/contact" aria-label="Contact Us">
            <CTAButtonText>Contact Us</CTAButtonText>
            <CTAArrow />
          </CTAButtonWrapper>
        </CTASection>
      </ServiceSection>
    </Layout>
  );
};

export default Portofoliu;
