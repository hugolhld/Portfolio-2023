import React from 'react'
import Reveal from './Reveal'

const TitleSection = ({title}) => {
  return (
    <div className='w-full'>
      <div className='w-max'>
        <Reveal>
            <h2 className='text-3xl text-start font-semibold text-white m-4'>
                {title}
            </h2>
        </Reveal>
      </div>
    </div>
  )
}

export default TitleSection