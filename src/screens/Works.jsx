import React from 'react'
import TitleSection from '../components/TitleSection'
import cardinetImg from '../assets/cardinet.png'
import salouImg from '../assets/salou.png'
import portfolioImg from '../assets/portfolio.png'
import cocoImg from '../assets/cocoparks.png'

const Works = () => {
  return (
    <section id='works' className='w-full mx-auto md:mx-16 h-screen flex justify-center flex-col items-center snapelement'>

        <TitleSection title={'.Works'} />

        <ul className='w-4/5 flex flex-col gap-4'>
            <li>
                <button className='w-full relative '>
                    <div className={`w-full py-14 bg-cover`} style={{backgroundImage: `url(${portfolioImg})`}}>
                        <div className='absolute flex w-full h-full backdrop-blur-sm hover:backdrop-blur-none  items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center hover:text-opacity-0 transition-all'>
                            <span>
                                Portfolio - 2023
                            </span>
                        </div>
                    </div>
                </button>
            </li>
            <li>
                <a href='https://my-cardinet.com/' target='_blank' className='w-full relative '>
                    <div className={`w-full py-14 bg-cover`} style={{backgroundImage: `url(${cardinetImg})`}}>
                        <div className='absolute flex w-full h-full backdrop-blur-sm hover:backdrop-blur-none  items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center hover:text-opacity-0 transition-all'>
                            <span>
                                My Cardinet - Ekina - 2023
                            </span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href='https://www.youtube.com/watch?v=oKusBNQPXc0' target='_blank' className='w-full relative '>
                    <div className={`w-full py-14 bg-cover`} style={{backgroundImage: `url(${salouImg})`}}>
                        <div className='absolute flex w-full h-full backdrop-blur-sm hover:backdrop-blur-none items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center hover:text-opacity-0 transition-all'>
                            <span className='w-3/5 mx-auto'>
                                FPV OPERATOR FOR SOME MUSICAL CLIPS - 2022/3
                            </span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href='https://cocoparks.io/fr-fr' target='_blank' className='w-full relative '>
                    <div className={`w-full py-14 bg-cover`} style={{backgroundImage: `url(${cocoImg})`}}>
                        <div className='absolute flex w-full h-full backdrop-blur-sm hover:backdrop-blur-none items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center hover:text-opacity-0 transition-all'>
                            <span className='w-3/5 mx-auto'>
                                CREATE P.W.A. - COCOPARKS - 2020
                            </span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <button className='w-full relative '>
                    <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'></div>
                    <span className=' absolute w-full h-full pointer-events-none flex items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center'>
                        Your future project - NOW
                    </span>
                </button>
            </li>
        </ul>
    </section>
  )
}

export default Works