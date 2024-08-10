'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: var(--emerald);
`;

export const Inner = styled.div`
  display: flex;
  padding: 2.25rem 0;
  width: 75%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  margin: 0 auto 2.5rem;
  h1 {
    color: #e0e0e0;
    font-size: 3.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  max-width: 22rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-left: 2px solid #e0e0e0;

  @media (max-width: 768px) {
    border-left: none;
  }
`;

export const Testimony = styled.p`
  color: #d0d0d0;
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 0.5rem;
  width: 100%;

  h3 {
    color: #CDD6F4;
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    color: #CDD6F4;
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.25rem;

    h3 {
      font-size: 1.25rem;
      line-height: normal;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Avatar = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-top: 2.5rem;
`;

export const Previous = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Next = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
