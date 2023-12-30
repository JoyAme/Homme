import React from 'react'
import { ContainerOne, ContainerTwo, ExploreWrap , Iccon, Icon, Slider } from './Explore'
import { Container, Row } from '../Global'
import chair from './../../src/Images/chair.png'
import shelf from './../../src/Images/shelf.png'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useRef} from 'react'

const Explora = () => {
  const OwlSet=useRef();
  return (
    <>
    <ExploreWrap>
        <Container>
            <div className='explore-D'>
                <h1>Explore Design</h1>
                <p className='explore-p'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. 
                  Eu scelerisque accumsan, a vestibulum eget velit</p>
            </div>
            <Row>
            <ContainerOne>
                <ContainerTwo>
                <OwlCarousel className='owl-theme' loop items={1} nav={false} dots={false} ref={OwlSet}>
                  <Slider bg={shelf}/>  
                  <Slider bg={chair}/>
                  
                </OwlCarousel>
                </ContainerTwo>
                <Icon className='move-icon'>  
                  <FeatherIcon icon='chevron-left' className='icon-slide' onClick={()=>OwlSet.current.prev()}/>
                  <FeatherIcon icon='chevron-right' className='icon-slide'onClick={()=>OwlSet.current.next()} />
                </Icon>
                <div class='info'>
                <h4 className='names'>Residential Designs </h4>
                <div><hr></hr></div>
                </div>
              </ContainerOne>

              <ContainerOne>
                <ContainerTwo>
                <OwlCarousel className='owl-theme' loop items={1} nav={false} dots={false}>
                  <Slider bg={chair}/>  
                </OwlCarousel>
                </ContainerTwo>
                <Iccon className='move-icon'>  
                  <FeatherIcon icon='chevron-left' className='icon-slide' onClick={()=>OwlSet.current.prev()}/>
                  <FeatherIcon icon='chevron-right' className='icon-slide'/>
                </Iccon>

                <div class='info'>
                <h4 className='names'>Coorperate Designs </h4>
                <div><hr></hr></div>
                </div>
              </ContainerOne>

            </Row>
        </Container>

    </ExploreWrap>
    </>
  )
}

export default Explora
