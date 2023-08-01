import React from 'react'

const scrollHooks = () => {
    let scrollY = window.scrollY
    let currentSection = 0


    window.addEventListener(('scroll'), () => {
        scrollY = window.scrollY
        const newSection = Math.round(scrollY / window.innerHeight)

        if(newSection != currentSection) {
            currentSection = newSection
        }

    })
    return currentSection

}

export default scrollHooks