import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const Reveal = ({children, delay, width}) => {
  
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null)
    const absoluteRef = useRef(ref)

    const delayValue = delay ? parseFloat(delay) : .5

    useEffect(() => {
        
        gsap.from(ref.current, {
            opacity: 0,
            yPercent: 80
        })
        
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
            },
            opacity: 1,
            yPercent: 0,
            duration: .5,
            delay: .5
        })

        gsap.from(absoluteRef.current, {
            left: 0
        })

        gsap.to(absoluteRef.current, {
            scrollTrigger: {
                trigger: ref.current
            },
            left: '100%',
            duration: 0.5,
            delay: 0.2 + delayValue
        })
        console.log(width)

    }, [ref])
    
  

    return (
    <div ref={ref} className={`${width === true ? 'w-full' : 'w-max'} relative overflow-hidden opacity-0`}>
        {children}
        <div ref={absoluteRef} className='absolute w-full h-full top-0 bottom-2  z-10 bg-[#8f1dc5]' /* style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)'}} */>

        </div>
    </div>
  )
}

export default Reveal