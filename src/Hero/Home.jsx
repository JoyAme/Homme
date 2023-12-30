import React from 'react'
import { Buton} from '../Component'
import Heroimg from './../../src/Images/hero-img.png'
import { Container, Row } from '../Global'
import { Design, Homme } from './Hero'
import Marquee from "react-fast-marquee";
import star from './../../src/Images/Star.png'
import Explora from '../Explore/Explora'
import Casee from '../Case/Casee'
import Clients from '../Clients/Clientts'
import Offic from '../Office/Offic'






const Home = () => {
  return (
    <>
    <Homme>
      <Container>
     <Row>
       
        <Design>
          <div>
          <h1 className='Design'>DESIGN YOUR DREAM HOME</h1>
          <p className='Design-i'>Lorem ipsum dolor sit amet consectetur . Quia doloremque 
            Quaerat magni hic maiores eius.t sunt?</p>
            <Buton type='primary'>Explore Gallery</Buton>
            </div>
        </Design>
      <div>
        <img src={Heroimg} alt="house" className='heroimg'/>
        </div>
    </Row>
    </Container>

    <Marquee className='marq'>
    <h1 className='text'>MODERN DESIGN</h1>
    <img src={star} alt='star' className='star'/>
    <h1 className='text'>MODERN DESIGN</h1>
    <img src={star} alt='star' className='star'/>
    </Marquee>
    </Homme>

    <Explora/>
    <Offic/>
    <Casee/>
  <Clients/>
    {/* <Modern>
      <div>
    <h2>MODERN DESIGN</h2>
    </div>
    <div>
    <i class="fa-solid fa-star-half"></i>
    </div>
    <div>
    
    </div>
    </Modern> */}
   
</>
  )
}

export default Home
