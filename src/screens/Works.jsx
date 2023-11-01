import React from 'react'
import TitleSection from '../components/TitleSection'
import cardinetImg from '../assets/cardinet.png'
import salouImg from '../assets/salou.png'
import portfolioImg from '../assets/portfolio.png'
import cocoImg from '../assets/cocoparks.png'
import WorkElement from '../components/WorkElement'
import SectionElement from '../components/SectionElement'
import Reveal from '../components/Reveal'

const Works = () => {
  return (
    <SectionElement id='works'>

    {/* // <section id='works' className='w-full mx-auto md:mx-16 h-screen flex justify-center flex-col items-center snapelement'> */}
        {/* <Reveal> */}
            <TitleSection title={'.Works'} />
        {/* </Reveal> */}
        <ul className='w-4/5 flex flex-col gap-4'>
            
            <WorkElement 
                link={'#'}
                img={portfolioImg}
                text={'Portfolio - 2023'}
            />
        
            <WorkElement 
                link={'https://my-cardinet.com/'}
                img={cardinetImg}
                text={'My Cardinet - Ekina - 2023'}
            />

            <WorkElement 
                link={'https://www.youtube.com/watch?v=oKusBNQPXc0'}
                img={salouImg}
                text={'FPV OPERATOR FOR SOME MUSICAL CLIPS - 2022/3'}
            />

            <WorkElement 
                link={'https://cocoparks.io/fr-fr'}
                img={cocoImg}
                text={'CREATE P.W.A. - COCOPARKS - 2020'}
            />

            {/* <WorkElement 
                link={''}
                text={'Your future project - NOW'}
            /> */}
            <Reveal>
                <li>
                    <button className='w-full relative '>
                        <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'></div>
                        <span className=' absolute w-full h-full pointer-events-none flex items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center'>
                            Your future project - NOW
                        </span>
                    </button>
                </li>
            </Reveal>
        </ul>
    {/* // </section> */}
    </SectionElement>

  )
}

export default Works