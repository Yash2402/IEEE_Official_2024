"use client";
import Image from "next/image";
import big_banner from "../../../../public/images/team.jpg";
import featured_mobile_banner from "../../../../public/images/team.jpg";
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from "./styles";
import RevealCover from "@/components/Common/RevealCover";
import { IsMobile } from "../../../../libs/IsMobile";
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = IsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={featured_mobile_banner}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
