import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { Cover, Links, Nabar, Nabbar} from './Component'
import Button from './Button'
import  HOMME from './Images/Hoome.png'
import { Container } from './Global'
import FeatherIcon from 'feather-icons-react';

const Navbar = () => {
  const [show,setShow]=useState(false)


  return (
    <div>
<Nabar type='primary'>
  <Container>
    <Nabbar>
      
        <div>
            <img src={HOMME} alt='home' className='logo'/>
        </div>
        
        
        <Links className={show && 'show'}>
        <ul >
        <li><Link to='/' >Design</Link></li>
        <li><Link to='/interior' >Interior</Link></li>
        <li><Link to='/case' >Case Studies</Link></li>
        <li><Link to='/section' >clients</Link></li>
        </ul>
        </Links>
        
        
         <div>
            <Cover className={show && 'show'} >
            <Button varaint='text'>sign-in</Button>
            <Button type='primary'>sign-up</Button>
            </Cover>
        
        </div>
        <FeatherIcon icon={show ? "x":"menu"}
        className='menu-icon' 
        onClick={()=>setShow(!show)}
        />

        </Nabbar>
        </Container>
</Nabar>

    </div>
   
  )
}

export default Navbar
