import React from 'react'
import Section from './Section'
import Job from './Job'

function WorkExperience() {
  return (
    <Section title='Professional Experience'>
      <Job
        position='Software Engineer'
        company='HelloMD'
        description={[
          'At helloMD I worked most of the time as a frontend engineer using react, redux and styled-components.',
          'In this time I was able to work a long time refactoring the checkout and online consultation processes improving the code architecture and modularity using react hooks with modern react best practices.',
          'Worked part of the time as a back-end engineer on a nodejs based microservices architecture.'
        ]}
        location='Remote'
        startDate='November 2018'
        endDate='October 2019'
      />
      <Job
        position='Lead Developer'
        company={`DB'links Sistemas`}
        description={[
          'Worked on a multi-tenant e-commerce app using React on the front-end and nodeJS with GraphQL on the backend.',
          'Navigated on several areas, from AWS servers configuration, deployment, front-end and back-end architecture and engineering.'
        ]}
        location='Remote'
        startDate='April 2017'
        endDate='September 2018'
      />
      <Job
        position='Senior Full-Stack developer'
        company='Integritas Solutions, Inc'
        description={[
          'Worked in the development of the aimswebPlus platform using a microservices architecture with Java, Spring Boot and EmberJS, along with other technologies such as Redis, ActiveMQ, and MYSQL.'
        ]}
        location='Remote'
        startDate='July 2015'
        endDate='June 2017'
      />
      <Job
        position='Software Developer'
        company={`DB'links Sistemas`}
        description={[
          'Development  of an api to integrate e-commerce and third party back-office systems.',
          'Development of mobile app for grocery shopping.',
          'Creation and maintenance of a scalable platform to deploy the multi-tenancy e-commerce application.',
          'Improve code to perform better in large scale.'
        ]}
        location='São Miguel do Oeste/SC'
        startDate='September 2013'
        endDate='July 2015'
      />
      <Job
        position='Java Programming Instructor'
        company='Universidade do Oeste de Santa Catarina'
        description={[
          'Lead the programming practice class, teach and implement object oriented concepts and best practices using Java.'
        ]}
        location='São Miguel do Oeste - Santa Catarina'
        startDate='February 2014'
        endDate='August 2014'
      />
      <Job
        position='Web Developer and Analyst'
        company='Microsys Sistemas Ltda'
        description={[
          'Develop and architect a sales application using PHP(Zend framework) and Adobe Flex (V1), and Java EE with Hibernate e JavaServer Faces (V2).'
        ]}
        location='Maravilha - Santa Catarina'
        startDate='August 2010'
        endDate='September 2013'
      />
      <Job
        position='Tech lab Assistant'
        company='Universidade do Oeste de Santa Catarina'
        description={[
          'Worked most of the time building and maintaining linux servers such as samba, apache and squid.',
          'Created a reservation app to be used by teachers to schedule lab time for their classes, using PHP and mysql.'
        ]}
        location='São Miguel do Oeste - Santa Catarina'
        startDate='March 2009'
        endDate='July 2010'
      />
    </Section>
  )
}

export default WorkExperience
