// import { IoIosArrowDropdown } from 'react-icons/io';
// import styled from 'styled-components';

// export const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: 1fr;
//   grid-column-gap: 2rem;
//   padding: 1rem;
//   padding-top: 2rem;

//   @media ${(props) => props.theme.breakpoints.sm} {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-template-rows: repeat(2, 60px);
//     grid-column-gap: 0.5rem;
//     grid-row-gap: 0.5rem;
//   }
// `;
// export const Div1 = styled.div`
//   grid-area: 1 / 1 / 2 / 2;
//   display: flex;
//   flex-direction: row;
//   align-content: center;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 1 / 1 / 2 / 3;
//   }
// `;
// export const Div2 = styled.div`
//   grid-area: 1 / 2 / 2 / 4;
//   display: flex;
//   justify-content: space-around;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 2 / 2 / 3 / 5;
//   }
// `;
// export const Div3 = styled.div`
//   grid-area: 1 / 5 / 2 / 6;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     align-items: center;
//     grid-area: 1 / 4 / 2 / 6;
//   }
// `;

// // Navigation Links
// export const NavLink = styled.a`
//   font-size: 2rem;
//   line-height: 32px;
//   color: rgba(255, 255, 255, 0.75);
//   transition: 0.4s ease;
//   &:hover {
//     color: #fff;
//     opacity: 1;
//     cursor: pointer;
//   }
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.5rem;
//   }
// `;

// /// DropDown Contact
// export const ContactDropDown = styled.button`
//   border: none;
//   display: flex;
//   position: relative;
//   background: none;
//   font-size: 1.7rem;

//   line-height: 32px;
//   color: rgba(255, 255, 255, 0.75);
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:focus {
//     outline: none;
//   }
//   &:hover {
//     color: #fff;
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.4rem 0;
//   }
//   @media ${(props) => props.theme.breakpoints.md} {
//     padding: 0;
//   }
// `;

// export const NavProductsIcon = styled(IoIosArrowDropdown)`
//   margin-left: 8px;
//   display: flex;
//   align-self: center;
//   transition: 0.3s ease;
//   opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
//   transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

//   &:hover {
//     opacity: 1;
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     margin: 2px 0 0 2px;
//     width: 15px;
//   }
// `;


// // Social Icons 

// export const SocialIcons = styled.a`
// transition: 0.3s ease;
// color: white;
// border-radius: 50px;
//   padding: 8px;
// &:hover {
//     background-color: #212d45;
//     transform: scale(1.2);
//     cursor: pointer;
    
//   }
// `

import styled from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
// Container for the header
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: none;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

// Div1: For Logo
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

// Div2: For Nav Links (Desktop)
export const Div2 = styled.ul`
  display: flex;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// Div3: For Social Icons and Mobile Menu Icon
export const Div3 = styled.div`
  display: flex;
  align-items: center;
`;

// NavLink: For styling the links
export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 2rem;
  margin-right: 2.5rem;
  transition: color 0.4s ease;

  &:hover {
    color: white;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem 0;
  }
`;

// SocialIcons: For social media links
export const SocialIcons = styled.a`
  color: white;
  padding: 0 1rem;


`;

// MobileIcon: For showing mobile menu icon (hamburger and close)



// MobileIcon: For showing mobile menu icon (hamburger and close)
export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

// MobileMenu: For styling the dropdown mobile menu
export const MobileMenu = styled.ul`
  display: none;
  list-style: none;
  position: fixed; /* Ensure it covers the full viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Full height to cover the viewport */
  background-color: black;
  padding: 2rem; /* Increase padding for better spacing */
  border-radius: 0; /* Remove rounded corners for full coverage */
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  z-index: 999; /* Ensure it's above other content */

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

// NavLink: For styling the links inside the mobile menu
export const NavLinkMobile = styled.a`
color: #ffffff;
  font-size: 2rem;
  text-decoration: none;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 4px;
  opacity: 0;
  animation: fadeIn 0.9s ease forwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }

  &:hover {
    color: #27DEBF;
    background-color: #1a2335;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;