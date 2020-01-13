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
const Date = styled.span`
  font-size: 0.8em;
  margin-bottom: 0.2em;
`
const Position = styled.span`
  font-weight: 500;
  margin-bottom: 0.3em;
`
const Location = styled.span`
  font-size: 0.8em;
`
const Description = styled.div`
  margin-top: 0.7em;
`

const Text = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
`

function Job({ company, position, location, startDate, endDate, description }) {
  return (
    <Container>
      <Position>{position} at {company}</Position>
      <Date>{startDate} - {endDate}</Date>
      <Location>{location}</Location>
      <Description>{description.map((text, i) => <Text key={i}>{text}</Text>)}</Description>
    </Container>
  )
}

export default Job
