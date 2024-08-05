import React, { useState } from 'react'
import Dice from './Dice'
import Chouhan from './Chouhan'
import Chinchiro from './Chinchiro'
import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 3rem 0;
`

const Select = styled.select`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: black;
`

const Main = () => {
  const [category, setCategory] = useState<string>("dice")


  return (
    <Wrapper>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="dice">サイコロ</option>
        <option value="chouhan">丁半</option>
        <option value="chinchiro">チンチロ</option>
      </Select>
      {
        category === "dice" && <Dice />
      }
      {
        category === "chouhan" && <Chouhan />
      }
      {
        category === "chinchiro" && <Chinchiro />
      }
    </Wrapper>
  )
}

export default Main