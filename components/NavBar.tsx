import type { NextPage } from 'next'
import { useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import {FaSun} from "react-icons/fa"
import {BsMoonStarsFill} from 'react-icons/bs'

const NavBar: NextPage = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setmounted] = useState(false)

  const navTabs = [
    {
      route: "/",
      label: "Tools"
    },
    {
      route : "/",
      label : "Blog"
    },
    {
      route: "/",
      label: "Discounts"
    },
  ]


  const renderThemeChanger = ()=>{
    if (!mounted) {
      return null
    }
    const currentTheme = theme === 'system' ? systemTheme : theme
    console.log(currentTheme)

    if (currentTheme === "dark") {
      console.log("here")
      return (
        <FaSun className='w-[25px] h-[25px]' color='white' role='button' onClick={() => setTheme('light')} />
      )
    }
    else{
      console.log("here")
      return (
        <BsMoonStarsFill className='w-[25px] h-[25px]' color='white' role='button' onClick={() => setTheme('dark')} />
        )
      
    }
    
  }

  useEffect(()=>{
    console.log("useffect")
    setmounted(true)
  }, [])

  return (
    <div>
      <div className='bg-[#343038] h-[67px] shadow-lg flex flex-row justify-between items-center'>
        <title>Web3Pedia</title>
        
          <Link href="/">
            <a className='text-white text-xs ml-[25px]'>Web3Pedia</a>
          </Link>

          <ol className='flex' >
            {navTabs.map((tab, index)=>{
              return(
                <li key={index} className='mx-6 my-[10px]'>
                  <Link href={tab.route}>
                  <a className='text-white'>{tab.label}</a>
                  </Link>
                </li>
              )
            })}
            <li className='mx-6 my-[10px]'>
              <div>
                  {renderThemeChanger()}
                </div>
            </li>
            <li className='border-[1px] border-white mx-3 my-[10px]'>
            </li>
            <li className='mx-6 my-[10px]'>
              <Link href="/">
                <a className='text-white font-bold'>Login</a>
              </Link>
            </li>
            <li className='mx-6 '><button className='text-white bg-[#7A00FF] px-[24px] py-[12px] rounded md:rounded-md'>Sign Up</button></li>
          </ol>
        </div>
    </div>
  )
}

export default NavBar