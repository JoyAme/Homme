import React from 'react'
import { ClientFe, ClientFile } from './client'
import { Container } from '../Global'
import Nira from './../../src/Images/Nira.png'
import atica from './../../src/Images/Atica.png'
import Circle from './../../src/Images/Circle.png'
import Alab from './../../src/Images/ALab.png'
import Treva from './../../src/Images/Treva.png'
import Earth from './../../src/Images/Earth.png'
import { Roww } from '../Footer/Foot'

const Clientts = () => {
  return (
    <div>
      <ClientFe>
       <ClientFile>
        <Container>
            <div className='client'>
                <h3 className='client-name'>CLIENTS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Eu scelerisque accumsan,
                     a vestibulum eget velit.</p>
            </div>

            <Roww>
              <img src={Nira} alt='Nira' className='mages'/>
              <img src={atica} alt='Nira' className='mages'/>
              <img src={Circle} alt='Nira' className='mages'/>
              <img src={Alab} alt='Nira' className='mages'/>
              <img src={Treva} alt='Nira' className='mages'/>
              <img src={Earth} alt='Nira' className='mages'/>
            </Roww>
        </Container>
        
        </ClientFile> 
        </ClientFe>
    </div>
  )
}

export default Clientts
