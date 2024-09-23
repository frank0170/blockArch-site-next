// import Link from 'next/link';
// import React from 'react';
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';

// import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

// const Header = () => (
//   <Container>
//     <Div1>
//       <Link href="/">
//         <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
//           <DiCssdeck size="3rem" /> <span>Portfolio</span>
//         </a>
//       </Link>
//     </Div1>
//     <Div2>
//       <li>
//         <Link href="#projects">
//           <NavLink>Projects</NavLink>
//         </Link>
//       </li>
//       <li>
//         <Link href="#tech">
//           <NavLink>Technologies</NavLink>
//         </Link>
//       </li>        
//       <li>
//         <Link href="#about">
//           <NavLink>About</NavLink>
//         </Link>
//       </li>
//       <li>
//         <Link href="/services">
//           <NavLink>Services</NavLink>
//         </Link>
//       </li>
//     </Div2>
//     <Div3>
//       <SocialIcons href="https://github.com">
//         <AiFillGithub size="3rem" />
//       </SocialIcons>
//       <SocialIcons href="https://linkedin.com">
//         <AiFillLinkedin size="3rem" />
//       </SocialIcons>
//       <SocialIcons href="https://instagram.com">
//         <AiFillInstagram size="3rem"/>
//       </SocialIcons>
//     </Div3>
//   </Container>
// );

// export default Header;

import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, MobileIcon, MobileMenu, NavLinkMobile } from './HeaderStyles';
import { BlockArchLogo } from './HeaderLogo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            {/* <DiCssdeck size="3rem" /> <span>Portfolio</span> */}
            <BlockArchLogo  />
          </a>
        </Link>
      </Div1>

      {/* Desktop Menu */}
      <Div2>
        <li>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/despre">
            <NavLink>Despre</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <NavLink>Servicii</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/portofoliu">
            <NavLink>Portfolio</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>

      {/* Social Icons */}
      <Div3>
        {/* <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons> */}

        {/* Mobile Menu Toggle Icon */}
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes size="2rem" style={{zIndex: "1000"}}  /> : <FaBars size="2rem" />}
        </MobileIcon>
      </Div3>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu>
          <li>
            <NavLinkMobile href="/" onClick={toggleMenu}>Home</NavLinkMobile>
          </li>
          <li>
            <NavLinkMobile href="/despre" onClick={toggleMenu}>About</NavLinkMobile>
          </li>
          <li>
            <NavLinkMobile href="/services" onClick={toggleMenu}>Services</NavLinkMobile>
          </li>
          <li>
            <NavLinkMobile href="/portofoliu" onClick={toggleMenu}>Portfolio</NavLinkMobile>
          </li>
          <li>
            <NavLinkMobile href="/contact" onClick={toggleMenu}>Contact</NavLinkMobile>
          </li>
        </MobileMenu>
      )}
    </Container>
  );
};

export default Header;

