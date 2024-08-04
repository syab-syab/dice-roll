import React from 'react'
import styled from 'styled-components'

const FourDice = styled.div`
  display: inline-block;
  width:150px;
  height:150px;
  border-radius:5px;
  border:3px solid black;
  background-color:#ffffff;
  background-image:
  radial-gradient(circle at 25% 25%,#000000ff 10%,#00000000 11%)
  ,radial-gradient(circle at 25% 75%,#000000ff 10%,#00000000 11%)
  ,radial-gradient(circle at 75% 25%,#000000ff 10%,#00000000 11%)
  ,radial-gradient(circle at 75% 75%,#000000ff 10%,#00000000 11%);
`

const Four = () => {
  return (
    <FourDice />
  )
}

export default Four