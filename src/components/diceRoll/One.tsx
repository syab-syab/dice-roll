import React from 'react'
import styled from 'styled-components';

const OneDice = styled.div`
  display: inline-block;
  width:150px;
  height:150px;
  border-radius:5px;
  border:3px solid black;
  background-color:#ffffff;
  background-image:
  radial-gradient(circle at 50% 50%,#ff0000ff 19%,#ff000000 20%);
`

const One = () => {
  return (
    <OneDice />
  )
}

export default One