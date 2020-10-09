import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 514px;
  height: 78px;
  margin-top: 50px;
  border-radius: 50px;

  background-color: rgba(238, 240, 245, 0.4);

  border: 1px solid #ffffff;
  box-sizing: border-box;

  font-family: Roboto, sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: rgba(238, 240, 245, 1);
  transition: background-color 0.4s;

  &:hover {
    background-color: ${shade(0.2, 'rgba(238, 240, 245, 0.4)')};
  }
`;
