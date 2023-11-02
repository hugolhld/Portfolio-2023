import React from 'react'
import Reveal from './Reveal'

const SkillElement = ({img, alt, link, name, bgDirection}) => {

  const bgFace = bgDirection == 'left' ? 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)' : bgDirection == 'right' ? 'linear-gradient(270.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)' : 'rgba(143, 29, 197)'
  const bgBack = bgDirection == 'left' ? 'linear-gradient(270.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)' : bgDirection == 'right' ? 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)' : 'rgba(143, 29, 197)'

  return (
      <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <Reveal delay={Math.random()}>
                <div className="relative w-32 h-32 m-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: bgFace, boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                    <div className="absolute inset-0">
                        <img src={img} alt={alt} className='w-full h-full p-4' />
                    </div>
                    <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: bgBack, boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                        <a href={link} target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                            {name}
                        </a>
                    </div>
                </div>
            </Reveal>
        </li>
  )
}

export default SkillElement