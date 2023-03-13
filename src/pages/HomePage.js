import React, { Component } from 'react'
import { Navbar, NavLogo } from '../styled-components/SC-Navbar'
import {HeroSection} from '../styled-components/SC-Page-Components'

export default class HomePage extends Component {
  render() {
    return (
      <>
      <Navbar>
        <NavLogo>Lnza.me</NavLogo>
      </Navbar>
        <HeroSection className='flex flex-column align-items-center md:align-items-start justify-content-center my-8 py-8'>
          <div className='grid w-full mx-auto align-items-center justify-content-center'>
            <div className='col-12 md:col-6'>
              <h1>Music <span>Solutions</span></h1>
              <p className='mb-1'>Websites • One Sheets • Online Prescence</p>
              <p className='uppercase text-sm mt-0 mb-4'>Ricardo Bautista</p>
              <a href="mailto:rickyhaswifi@gmail.com" target='_blank' rel="noreferrer" className='no-underline uppercase text-2xl'>Contact</a>
            </div>
            <div className='col-12 md:col-6'>
              <a href='https://madeintyo.lnza.me/' target='_blank' rel="noreferrer" style={{backgroundColor: 'transparent'}}>
                <img src="img/phone-cards.png" alt="" className='block w-full'></img>
              </a>
            </div>      
          </div>
        </HeroSection>
        {/* <Sheets /> */}
      </>
    )
  }
}
