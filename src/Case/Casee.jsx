import React from 'react'
import { Container } from '../Global'
import { CaseFile } from './Casse'

import apartment from './../../src/Images/apartment.png'

const Casee = () => {
  return (
    <>
      <CaseFile>
        <Container>
            <div className='client'>
                <h1>Case Study</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Eu scelerisque accumsan, a vestibulum eget velit</p>
            </div>
            <div>
              <img src={apartment} alt='apartment'/>

            <div className='Lounge'>
              <h4>Lounge Re-Design</h4>
              <p>Learn More</p>
            </div>

            </div>
        </Container>
        </CaseFile>
      
    </>
  )
}

export default Casee
