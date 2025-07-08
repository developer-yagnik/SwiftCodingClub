
import Footer from '@/components/Footer'
import { AppleCardsCarouselDemo } from '@/pages/AppleCardsCarouselDemo'
import { CardHoverEffectDemo } from '@/pages/CardHoverEffectDemo'
import { BackgroundLinesDemo } from '@/pages/Hero'
import { HeroScrollDemo } from '@/pages/HeroScrollDemo'
import { InfiniteMovingCardsDemo } from '@/pages/InfiniteMovingCardsDemo'
import { NavbarDemo } from '@/pages/NavbarDemo'


import React from 'react'

const page = () => {
  return (
    <>
      <NavbarDemo />
      <BackgroundLinesDemo />
      <HeroScrollDemo/>
      <AppleCardsCarouselDemo/>
      <InfiniteMovingCardsDemo/>
      <CardHoverEffectDemo/>
      <Footer/>
    </>
  )
}

export default page