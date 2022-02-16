import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import Navbar from '../components/Navbar'
import { darkmode } from '../atoms/darkModeAtom'
import Hero from '../components/Hero'

export default function Home() {

  const DarkMode = useRecoilValue(darkmode)

  return (
    <div className={` ${DarkMode ? 'dark' : ''} box-border scroll-smooth`}>

      <style jsx global>
        {`
        body{background-color:${DarkMode ? '#1b2536' : '#dbeaff'}}
        `}
      </style>

      {/* NavBar */}
      <Navbar className='sticky' />

      {/* Header */}
      <Hero />

      {/* Content */}
    </div>
  )
}
