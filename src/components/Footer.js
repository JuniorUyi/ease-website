import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #273a66;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-content: space-between;
`;

const GridThree = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
`;

const ContactList = styled.div`
  color: #fff;
`;

const FooterHeading = styled.h3`
  color: #fff;
  font-size: 1.6em;
  margin-bottom: 1em;
`;

const footerLinks = [
  { content: 'GDPR Policy' },
  { content: 'ISO 27001' },
  { content: 'G-Cloud' },
  { content: 'Quality Policy' },
  { content: 'NHS Toolkit' },
  { content: 'Cyber Essentials' },
  { content: 'Terms & Conditions' },
  { content: 'ICO' },
  { content: 'Careers' },
];

const contacts = [
  { department: 'Technical Support', contact: '+44 (0) 33 043 6989' },
  { department: 'Sales Enquiries', contact: '+44 (0) 33 043 0875' },
  { department: 'General Enquiries', contact: 'info@surgease.co.uk' },
];

export default function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <Wrapper>
        <div>
          <FooterHeading>Links</FooterHeading>
          <GridThree>
            {footerLinks.map(({ content }) => (
              <p>{content}</p>
            ))}
          </GridThree>
        </div>
        <div>
          <FooterHeading>Contact us</FooterHeading>
          <ContactList>
            {contacts.map(({ department, contact }) => (
              <div className="inline-block">
                <p>{department}</p>
                <p>{contact}</p>
              </div>
            ))}
          </ContactList>
        </div>
        <div>
          <FooterHeading>Find us</FooterHeading>
        </div>
      </Wrapper>
    </FooterContainer>
  );
}
