import React, { useState } from 'react'
import Dice from './Dice'
import Chouhan from './Chouhan'
import Chinchiro from './Chinchiro'

const Main = () => {
  const [category, setCategory] = useState<string>("dice")


  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="dice">サイコロ</option>
        <option value="chouhan">丁半</option>
        <option value="chinchiro">チンチロ</option>
      </select>
      {
        category === "dice" && <Dice />
      }
      {
        category === "chouhan" && <Chouhan />
      }
      {
        category === "chinchiro" && <Chinchiro />
      }
    </>
  )
}

export default Main