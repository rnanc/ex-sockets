import styled, { keyframes } from 'styled-components'
import { TextField } from '@material-ui/core'
import { colors, fonts } from '../../global/theme'

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display:  flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  animation: ${appearFromRight} 2.5s;
`;

export const Frame = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-self: stretch;
  -webkit-app-region: drag;
`;

export const Title = styled.h1`
  font-family: ${fonts.mainFont};
  color: ${colors.mainTextColor};;
  text-shadow:
   -5px -5px 10px rgba(255,255,255,0.05),
   5px 5px 15px rgba(0,0,0,0.5);
`;

export const Status = styled.h4`
  font-family: ${fonts.mainFont};
  font-weight:400;
  color: ${colors.mainTextColor};;
  text-shadow:
   -5px -5px 10px rgba(255,255,255,0.05),
   5px 5px 15px rgba(0,0,0,0.5);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 80px;
  width: 80px;
  margin: 3px;
  box-shadow:
   -5px -5px 10px rgba(255,255,255,0.05),
   5px 5px 15px rgba(0,0,0,0.5);
  border-radius: 50%;
  background:  ${colors.buttonBackground};
  border: 8px solid  ${colors.buttonBackground};
  text-align: center;
  color: ${colors.mainTextColor};
  transition: all .4s;
  font-family: ${fonts.mainFont};
  outline: none;

  &:hover{
    color: ${colors.greenButton};
    transform: translateY(-3%);
    background:${colors.buttonBackground};
    box-shadow:
   -5px -5px 10px ${colors.greenButton},
   5px 5px 15px rgba(0,0,0,1);
  }
  `;

  export const Input = styled(TextField)` 
    input {
      color: ${colors.mainTextColor}; 
    }
    label.Mui-focused {
      color: ${colors.greenButton};
    }
    label {
      color: ${colors.mainTextColor};
    }
    .MuiOutlinedInput-root {
      fieldset {
        border-color: ${colors.mainTextColor};
      }
      &:hover fieldset {
        border-color: ${colors.greenButton};
      }
      &.Mui-focused fieldset {
        border-color: ${colors.greenButton};
      }
    }
  `;

  export const GifImg = styled.img`
    height: 100px;
    margin-top: 16px;
    margin-bottom: 16px;
  `;
