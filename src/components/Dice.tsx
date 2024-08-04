import React, { useState } from 'react';
import One from './diceRoll/One';
import Two from './diceRoll/Two';
import Three from './diceRoll/Three';
import Four from './diceRoll/Four';
import Five from './diceRoll/Five';
import Six from './diceRoll/Six';
import DiceMotion from './diceRoll/DiceMotion';

const Dice = () => {
  const [ran, setRan] = useState<number>(1)

  const [motion, setMotion] = useState<boolean>(false)

  const createRandom = (): void => {
    setMotion(true)
    setTimeout(() => {
      setMotion(false)
    }, 1000);
    // 1を足さないと0スタートになってややこしい
    const tmp: number =  Math.floor(Math.random() * 6)
    setRan(tmp+1)
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
          !motion && DiceArr[ran-1]
        }
        {
          motion && <DiceMotion value='DICE ROLL!' />
        }
      </div>
      
    </div>
  )
}

export default Dice