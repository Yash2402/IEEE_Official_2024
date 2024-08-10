"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
  image,
} from "./styles";
import logo from "../../../../public/images/logo.png";
import ic_bars from "../../../../public/svgs/ic_bars.svg";
import { GetStartedButton } from "@/components";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";
import { IsMobile } from "../../../../libs/IsMobile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image
            src={logo}
            alt="logo"
            priority
            // make this responsive so that on mobile 64px and on desktop 80px
            width={IsMobile() ? 64 : 80}
          />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} to={link.to} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? "active" : ""}>
          {/* <AnimatedLink title="Login" /> */}
          <GetStartedButton padding="0.75rem 0.95rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
