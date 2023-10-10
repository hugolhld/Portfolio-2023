import React from 'react'
import TitleSection from '../components/TitleSection'

const About = () => {
  return (
    <section id='about' className='w-full mx-16 h-screen flex flex-col justify-center items-center snapelement'>
        {/* <h2 className='text-3xl text-start font-semibold text-white p-16'>.About</h2> */}
        <TitleSection title={'.About'} />
        <div className='w-24 h-24 rounded-full bg-black p-4 my-8'>
            h
        </div>
        <div className='w-4/5 mx-auto'>
          <p className='text-white'>
            Bonjour, je me présente je m’appelles <span className='font-bold'>Hugo</span>, je suis développeur <span className='font-bold'>front junior</span> faisant aussi du back mais moins poussé.  
            Je suis à l’aise avec pas mal de frameworks comme vous pouvez le voir dans la section <a href="#skills" className='font-bold underline'>Skills</a> et bien d’autres encore, je suis curieux avec la soif d’apprendre, de découvrir de nouvelles compétences et méthodes de travail ! C’est pour cela que je serai heureux de vous accompagner dans tout types de projets afin d’élargir mes compétences et propulser votre / vos projets.
            J’ai pu suivre plusieurs formations tel que celle Grand école à HETIC, ThreeJS Journey de Bruno Simon …
          </p>
        </div>
    </section>
  )
}

export default About