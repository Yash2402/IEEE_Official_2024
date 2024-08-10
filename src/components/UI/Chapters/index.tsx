"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Banner,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { IsMobile } from "../../../../libs/IsMobile";
import {
  cardsInfo,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
  stats,
} from "./constants";
import { Element } from "react-scroll";

const chapter = () => {
  const isMobile = IsMobile();

  return (
    <Element name="chapter">
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
          <CardContainer>
            {cardsInfo.map((info, i) => (
              <Card key={i}>
              <SVGCtn>
              <Image
              style={{
                  width: "100%",
                  height: "auto",
              }}
              src={info.icon}
              alt="icon"
              />
              </SVGCtn>
                <TextCtn>
                  <MaskText phrases={new Array(info.title)} tag="h3" />
                  <MaskText phrases={new Array(info.details)} tag="p" />
                </TextCtn>
              </Card>
            ))}
          </CardContainer>
          <Stats>
            {stats.map((stat, i) => (
              <Stat key={i}>
                <MaskText phrases={new Array(stat.number)} tag="h1" />
                <MaskText phrases={new Array(stat.subtitle)} tag="p" />
              </Stat>
            ))}
          </Stats>
        </Inner>
      </Wrapper>
    </Element>
  );
};

export default chapter;
