import React, { useState } from 'react'
import One from './diceRoll/One';
import Two from './diceRoll/Two';
import Three from './diceRoll/Three';
import Four from './diceRoll/Four';
import Five from './diceRoll/Five';
import Six from './diceRoll/Six';
import Syonben from './diceRoll/Syonben';
import DiceMotion from './diceRoll/DiceMotion';
import styled from 'styled-components';

const RollButton = styled.button`
  background: #4d869c;
  font-size: 3rem;
  border: 0.1rem solid #4d869c;
  border-radius: 0.5rem;
`

const SyonbenMessage = styled.h1`
  font-size: 3rem;
`

const Chinchiro = () => {
  const [ran1, setRan1] = useState<number>(1)
  const [ran2, setRan2] = useState<number>(2)
  const [ran3, setRan3] = useState<number>(3)

  const [motion, setMotion] = useState<boolean>(false)

  const createRandom = (): void => {
    setMotion(true)
    setTimeout(() => {
      setMotion(false)
    }, 1000);
    // 1を足さないと0スタートになってややこしい
    const tmp1: number =  Math.floor(Math.random() * 7)
    const tmp2: number =  Math.floor(Math.random() * 7)
    const tmp3: number =  Math.floor(Math.random() * 7)
    setRan1(tmp1+1)
    setRan2(tmp2+1)
    setRan3(tmp3+1)
  }

  // 出目
  const rolls: number[] = [ran1, ran2, ran3]
  
  const SyonbenSearch = (arr: number[]) => {
    return arr.includes(7)
  }


  const DiceArr = [
    <One />,
    <Two />,
    <Three />,
    <Four />,
    <Five />,
    <Six />,
    <Syonben />
  ]

  return (
    <div>
      <div>
        {
          !motion && SyonbenSearch(rolls) && <SyonbenMessage>ションベン</SyonbenMessage>
        }

        { !motion && !SyonbenSearch(rolls) && DiceArr[ran1-1]}
        { !motion && !SyonbenSearch(rolls) && DiceArr[ran2-1]}
        { !motion && !SyonbenSearch(rolls) && DiceArr[ran3-1]}
        { motion && <DiceMotion value='ノーカン！ノーカン！' />}
      </div>
      <p>
        {
          !motion && <RollButton onClick={createRandom}>振る</RollButton>
        }
      </p>
    </div>
  )
}

export default Chinchiro