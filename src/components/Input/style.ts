import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

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
    max-width: 340px;
    margin-right: 5px;

    border: 0;
    font-family: Roboto, sans-serif;
    line-height: 56px;
    align-items: center;
    font-size: 28px;
    line-height: 56px;
  }

  svg {
    margin-left: 37px;
    margin-right: 50px;
  }
`;

export const Error = styled(Tooltip)`
  width: 30px;
  height: 100%;
  position: flex;
  margin-right: 3px;

  > svg {
    margin: auto;
  }

  span {
    background: #c53030;
    color: #ffffff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
