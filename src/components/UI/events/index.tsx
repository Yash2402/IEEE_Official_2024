"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { IsMobile } from "../../../../libs/IsMobile";
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from "./constants";
import { Element } from "react-scroll";

const events = () => {
  const isMobile = IsMobile();
  return (
    <Element name="events">
      <Wrapper>
        <Inner>
          <Header>
            <MaskText phrases={desktopHeaderPhrases} tag="h1" />
            <p>{desktopParagraphPhrase}</p>
          </Header>
          <Offers id=" ">
            {offers.slice(0, 2).map((offer, i) => (
              <OfferCard key={i}>
                <ImageCtn>
                  <Image src={offer.illustration} alt="illustration" />
                </ImageCtn>
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </OfferCard>
            ))}
          </Offers>
          <Offers>
            {offers.slice(2, 4).map((offer, i) => (
              <OfferCard key={i}>
                <ImageCtn>
                  <Image src={offer.illustration} alt="illustration" />
                </ImageCtn>
                <TextCtn>
                  <MaskText phrases={new Array(offer.title)} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </OfferCard>
            ))}
          </Offers>
        </Inner>
      </Wrapper>
    </Element>
  );
};

export default events;
