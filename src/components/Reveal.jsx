import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const Reveal = ({children}) => {
  
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null)

    useEffect(() => {
        
        gsap.from(ref.current, {
            autoAlpha: 0,
            xPercent: -50
        })
        
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                // scrub: true,
                // toggleClass: 'triggerTest'
            },
            autoAlpha: 1,
            xPercent: 0,
            duration: .5,
            // ease: 'expo'
        })
    }, [ref])
    
  

    return (
    <div ref={ref} className='w-full'>
        {children}
    </div>
  )
}

export default Reveal