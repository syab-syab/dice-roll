import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = keyframes`
  0% {
    color: red;
  }
  30% {
    color: orange;
  }
  80% {
    color: yellow;
  }
  100% {
    color: black;
  }
`

const Message = styled.h1`
  font-weight: bold;
    animation: ${motion} 1s linear infinite;
`

type Props = {
  value: string
}

const DiceMotion = (props: Props) => {
  return (
    <>
      <Message>{props.value}</Message>
    </>
  )
}

export default DiceMotion