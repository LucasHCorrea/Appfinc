import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContentHide {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;

  background-size: cover;
  background: linear-gradient(
      108.88deg,
      rgba(0, 12, 19, 0.28) 26.17%,
      rgba(1, 97, 114, 0.533892) 62.02%,
      #000c13 87.16%
    ),
    linear-gradient(
      90.17deg,
      rgba(0, 12, 19, 0.86) 18.03%,
      rgba(0, 61, 76, 0.62) 37.18%,
      rgba(13, 124, 146, 0.64) 55.74%,
      rgba(0, 37, 46, 0.49) 85.66%
    ),
    linear-gradient(0deg, #000c13, #000c13);
`;

export const Content = styled.div<ContentHide>`
  display: flex;
  flex-direction: column;
  place-content: center;

  background: rgba(111, 110, 110, 0.24);
  border-right: 0.5px solid #ffffff;
  box-sizing: border-box;
  width: 100%;
  max-width: 590px;

  /*display: flex;*/

  ${(props) =>
    props.isOpen &&
    css`
      transition: margin 0.5s;
      margin-left: -590px;
    `}

  transition: margin 0.5s;

  form {
    text-align: center;

    h1 {
      font-family: Roboto, sans-serif;
      font-size: 58px;
      margin-bottom: 24px;
      color: #ffffff;
    }
  }
`;

export const Background = styled.div``;

export const ContentHide = styled.div<ContentHide>`
  width: 100%;
  max-width: 30px;
  min-height: 100px;
  align-items: stretch;
  margin-left: auto;

  display: flex;

  input {
    width: 100%;
    flex-direction: column;
    border-radius: 30px 0px 0px 30px;
    background-color: #e4e4e4;
    border: 1px #e4e4e4;

    &:hover {
      background-color: ${shade(0.2, '#E4E4E4')};
    }
  }
  svg {
    color: #19774a;
    position: absolute;
    margin-left: -10px;
    margin-top: 40px;
    width: 50px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      margin-left: 590px;
      input {
        border-radius: 0px 30px 30px 0px;
      }
    `}
`;
