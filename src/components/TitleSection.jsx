import React from 'react'
import Reveal from './Reveal'

const TitleSection = ({title}) => {
  return (
    <Reveal>
      <h2 className='text-3xl text-start font-semibold text-white p-4 w-full'>
          {title}
      </h2>
    </Reveal>
  )
}

export default TitleSection