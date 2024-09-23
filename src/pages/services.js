import React, { useEffect, useRef } from 'react';
import { Layout } from '../layout/Layout';
import {
  ServiceSection,
  ServiceTitle,
  ServiceDescription,
  ServiceList,
  ServiceItem,
  ServiceIcon,
  ImageTextSection,
  ImageWrapper,
  TextWrapper,
  Image,
  ServiceDivider,
  CallToActionBanner,
  CallToActionButton,
  CallToActionSection,
  CallToActionText
} from '../components/Services/ServicesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents/index';
import { FaCog, FaWarehouse, FaFileInvoiceDollar, FaGlobe, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa';

const servicesData = [
    { icon: <FaCog />, title: 'Proiectare si software', description: 'Transformăm ideile tale în soluții software inovatoare și eficiente. Cu o abordare axată pe nevoile tale specifice, dezvoltăm aplicații personalizate care optimizează procesele și maximizează performanța.' },
    { icon: <FaWarehouse />, title: 'Gestionarea Inventarului', description: 'Dezvoltam solutii software care permit urmărirea și gestionarea eficientă a stocurilor de produse sau materiale, inclusiv actualizări în timp real și notificări de activitate.' },
    { icon: <FaFileInvoiceDollar />, title: 'Contabilitate Integrată', description: 'Oferă instrumente pentru gestionarea finanțelor companiei, inclusiv contabilitate, facturare, și rapoarte financiare personalizate.' },
    { icon: <FaGlobe />, title: 'Platforme web', description: 'Urmărește datele și activitățile, inclusiv programarea și gestionarea resurselor prin diferite portaluri web.' },
    { icon: <FaChartLine />, title: 'Analiză și Rapoarte Avansate', description: 'Dezvoltam solurii integrate cu AI pentru rapoarte si prospecte cat mai avansate si precise.' },
    { icon: <FaUsers />, title: 'Colaborare Echipă', description: 'Ne axam pe eficientizarea și colaborarea de informații între membrii echipei sau al departamentelor pentru a îmbunătăți comunicarea și eficiența.' },
    // { icon: <FaShieldAlt />, title: 'Securitate și Control Acces', description: 'Asigură protecția datelor prin gestionarea accesului utilizatorilor, permisiuni personalizate și măsuri de securitate avansate pentru a preveni accesul neautorizat.' }
  ];
  
const Services = () => {
  // Create separate refs for each section
  const imageWrapperRef1 = useRef(null);
  const textWrapperRef1 = useRef(null);
  const imageWrapperRef2 = useRef(null);
  const textWrapperRef2 = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Only add animation on non-mobile devices
    if (!isMobile) {
      const createObserver = (ref) => {
        return new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                createObserver(ref).unobserve(entry.target); // Stop observing once visible
              }
            });
          },
          { threshold: 0.5 } // Adjust as needed to control when the animation triggers
        );
      };

    // Create observers for each ref
    if (imageWrapperRef1.current) createObserver(imageWrapperRef1.current).observe(imageWrapperRef1.current);
    if (textWrapperRef1.current) createObserver(textWrapperRef1.current).observe(textWrapperRef1.current);
    if (imageWrapperRef2.current) createObserver(imageWrapperRef2.current).observe(imageWrapperRef2.current);
    if (textWrapperRef2.current) createObserver(textWrapperRef2.current).observe(textWrapperRef2.current);

    return () => {
      // Clean up observers
      if (imageWrapperRef1.current) createObserver(imageWrapperRef1.current).disconnect();
      if (textWrapperRef1.current) createObserver(textWrapperRef1.current).disconnect();
      if (imageWrapperRef2.current) createObserver(imageWrapperRef2.current).disconnect();
      if (textWrapperRef2.current) createObserver(textWrapperRef2.current).disconnect();
    };
  } else {
    // On mobile, make sure to show the content immediately without animation
    if (imageWrapperRef1.current) imageWrapperRef1.current.classList.add('visible');
    if (textWrapperRef1.current) textWrapperRef1.current.classList.add('visible');
    if (imageWrapperRef2.current) imageWrapperRef2.current.classList.add('visible');
    if (textWrapperRef2.current) textWrapperRef2.current.classList.add('visible');
  }
}, []);

    return (
      <Layout>
        <ServiceSection>
          {/* <br />
          <SectionTitle>
            Serviciile Noastre
          </SectionTitle> */}
            <br />
                <SectionTitle style={{marginTop: "30px"}}>Proiectare si software</SectionTitle>
                <SectionText>Majoritatea clienților noștri nu înțeleg fluxurile lor de lucru. Ne straduim sa simplificăm această problemă, oferind o vizualizare clară și ușor de înțeles a proceselor lor, pentru a le ajuta să devină mai eficienți și să obțină rezultate mai bune.</SectionText>
          <ServiceList>
            {servicesData.map((service, index) => (
              <ServiceItem key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <div>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </div>
              </ServiceItem>
            ))}
          </ServiceList>
          <br />
          <br />
          <br />
          <SectionTitle style={{marginTop: "40px"}}>
            Optimizare si Eficiența
          </SectionTitle>
             {/* New section with paragraphs and images */}
             <ImageTextSection>
             <ImageWrapper ref={imageWrapperRef1}>
                        <Image src="/images/opt.png" alt="Description of image 1" />
                    </ImageWrapper>
                    <TextWrapper ref={textWrapperRef1}>

                        <SectionText>
                        La nucleul serviciilor noastre se află angajamentul de a dezvolta soluții software personalizate, care să contribuie la eficientizarea și automatizarea proceselor din cadrul afacerilor. Scopul nostru principal este de a transforma provocările clienților în oportunități prin utilizarea tehnologiei avansate. Cu o experiență vastă în domeniul IT, echipa noastră de specialiști a pus bazele unor proiecte inovative, care acoperă o gamă largă de nevoi, de la aplicații mobile, soluții pentru desktop și web, până la integrarea și gestionarea cloud-urilor IoT.
                        </SectionText>
                    </TextWrapper>
                </ImageTextSection>
     
          <ServiceDivider />

                <ImageTextSection>
                <TextWrapper ref={textWrapperRef2}>
                        <SectionText>
                        Oferim un angajament ferm de a colabora strâns cu clienții pentru a înțelege pe deplin nevoile și obiectivele lor. O comunicare eficientă și o înțelegere profundă a provocărilor sunt esențiale pentru a dezvolta soluții software personalizate, perfect adaptate fiecărei afaceri. Echipa noastră lucrează împreună cu partenerii pentru a simplifica procesele și a crește productivitatea, asigurându-se că fiecare soluție aduce valoare reală și măsurabilă. Scopul nostru este să transformăm colaborarea în rezultate tangibile și durabile.
                        </SectionText>
                    </TextWrapper>
                    <ImageWrapper ref={imageWrapperRef2}>
                        <Image src="/images/puzzle.png" alt="Description of image 2" />
                    </ImageWrapper>
                </ImageTextSection>
                <br />
        <CallToActionSection>
    <CallToActionBanner>
        <CallToActionText>
        Ai întrebări sau vrei să începi proiectul tău? Contactează-ne!
        </CallToActionText>
        <CallToActionButton href="mailto:contact@example.com">
            Get In Touch
        </CallToActionButton>
    </CallToActionBanner>
</CallToActionSection>

        </ServiceSection>
      </Layout>
    );
  }
  
  export default Services;
