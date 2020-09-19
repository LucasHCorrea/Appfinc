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
  max-width: 590px;
  min-height: 502px;
  padding: 0 35px 0;
  /*width: 685px;
  height: 691px;*/

  form {
    text-align: center;

    h1 {
      margin-top: 22px;

      margin-right: 210px;
      margin-bottom: 38px;
      font-family: Roboto, sans-serif;
      font-size: 58px;
      color: #ffffff;

      max-width: 590px;
      width: 100%;
    }
  }
`;
