import React from 'react';
import { Layout } from '../layout/Layout';
import { ServiceSection } from '../components/Services/ServicesStyles';
import { SectionTitle, SectionText } from '../styles/GlobalComponents';
import { TimelineSection, TimelineGrid, TimelineItem, TimelineIcon, TimelineContent } from '../components/Despre/DespreStyles';
import { FaLaptopCode, FaBuilding, FaAward, FaRocket, FaHandsHelping } from 'react-icons/fa';  // Importing icons
import { TeamSection, TeamGrid, TeamCard, TeamIcon, TeamContent, TeamName, TeamRole, TeamDescription } from '../components/Despre/DespreStyles';
import { FaUserCircle } from 'react-icons/fa';
const timelineData = [
    {
      icon: <FaBuilding />,
      title: 'InvestNetwork a fost fondat in Arad, Romania.',
      description: 'Fondat in 2020, un start-up care avea ca scop creearea de site-uri si platforme web.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Dezvoltarea punctelor de lucru in orase noi, Timisoara, Romania.',
      description: 'Prima extindere a companiei, ajungand la un numar de 5 developeri.',
    },
    {
      icon: <FaAward />,
      title: 'Proiectul BlockArch prinde contur',
      description: 'Castigam primele proiecte de fonduri nerambursabile pentru a dezvolta compania.',
    },
    {
      icon: <FaRocket />,
      title: 'Colaborari',
      description: 'Colaborarea si fuziunea cu diferite firma de consultanta/contabilitate pentru dezvoltarea de proiecte pentru fonduri europene si primii clienti mari.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Workstations marca BlockArch',
      description: 'Anul 2024, inceputul departamentului de creat workstations si echipamenete tehnologice custom.',
    },
];
  
const teamData = [
    { name: 'Alexandru Tut', role: 'Full Stack Developer', description: 'CO Founder of the AiPos Cloud App' },
    { name: 'Frank Andreas', role: 'CTO & Founder', description: 'Leading the tech team with innovative solutions.' },
    { name: 'Frank Diana', role: 'Product Executive', description: 'Marketing and Sales Management' },
    { name: 'Alex Moholea', role: 'Hardware Technician', description: 'Ensuring smooth workflows and client satisfaction.' },
    { name: 'Sirca Alexandru', role: 'Hardware Technician', description: 'Creating intuitive solutions for customers.' },
    { name: 'Erick Kindlein', role: 'Sales', description: 'Crafting compelling marketing strategies.' },
  ];

const Despre = () => {
    return (
        <Layout>
            <ServiceSection>
            <br />
            <SectionTitle style={{marginTop: "30px"}}>
                    Despre Noi
                </SectionTitle>
                <SectionText>
                Pentru noi, la BlockArch, si cele mai proaste idei pot deveni povesti de viata.
                </SectionText>
                <TimelineSection>
          <TimelineGrid>
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineIcon>{item.icon}</TimelineIcon>
                <TimelineContent>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineGrid>
                </TimelineSection>
                <br />
                <TeamSection>
      <TeamGrid>
        {teamData.map((member, index) => (
          <TeamCard key={index}>
            <TeamIcon>
              <FaUserCircle />
            </TeamIcon>
            <TeamContent>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamDescription>{member.description}</TeamDescription>
            </TeamContent>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamSection>
      </ServiceSection>
    </Layout>
    )
}

export default Despre;