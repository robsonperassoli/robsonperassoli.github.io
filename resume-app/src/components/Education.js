import React from 'react'
import EducationEntry from './EducationEntry'
import Section from './Section'

function Education() {
  return (
    <Section title='Education'>
      <EducationEntry
        course='Universidade do Oeste de Santa Catarina'
        title='Post-Graduate, Software Engineering'
        startDate='2014'
        endDate='2016'
      />
      <EducationEntry
        course='Universidade Tecnológica Federal do Paraná'
        title='Internet systems and mobile apps specialist'
        startDate='2013'
        endDate='2013'
      />
      <EducationEntry
        course='Universidade do Oeste de Santa Catarina'
        title={`Bachelor's degree, Information Systems`}
        startDate='2008'
        endDate='2010'
      />

    </Section>
  )
}

export default Education
