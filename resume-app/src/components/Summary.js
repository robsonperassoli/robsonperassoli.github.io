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
      <Text>I work with programming for more than 10 years, when I started with PHP, ever since, I had the opportunity to work with a lot of programming languages like Java, Javascript and most recently Elixir.</Text>
      <Text>Over the years I could work with very different pieces of tech, like queue systems, NoSQL databases, search systems such as elasticsearch and a variety of AWS products.</Text>
      <Text>In the last two years, I worked professionally as a full-stack javascript developer with nodejs and react. Aside dedicated my free time to learn more about elixir, phoenix, and GraphQL.</Text>
      <Text>My last efforts with elixir resulted in Atomic - an open source time tracking tool that i've created for learning purposes, feel free to check out the code in my Github repository (https://github.com/robsonperassoli/atomic).</Text>
      <Text>To resume, I really like to learn new technologies and be challenged with problems to solve.</Text>
    </Section>
  )
}

export default Summary
