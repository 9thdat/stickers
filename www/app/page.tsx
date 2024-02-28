'use client'

import { useEffect } from 'react'

export default function Home() {
  document.onload = () => {
    const handLeft = document.getElementById('hand-left') as HTMLImageElement
    const handRight = document.getElementById('hand-right') as HTMLImageElement

    const handleScroll = () => {
      const scrollY = window.scrollY
      const handLeftBottom = scrollY * 0.1
      const handRightBottom = scrollY * 0.1

      handLeft.style.bottom = `-${handLeftBottom}px`
      handRight.style.bottom = `-${handRightBottom}px`
    }
  }

  return (
    <main className="select-none flex relative min-h-screen flex-col bg-[url('/texture.png')] overflow-hidden items-center justify-between p-24 bg-white">
      <figure className='absolute w-[80%] sm:w-[500px] md:w-[700px] items-center h-auto top-[15%] md:top-[10%] flex gap-[100px] md:gap-[50px] flex-col'>
        <img src='/banner.png' alt='Stickers Club' className='w-full h-full' />
        <img src='/download-buttons.png' alt='Downloads' className='w-full md:w-[70%] h-auto' />
      </figure>

      <img
        id='hand-left'
        src='/hand-left.png'
        alt='Hand'
        className='absolute z-10 w-fit h-[100vh] origin-bottom origin-bottom -bottom-10 left-0 lg:left-[15%] xl:left-[20%] 2xl:left-[25%] rotate-reverse'
      />
      <img
        id='hand-right'
        src='/hand-right.png'
        alt='Hand'
        className='absolute z-10 w-fit h-[100vh] origin-bottom -bottom-10 right-0 lg:right-[15%] xl:right-[20%] 2xl:right-[25%] rotate'
      />

      <footer className='absolute bottom-10'>
        <a href='https://twitter.com/get_stickers' target='_blank' className='text-black text-base underline'>
          @get_stickers
        </a>
      </footer>
    </main>
  )
}
