import React, { useRef, useState } from 'react'
import menuSvg from '../assets/menu-outline.svg'
import { useEffect } from 'react'
import gsap from 'gsap'

const Header = () => {

    const headerRef = useRef()
    const menuRef = useRef()

    const navRef = useRef(null)
    const logoRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const topLeftStyleInit = 'w-full shadow-none'
    const topLeftStyleScroll = 'w-16 rounded-full py-8'
    const topRightStyleInit = 'w-full shadow-none'
    const topRightStyleScroll = 'rounded-full'

    const liDesktop = 'hover:font-semibold'
    const liMobile = 'hover:font-semibold w-full h-full text-center'

    let scrollY = window.scrollY
    let currentSection = 0
    let oldSection = 0

    window.addEventListener('scroll', () => {

        scrollY = window.scrollY
        const newSection = Math.round(scrollY / window.innerHeight)

        if(newSection != currentSection) {
            oldSection = currentSection
            currentSection = newSection

            menuRef.current.children[currentSection].classList.add('font-semibold')
            menuRef.current.children[oldSection].classList.remove('font-semibold')
        }

    })

    useEffect(() => {
      gsap.fromTo(logoRef.current, {yPercent: -200}, {yPercent: 0, duration: .7, delay: .25})
      gsap.fromTo(navRef.current, {yPercent: -150}, {yPercent: 0, duration: .7, delay: .5})
    }, [logoRef])
    

  return (
    <header ref={headerRef} className='w-full transition fixed z-20'>

        <div className={`hidden md:flex ${'py-8'} transition-all w-5/5 justify-between  mx-auto`}>

            <div ref={logoRef} className={`px-16 justify-center flex`}>
                {/* ${isScrolling ? topLeftStyleScroll : topLeftStyleInit} */}
                <div className={` ${topLeftStyleScroll} h-16 bg-black flex justify-center items-center transition-all`} style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                    <span className='text-white font-bold text-3xl text-center '>
                        H
                    </span>
                </div>
            </div>
            
            <div ref={navRef} className={` px-16 flex justify-center`} >
                {/* ${isScrolling ? topRightStyleScroll : topRightStyleInit} */}
                <div className={` ${topRightStyleScroll} transition-all bg-black flex items-center justify-center`} style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} >
                    
                    <ul ref={menuRef} className='text-white text-md flex gap-8 justify-around px-8 h-16 items-center rounded-full' /* style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} */>
                        <li className={liDesktop + ' font-semibold'}>
                            <a href="#home">
                                home
                            </a>
                        </li>
                        <li className={liDesktop}>
                            <a href="#works">
                                works
                            </a>
                        </li>
                        <li className={liDesktop}>
                            <a href="#skills">
                                skills
                            </a>
                        </li>
                        <li className={liDesktop}>
                            <a href="#about">
                                about
                            </a>
                        </li>
                        <li className={liDesktop}>
                            <a href="#contact">
                                say hi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={`${isOpen ? 'max-h-screen ' : 'max-h-16'} overflow-hidden flex md:hidden flex-col px-4 transition-all  duration-700`} style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
            <div className='flex justify-between'>
                <div className={`h-16 flex justify-center items-center transition-all`}>
                    <span className='text-white font-bold text-3xl text-center '>
                        H
                    </span>
                </div>
                <div className='h-16 flex items-center justify-center'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img src={menuSvg} alt="menu" className='w-12 h-12' style={{filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(102%) contrast(101%)'}} />
                    </button>
                </div>
            </div>
                <div className='w-full h-screen mt-32' >
                    <ul className='text-white text-md flex flex-col gap-8 justify-around px-8 h-16 items-center rounded-full' /* style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} */>
                        <li className={liMobile} onClick={() => setIsOpen(!isOpen)}>
                            <a href="#home">
                                home
                            </a>
                        </li>
                        <li className={liMobile} onClick={() => setIsOpen(!isOpen)}>
                            <a href="#works">
                                works
                            </a>
                        </li>
                        <li className={liMobile} onClick={() => setIsOpen(!isOpen)}>
                            <a href="#skills">
                                skills
                            </a>
                        </li>
                        <li className={liMobile} onClick={() => setIsOpen(!isOpen)}>
                            <a href="#about">
                                about
                            </a>
                        </li>
                        <li className={liMobile} onClick={() => setIsOpen(!isOpen)}>
                            <a href="#contact">
                                say hi
                            </a>
                        </li>
                    </ul>
                </div>
        </div>


        
    </header>
  )
}

export default Header