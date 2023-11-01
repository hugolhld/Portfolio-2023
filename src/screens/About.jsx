import React from 'react'
import TitleSection from '../components/TitleSection'
import hugoImg from '../assets/hugoo.jpg'
import SectionElement from '../components/SectionElement'
import Reveal from '../components/Reveal'

const About = () => {
  return (
    <SectionElement id={'about'}>

        <TitleSection title={'.About'} />

          <div className='w-64 h-64 rounded-full  p-4 my-8'>
            <Reveal>
              <img src={hugoImg} alt="profile" className='w-full h-full rounded-full' />
            </Reveal>
          </div>

        <Reveal>
          <div className='w-4/5 mx-auto'>
            <p className='text-white xl:text-lg 2xl:text-xl'>
              Hi, my name's <span className='font-bold'>Hugo</span>, and I'm a <span className='font-bold'>junior front-end developer</span> who also does back-end work, but with less depth.
              I'm at ease with a lot of frameworks as you can see in the <a href="#skills" className='font-bold underline'>Skills</a> section and many others, I'm curious with a thirst for learning,
              discovering new skills and working methods! That's why I'll be happy to help you with any kind of project, to broaden my skills and give your project a boost. I've taken several training courses,
              including the Grand école at HETIC, Bruno Simon's ThreeJS Journey ...
            </p>
          </div>
        </Reveal>

    </SectionElement>
  )
}

export default About