import React, { useState } from 'react'
import One from './diceRoll/One';
import Two from './diceRoll/Two';
import Three from './diceRoll/Three';
import Four from './diceRoll/Four';
import Five from './diceRoll/Five';
import Six from './diceRoll/Six';
import DiceMotion from './diceRoll/DiceMotion';

const Chouhan = () => {
  const [ran1, setRan1] = useState<number>(1)
  const [ran2, setRan2] = useState<number>(2)

  const [motion, setMotion] = useState<boolean>(false)


  const createRandom = (): void => {
    setMotion(true)
    setTimeout(() => {
      setMotion(false)
    }, 1000);
    // 1を足さないと0スタートになってややこしい
    const tmp1: number =  Math.floor(Math.random() * 6)
    const tmp2: number =  Math.floor(Math.random() * 6)
    setRan1(tmp1+1)
    setRan2(tmp2+1)
  }

  const DiceArr = [
    <One />,
    <Two />,
    <Three />,
    <Four />,
    <Five />,
    <Six />
  ]

  return (
    <div>
      <button onClick={createRandom}>乱数</button>
      <div>
        {
          !motion && DiceArr[ran1-1]
        }
        {
          !motion && DiceArr[ran2-1]
 
        }
        {
          motion && <DiceMotion value='張った張った！' />
        }
   
      </div>

    </div>
  )
}

export default Chouhan