import React from 'react'
import { Offe, Officee, Roller, Slide } from './Offix'
import { Container, Row } from '../Global'
import meetingrom from './../../src/Images/meetingrom.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import line from './../../src/Images/Line.png'



const Offic = () => {
  return (
    <>
    <Officee>
      

        <Container>
            <Roller>
    <div>
        <h4 className='intu'>intuitive interiors</h4>
        <p className='intui'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Eu scelerisque accumsan, a vestibulum eget velit.</p>
    </div>
    <div>
        <h6>arrow</h6>
    </div>
    </Roller>
        </Container>

        <Offe>
       <div className='right-side'>
            <div className='top'>
            <h3 className='topic'>aesthetic<br></br> office</h3>
            <p className='right-p'>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>

            <div className='center'>
            {/* <img src={line} alt='line'/> */}
            </div>

            <div className='end'>
            <h3 className='topi'>Conference room</h3>
            <p className='topi-p'>8 &times 16 feet</p>
            </div>
       </div>



        <div className='scroll'>
        <OwlCarousel className='owl-theme' loop items={1} nav={false} dots={false} >
        <Slide bg={meetingrom} />
        <Slide bg={meetingrom}/>
        {/* <img src={meetingrom} alt='room'/>
        <img src={meetingrom} alt='room'/>
        <img src={meetingrom} alt='room'/> */}
        </OwlCarousel>
        {/* </Container> */}
        </div>
        </Offe>
    </Officee>
    
    </>
  )
}

export default Offic
