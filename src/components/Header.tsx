import React from 'react'
import styled from 'styled-components'

// スタイルは適当だから後で直す
const Wrapper = styled.header`
  background: #4d869c;
`

const Title = styled.a`
  color: black;
  text-decoration: none;
  text-decoration: none;
  font-size: 4rem;
`

const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='_blank'>
        運命のダイスロール
      </Title>
    </Wrapper>
  )
}

export default Header