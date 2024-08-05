import React, { useState } from 'react'
import One from './diceRoll/One';
import Two from './diceRoll/Two';
import Three from './diceRoll/Three';
import Four from './diceRoll/Four';
import Five from './diceRoll/Five';
import Six from './diceRoll/Six';
import DiceMotion from './diceRoll/DiceMotion';
import styled from 'styled-components';
import demeChouhan from '../functions/demeChouhan';

const RollButton = styled.button`
  background: #4d869c;
  font-size: 3rem;
  border: 0.1rem solid #4d869c;
  border-radius: 0.5rem;
`

const Deme = styled.p`
  font-size: 3rem;
  font-weight: bold;
`

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

  // 出目
  const rolls: number[] = [ran1, ran2]

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
      <Deme>
        {
          !motion && demeChouhan(rolls)
        }
      </Deme>
      <p>
        {
          !motion && <RollButton onClick={createRandom}>振る</RollButton>
        }
      </p>
    </div>
  )
}

export default Chouhan