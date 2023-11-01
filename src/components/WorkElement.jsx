import React from 'react'
import Reveal from './Reveal'

const WorkElement = ({link,  text, img}) => {

    // Hover span pour div

  return (
    <Reveal>
        <li>
            <a href={link} target={link != '#' || link == '' && `_blank`} className='w-full relative '>
                <div className={`w-full py-14 bg-cover `} style={{backgroundImage: `url(${img})`}}>
                    <div className='absolute flex w-full h-full backdrop-blur-sm hover:backdrop-blur-none  items-center justify-center top-0 left-0 font-semibold text-white text-lg text-center hover:text-opacity-0 transition-all'>
                        <span>
                            {text}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    </Reveal>
  )
}

export default WorkElement