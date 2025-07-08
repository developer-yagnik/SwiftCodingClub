
import Footer from '@/components/Footer'
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { BackgroundLinesDemo } from '@/components/Hero'
import { HeroScrollDemo } from '@/components/HeroScrollDemo'
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo'
import { NavbarDemo } from '@/components/NavbarDemo'


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