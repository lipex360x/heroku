import app from './app'
import http from 'http'
import socketIo from '@shared/socket'

const server = http.createServer(app)

const setServer = server.listen(process.env.PORT || 3333, () => {
  console.log('š API Started on port 3333 \nš Check Hello Message at http://localhost:3333/hello')

  socketIo(setServer)
})

process.on('SIGINT', () => {
  console.log('\nš API Stopped')
  setServer.close()
  process.exit()
})
