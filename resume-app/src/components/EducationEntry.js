import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    padding-bottom: 1em;
    margin-bottom: 1.5em;
    border-bottom: 1px solid #ccc;
  } 
`

const Institution = styled.span`
  margin-top: 0.7em;
`
const Course = styled.span`
  font-weight: 500;
  
`
const Duration = styled.span`
  font-size: 0.9em;
  font-weight: 400;
  font-style: italic;
`

function EducationEntry({ course, title, startDate, endDate }) {
  return (
    <Container>
      <Course>{title} · <Duration>{startDate} - {endDate}</Duration></Course>
      <Institution>{course}</Institution>
    </Container>
  )
}

export default EducationEntry
