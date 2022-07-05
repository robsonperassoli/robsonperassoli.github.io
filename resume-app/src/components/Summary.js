import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Text = styled.p`
  line-height: 1.2em;
  margin-bottom: 0.7em;
`

function Summary() {
  return (
    <Section title='Profile'>
      <Text>My name is Robson Gian Perassoli.</Text>
      <Text>I've been working with software development for the past 10+ years when I started building websites with PHP. Ever since I enjoyed learning and working with a wide variety of languages. Spending most of the early programming years with Java, then nodeJS, and recently I fell in love with Elixir and have focused my efforts on learning more about it, and using it professionally.</Text>
      <Text>Over the years I worked with a wide variety of tech stacks, using things like queue systems, NoSQL databases, search systems such as elasticsearch, and a variety of AWS products to scale and improve the products I was working on.</Text>
      <Text>Currently, I'm working as a fullstack elixir engineer using phoenix and GraphQL on the server-side and ReactJS on the client-side.</Text>
      <Text>To resume, I like to learn new technologies and be challenged with problems to solve.</Text>
      <Text>Github: https://github.com/robsonperassoli</Text>
    </Section>
  )
}

export default Summary
