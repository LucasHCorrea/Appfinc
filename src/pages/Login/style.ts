import styled from 'styled-components';
import { shade } from 'polished';
import imgBackground from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: url(${imgBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  background: rgba(111, 110, 110, 0.24);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  max-width: 685px;
  min-height: 691px;

  /*width: 685px;
  height: 691px;*/

  form {
    text-align: center;

    h1 {
      margin-top: 110px;
      margin-left: 200px;
      margin-right: 210px;
      margin-bottom: 38px;
      font-family: Roboto, sans-serif;
      font-size: 58px;
      color: #ffffff;
    }

    button {
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
    }
  }
`;
