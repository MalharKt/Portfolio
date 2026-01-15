import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

/* ---------- styled components ---------- */

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavItems = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  padding: 0 20px;
  height: 70%;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light};
  padding: 20px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

/* ---------- component ---------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* LOGO */}
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </NavLogo>

        {/* MOBILE ICON */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        {/* DESKTOP MENU */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* DESKTOP BUTTON */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        {/* MOBILE MENU */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>

            <GitHubButton
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: theme.primary, color: "white" }}
            >
              GitHub Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
