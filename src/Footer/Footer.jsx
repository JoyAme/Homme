import React from 'react'
import { FooterField, Roww} from './Foot'
import { Container, Rowwer } from '../Global'
import  HOME from './../../src/Images/homeey.png'


const Footer = () => {
  return (
    <>
    <FooterField>
        <Container>
            <div className='column'>
       <Rowwer className='Row'>
        <div className='foot-i'>
        <img src={HOME} alt='home' className='logo'/>
        <h4 className='Beauty'>Beautiful design is welcoming</h4>
        </div>

        <Roww>
        <div className='foot-it'>
        <h3 className='Title'>Services</h3>
        <ul>
        <li>Space Redesign</li>
        <li>Product Purchase</li>
        </ul>
        </div>

        <div className='foot-it'>
        <h3 className='Title'>Showcase</h3>
        <ul>
        <li>Residential Design</li>
        <li>Corporate Design</li>
        </ul>
        </div>

        <div className='foot-it'>
        <h3 className='Title' >website</h3>
        <ul>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        </ul>
        </div>

        <div className='foot-it'>
        <h3 className='Title'>Company</h3>
        <ul>
        <li>Contact Us</li>
        <li>Careers</li>
        </ul>
        </div>
        </Roww>

       </Rowwer>
       <hr></hr>

       <div className='Footer-bottom'>
        {/* <div className='icons'>
        <i class="fa fa-instagram" aria-hidden="true" className='icony'></i>
       <i class="fa fa-twitter" aria-hidden="true" className='icony' ></i>
       <i class="fa fa-facebook" aria-hidden="true" className='icony' ></i>
       <i class="fa fa-youtube" aria-hidden="true" className='icony'></i>
       </div> */}
       <h4>Copyrights.all right reserved</h4>
       </div>
      
        </div>
        </Container>
        
    </FooterField>
    
    </>
  )
}

export default Footer
