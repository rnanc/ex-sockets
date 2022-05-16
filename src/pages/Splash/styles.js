import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display:  flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const Logo = styled.img`
  margin: auto;
  width: 80%;
  animation: ${appearFromLeft} 1.5s;
`
