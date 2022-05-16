import React, { useEffect } from 'react'
import { Container, Logo } from './styles'
import ImgLogo from '../../assets/logoIcon.png'
import { useHistory } from 'react-router-dom'

const Splash = () => {
  
  const history = useHistory()
  
  useEffect(() => {
    setTimeout(function() {history.push('/main')}, 2500)
  }, [])
  return (
    <Container>
        <Logo src={ImgLogo}/>
    </Container>
  )
}

export default Splash
