'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--White);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 0em;
  overflow: hidden;
  height: 14em;

  img {
    padding-top: 2rem;
    width: 10em;
    height: 12.5em;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-weight: 600;
      font-size: 6em;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 14rem;
    display: flex;
    flex-direction: column;

    img {
      width: 7rem;
      height: auto;
    }

    div {
      div {
        font-size: 3.75rem;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
