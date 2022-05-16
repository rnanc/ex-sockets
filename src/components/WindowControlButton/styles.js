import styled, { css } from 'styled-components'
import { colors, fonts } from '../../global/theme';

export const ButtonStyle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin: 3px;
  box-shadow:
   -5px -5px 10px rgba(255,255,255,0.05),
   5px 5px 15px rgba(0,0,0,0.5);
  border-radius: 50%;
  background: ${colors.buttonBackground};
  border: 8px solid  ${colors.buttonBackground};
  text-align: center;
  color: ${colors.mainTextColor};
  transition: all .4s;
  font-family: ${fonts.mainFont};
  outline: none;
  -webkit-app-region: no-drag;

  &:hover{
    ${(props) => props.fechar && css`
      color: ${colors.closeButtonRed};
      box-shadow:
      -5px -5px 10px ${colors.closeButtonRed},
      5px 5px 15px ${colors.closeButtonRed};
    `}
    ${(props) => props.minimizar && css`
      color: ${colors.minimizeButtonYellow};
      box-shadow:
      -5px -5px 10px ${colors.minimizeButtonYellow},
      5px 5px 15px ${colors.minimizeButtonYellow};   
    `}
    transform: translateY(-3%);
    background:${colors.buttonBackground};
  }
  `;