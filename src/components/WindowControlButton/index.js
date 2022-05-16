import React from 'react'

import { ButtonStyle } from './styles'

const WindowControlButton = ({fechar, minimizar, children}) => {
  return (
    <ButtonStyle
      fechar={fechar}
      minimizar={minimizar}
    >
      {children}
    </ButtonStyle>
  )
}

export default WindowControlButton
