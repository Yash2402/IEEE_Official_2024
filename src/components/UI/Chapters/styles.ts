"use client";
import { styled } from "styled-components";
import card_grid from "../../../../public/images/card_grid.png";

export const Wrapper = styled.section`
  padding-top: 7.75rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 56rem;
  margin-bottom: 6rem;

  h1 {
    font-size: 3.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  height: auto;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: #131313;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32.25rem;
  margin: 3.25rem 3.25rem 2.94rem 3.25rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 1.5rem 1.75rem 1.5rem;

    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const SVGCtn = styled.div`
  background: url(${card_grid.src});
  height: auto;
  display: grid;
  place-items: center;
  margin-left: 40px;
  img {
    width: 50rem;
    height: 70rem;
  }

  @media (max-width: 768px) {
    height: auto;
    background-position: center center;
    background-size: contain;

    img {
      width:  12rem;
      height: 12rem;
    }
  }
`;

export const Stats = styled.div`
  margin: 6.25rem auto;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 3.75rem auto;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    font-size: 3.75rem;
    font-weight: 600;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Banner = styled.div`
  height: 45rem;
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 31.25rem;
    img {
      object-fit: contain;
    }
  }
`;
