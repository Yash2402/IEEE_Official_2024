"use client";
import Image from "next/image";
import { Wrapper, Inner, Pill, HeroTextContainer } from "./styles";
import ic_chevron_right from "../../../../public/svgs/ic_chevron_right.svg";
import { GetStartedButton } from "@/components";
import MaskText from "@/components/Common/MaskText";
import { IsMobile } from "../../../../libs/IsMobile";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";
import { Element } from "react-scroll";

const HeroSection = () => {
  const isMobile = IsMobile();
  return (
    <Element name="home">
      <Wrapper>
        <Inner>
          <Pill>
            <span>Institute of Electrical and Electronics Engineers</span>
            {/* <Image src={ic_chevron_right} alt="chevron-right" /> */}
          </Pill>
          <HeroTextContainer>
            {isMobile ? (
              <>
                <MaskText phrases={mobilePhrases} tag="h1" />
                <MaskText phrases={mobileParagraphPhrases} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={phrases} tag="h1" />
                <MaskText phrases={paragraphPhrases} tag="p" />
              </>
            )}
          </HeroTextContainer>
          <GetStartedButton padding="1rem 1.50rem" />
        </Inner>
      </Wrapper>
    </Element>
  );
};

export default HeroSection;
