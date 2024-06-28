"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import RevealCover from "@/components/Common/RevealCover";
import { Div } from "../Featured/styles";
import { imageVariants } from "../Featured";
import { IsMobile } from "../../../../libs/IsMobile";
import ieee_day from "../../../../public/images/fun1.png";
import anu from "../../../../public/images/anu.jpg";
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";
import { Element } from "react-scroll";
const Join = () => {
  const isMobile = IsMobile();

  return (
    <Element name="about">
      <Wrapper>
        <Inner>
          <Header>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </Header>
          <BannerCtn>
            <RevealCover />
            <Div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25, once: true }}
            >
              {isMobile ? (
                <Image src={anu} alt="banner_img" fill />
              ) : (
                <Image src={ieee_day} alt="banner_img" />
              )}
            </Div>
          </BannerCtn>
          <Edges>
            {edges.map((edge, i) => (
              <Edge key={i}>
                <Title>
                  <Image src={edge.icon} alt="icon" />
                  <MaskText phrases={new Array(edge.point)} tag="h3" />
                </Title>
                <MaskText phrases={new Array(edge.details)} tag="p" />
              </Edge>
            ))}
          </Edges>
        </Inner>
        <BriefNote>
          {isMobile ? (
            <MaskText phrases={mobileBriefNotePhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopBriefNotePhrase} tag="p" />
          )}
        </BriefNote>
      </Wrapper>
    </Element>
  );
};

export default Join;
