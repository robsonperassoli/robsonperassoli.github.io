import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5em;
`

function Footer() {
  return (
    <Container>
      <a href='mailto:robsonperassoli@gmail.com'>
        robsonperassoli@gmail.com
      </a>
    </Container>
  )
}

export default Footer
