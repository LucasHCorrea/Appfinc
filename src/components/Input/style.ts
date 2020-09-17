import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(15, 15, 15, 0.29);
  border: 1px solid #fffbfb;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  max-width: 520px;
  min-height: 80px;
  margin: auto;

  align-items: center;

  & + div {
    margin-top: 32px;
  }

  input {
    /*ocupa todo o espaço*/
    background: transparent;
    color: #ffffff;
    min-height: 80px;
    max-width: 700px;
    margin-left: 25px;

    border: 0;
    font-family: Roboto, sans-serif;
    line-height: 56px;
    align-items: center;
    font-size: 28px;
    line-height: 56px;

    /*background: #000;
    border: 0;
    min-height: 80px;
    max-width: 520px;
    font-family: Roboto, sans-serif;
    font-size: 48px;
    line-height: 56px;
    align-items: center;
    margin: auto;
    color: #ffffff;*/
  }

  svg {
    width: 46px;
    min-height: 45px;
    margin-left: 37px;
    margin-right: 18px;
    color: #ffffff;
    /*margin-right: 58px;
    margin-top: 18px;
    margin-left: 37px;
    color: #ffffff;*/
  }
`;
