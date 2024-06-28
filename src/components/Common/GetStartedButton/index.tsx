"use client";
import Link from "next/link";
import { LinkTo } from "./styles";
import { Link as ScrollLink } from "react-scroll";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      <ScrollLink to="about" smooth={true} duration={1000}>
        Join Now
      </ScrollLink>
    </LinkTo>
  );
};

export default GetStartedButton;
