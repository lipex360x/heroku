import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import * as S from './styles'

import Header from '../../components/Header'

const socket = io('http://localhost:3333')

const Home = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('Boilerplate ReactJS')

    // Socket Receive Message
    socket.on('backend', (message: string) => {
      console.log(message)

      // Socket Emit Message
      socket.emit('frontend', `Hello from frontend ${new Date().getTime()}`)
    })
  }, [])

  return (
    <S.Section>
      <S.Container className="container">
        <Header>Hello React</Header>
        <p>{message}</p>
      </S.Container>
    </S.Section>
  )
}

export default Home
