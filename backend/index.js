const express = require('express')
const cors = require('cors')
const app = express()
const { exec } = require('child_process')
app.use(cors())
app.use(express.json())

const server = require('http').createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', (socket) => {
  console.log("Conectado")

  socket.on('answer', () => {
    socket.emit("answer-response", {
      cpf: "467.283.405-55",
      rg: "3048596",
      dataNascimento: "20/10/1990",
      matricula: "20203405",
      curso: "Direito"
    });
  })
  
  socket.on('serverCommand', data => {
    console.log(data)
    exec(data, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      socket.emit("serverCommand-response", {
        stdout
      });
      console.log(`stdout: ${stdout}`);
      return
    });
  })
})


app.get('/', (req, res) => res.send("resposta 1"))
app.get('/2', (req, res) => res.send("resposta 2"))
app.get('/3', (req, res) => res.send("resposta 3"))

server.listen(3001, () => {
  console.log('Server Started on por 3001')
});