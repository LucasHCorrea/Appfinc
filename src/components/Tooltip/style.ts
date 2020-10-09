import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: rgba(111, 110, 110, 0.5);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;

    transform: translateX(-50%);
    visibility: hidden;

    color: #ffffff;

    &::before {
      content: '';
      border-style: solid;
      border-color: rgba(111, 110, 110, 0.5) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;