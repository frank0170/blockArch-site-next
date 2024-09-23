import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import IntroSectionComponent from '../components/Intro/Intro';
import Invoice from '../components/Invoice/Invoice';
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <IntroSectionComponent />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Invoice />
    </Layout>
  );
};

export default Home;
