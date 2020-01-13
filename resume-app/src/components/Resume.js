import React from 'react'
import styled from 'styled-components'
import About from './About'
import Summary from './Summary'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Footer from './Footer'

const Container = styled.div`
  width: 210mm;
  padding: 35px 80px 20px 80px;
  margin: auto;
  background-color: #f5f5f5;
  color: #333;
`

function Resume() {
  return (
    <Container>
      <About />
      <Summary />
      <WorkExperience />
      <Education />
      <Footer />
    </Container>
  )
}

export default Resume
