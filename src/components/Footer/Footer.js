// import React from 'react';
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

// import { SocialIcons } from '../Header/HeaderStyles';
// import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <LinkList>
//         <LinkColumn>
//           <LinkTitle>Call</LinkTitle>
//           <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
//         </LinkColumn>
//         <LinkColumn>
//           <LinkTitle>Email</LinkTitle>
//           <LinkItem href="mailto:contact@jsmastery.com">
//             contact@jsmastery.com
//           </LinkItem>
//         </LinkColumn>
//       </LinkList>
//       <SocialIconsContainer>
//         <CompanyContainer>
//           <Slogan>Innovating one project at a time</Slogan>
//         </CompanyContainer>
//         <SocialContainer>
//           <SocialIcons href="https://google.com">
//             <AiFillGithub size="3rem" />
//           </SocialIcons>
//           <SocialIcons href="https://google.com">
//             <AiFillLinkedin size="3rem" />
//           </SocialIcons>
//           <SocialIcons href="https://google.com">
//             <AiFillInstagram size="3rem" />
//           </SocialIcons>
//         </SocialContainer>
//       </SocialIconsContainer>
//     </FooterWrapper>
//   );
// };

// export default Footer;


import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'; // Add Twitter icon

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@blockarch.ro">frank@blockarch.ro</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Produse</LinkTitle>
          <LinkItem href="https://smarty-erp.ro/" target="_blank">Smarty ERP</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© BlockArch.ro. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/frank0170" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://ro.linkedin.com/company/blockchain-architecture" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com" target="_blank">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
