import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2.5em;
  margin-bottom: 3em;
`
const Left = styled.div`
  width: 66%;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
`
const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: italic;
  margin-top: 10px;
`
const Item = styled.span`
  line-height: 1.3em;
  font-size: 16px;
  letter-spacing: 1px;
`

function About() {
  return (
    <Row>
      <Left>
        <Name>Robson Gian Perassoli</Name>
        <Title>Software Engineer</Title>
      </Left>
      <Right>
        <Item>
          <a href='mailto:robsonperassoli@gmail.com'>robsonperassoli@gmail.com</a>
        </Item>
        <Item>+55 (49) 98853-5294</Item>
        <br/>
        <Item>
          <a href='http://robsonperassoli.com.br'>robsonperassoli.com.br</a>
        </Item>
        <Item>
          <a href='https://github.com/robsonperassoli'>github.com/robsonperassoli</a>
        </Item>
        <Item>
          <a href='https://www.linkedin.com/in/robsonperassoli/'>linkedin.com/in/robsonperassoli</a>
        </Item>
      </Right>
    </Row>
  )
}

export default About
