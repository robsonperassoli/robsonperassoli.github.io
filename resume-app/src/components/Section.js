import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2.5em;
  margin-bottom: 3em;
`

const Title = styled.div`
  font-style: italic;
  font-size: 1.4em;
  letter-spacing: 1px;
  width: 170px;
  flex-shrink: 0;
  line-height: 1.2em;
`
const Content =  styled.div`
  font-size: 1.2em;
`

function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  )

}

export default Section
