import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const SectionElement = ({children, id}) => {

    const ref = useRef(null)

    const sectionClass = id == 'home' ? 'flex justify-center mx-auto md:mx-0 items-center w-full md:h-screen snapelement  transition-opacity' : 'w-full mx-auto md:mx-16 h-screen flex flex-col justify-center items-center snapelement  transition-opacity'

    // const zeubClass ='okok okokok okokokko'


    // useEffect(() => {

    //     if(ref !== null) {
    //         const windowHeight = window.innerHeight
    //         const elementTop = ref.current.getBoundingClientRect().top
    //         const elementVisible = 150

    //         if(elementTop < windowHeight - elementVisible) {
    //             ref.current.classList.add('active')
    //         } else {
    //             ref.current.classList.remove('active')
    //         }
    //     }

    // }, [ref])

    // const revealFunction = () => {
    //     console.log('ok')
    //     // console.log(ref)
    //     if(ref !== null) {
    //         const windowHeight = window.innerHeight
    //         const elementTop = ref.current.offsetTop
    //         // const elementTop = ref.current.getBoundingClientRect().top
    //         const elementVisible = 150

    //         console.log(windowHeight)
    //         console.log(elementTop)
    //         console.log(windowHeight - elementVisible)

    //         if(elementTop < windowHeight) {
    //             ref.current.classList.add('opacity-1')
    //             ref.current.classList.remove('opacity-0')

    //         } /* else {
    //             ref.current.classList.add('opacity-0')
    //             ref.current.classList.remove('opacity-1')
    //         } */
    //     }
    // }

    // window.addEventListener('scroll', () => revealFunction())

    // useEffect(() => {
    //   gsap.to(ref)
    // }, [])
    

    

    // let scrollY = window.scrollY
    // let currentSection = 0
    // let oldSection = 0

    // window.addEventListener('scroll', () => {

    //     scrollY = window.scrollY
    //     const newSection = Math.round(scrollY / window.innerHeight)

    //     if(newSection != currentSection) {
    //         oldSection = currentSection
    //         currentSection = newSection

    //         menuRef.current.children[currentSection].classList.add('active')
    //         // menuRef.current.children[oldSection].classList.remove('font-semibold')
    //     }

    // })

    return (
        <section ref={ref} id={id} className={sectionClass}>
            {children}
        </section>
    )
}

export default SectionElement