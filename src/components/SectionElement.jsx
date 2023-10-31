import React, { useEffect } from 'react'

const SectionElement = ({children, id}) => {

    const sectionClass = id == 'home' ? 'flex justify-center mx-auto md:mx-0 items-center w-full md:h-screen snapelement' : 'w-full mx-auto md:mx-16 h-screen flex flex-col justify-center items-center snapelement'

    useEffect(() => {
      
    }, [id])
    

  return (
    <section id={id} className={sectionClass}>
        {children}
    </section>
  )
}

export default SectionElement