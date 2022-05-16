import '../../App.css';

import io from "socket.io-client"
import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import WindowControlButton from '../../components/WindowControlButton';
import { 
  Button,
  Container,
  ButtonContainer,
  Title,
  Status,
  Frame,
  Input
 } from './styles'
import axios from 'axios';

const socket = io.connect('http://localhost:3001')
const ipcRenderer = window.require('electron').ipcRenderer

const Main = () => {
  const [status, setStatus] = useState('desconectado');
  const [command, setCommand] = useState('');

  const notify = (mensagem) => toast(mensagem, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;

  useEffect(() => {
    socket.on('connect')
    setStatus("Conectado") 
  }, [])

  const close = () => {
    ipcRenderer.invoke('close-event')
  }

  const minimizeHandler = () => {
    ipcRenderer.invoke('minimize-event')
  }

  const serverResponse = () => {
    socket.emit("answer")
    socket.on("answer-response", data => {
      notify(`CPF: ${data.cpf}
              RG: ${data.rg}
              Data de Nascimento: ${data.dataNascimento}
              Matrícula: ${data.matricula}
              Curso: ${data.curso}`)
    })
  }

  const serverCommand = () => {
    console.log(command)
    socket.emit("serverCommand", command)
    socket.on("serverCommand-response", data => {
      notify(JSON.stringify(data))
    })
  }

  const http = "http://localhost:3001/"
  const response1 = async () => {
    const resp = await axios.get(http)
    notify(resp.data)
  }
  const response2 = async () => {
    const resp = await axios.get(http+"2")
    notify(resp.data)
  }
  const response3 = async () => {
    const resp = await axios.get(http+"3")
    notify(resp.data)
  }

  return (
    <Container>
      <Frame>
        <WindowControlButton fechar Click={close}>X</WindowControlButton>
        <WindowControlButton minimizar onClick={minimizeHandler}>-</WindowControlButton>
      </Frame>
      <Title>Exercício Socket</Title>

      <Status>{status}</Status>

        <ButtonContainer>
          <Button onClick={serverResponse}>Receber dados do servidor</Button>
          <Input variant='outlined'onChange={(e) => setCommand(e.target.value)} label={"Insira o comando shell"}/>
          <Button onClick={serverCommand} >Enviar e receber dados</Button>

          <Button onClick={response1} >Requisição HTTP 1</Button>
          <Button onClick={response2} >Requisição HTTP 2</Button>
          <Button onClick={response3} >Requisição HTTP 3</Button>
        </ButtonContainer>
        <ToastContainer />
    </Container >
  );
}

export default Main;
