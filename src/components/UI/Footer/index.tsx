"use client";
import Image from "next/image";
import logo from "../../../../public/images/logo_min.png";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const linksArr = [
  {
    title: "Contact us",
    links: [
      "+91-9534781286",
      "ieeensut@gmail.com",
      "NSUT, Sector-3 Dwarka, Delhi",
    ],
  },
  {
    title: "",
    links: ["", "", ""],
  },
  {
    title: "About us",
    // links: ["Chapters", "FAQ"],
    links: [
      <ScrollLink key={1} to="chapter" smooth={true} duration={1000}>
        Chapters
      </ScrollLink>,
      <ScrollLink key={2} to="faq" smooth={true} duration={1000}>
        FAQ
      </ScrollLink>,
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
  IconCtnSocialMedia,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={logo} alt="logo" />
              </QRImageCtn>
              <TextCtn>
                <p>The Largest and the Oldest Technical Society of NSUT</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
              <IconCtnSocialMedia>
                <a
                  href="https://www.instagram.com/ieee_nsut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://in.linkedin.com/company/ieee-nsut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.facebook.com/ieeensut/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </IconCtnSocialMedia>
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              IEEE NSUT 2024 | All rights reserved.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
