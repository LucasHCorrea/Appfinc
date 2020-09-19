import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(15, 15, 15, 0.29);
  border: 1px solid #8b8888;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  max-width: 520px;
  min-height: 80px;
  margin: auto;
  color: #8b8888;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 32px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ffffff;
      border-color: #ffffff;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffffff;
    `}

  input {
    flex: 1;
    /*ocupa todo o espaço*/
    background: transparent;
    color: #ffffff;
    min-height: 80px;
    max-width: 360px;

    border: 0;
    font-family: Roboto, sans-serif;
    line-height: 56px;
    align-items: center;
    font-size: 28px;
    line-height: 56px;
  }

  svg {
    width: 46px;
    min-height: 45px;
    margin-right: 50px;
    margin-left: 37px;
  }
`;
