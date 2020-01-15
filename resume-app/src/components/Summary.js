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
      <Text>My name is Robson Gian Perassoli, I'm graduated in Information Systems at UNOESC and fascinated about software development and technology.</Text>
      <Text>I work with programming since 2008 when I started with PHP, ever since, I had the opportunity to work with a lot of programming languages and frameworks like Flex/Actionscript, Java, nodejs and sometimes Ruby/Rails and Elixir.</Text>
      <Text>Over the years I had the chance to work with very different pieces of tech, like queue systems, nosql databases, search systems such as elasticsearch, amazon aws products, and many others.</Text>
      <Text>In the last two years, I worked professionally with nodejs and react and dedicated my free time to learn more about elixir, phoenix and graphql.</Text>
      <Text>My last efforts with elixir resulted in Atomic - an open source time tracking tool that I've created for learning purposes, feel free to check out the code in my <a href='https://github.com/robsonperassoli/atomic'>Github repository</a> (github.com/robsonperassoli/atomic).</Text>
      <Text>To resume, I really like to learn new technologies and be challenged with problems to solve.</Text>
    </Section>
  )
}

export default Summary
