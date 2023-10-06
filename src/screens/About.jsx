import React from 'react'
import TitleSection from '../components/TitleSection'

const About = () => {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center snapelement'>
        {/* <h2 className='text-3xl text-start font-semibold text-white p-16'>.About</h2> */}
        <TitleSection title={'.About'} />
        <div className='rounded-full p-4'>
            h
        </div>
        <div>
          <p>
            Hello js'uis hugo
          </p>
        </div>
    </section>
  )
}

export default About