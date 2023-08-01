import React, { useRef, useState } from 'react'

const Header = () => {

    const headerRef = useRef()
    const [isScrolling, setIsScrolling] = useState(false)

    const topLeftStyleInit = 'w-full shadow-none'
    const topLeftStyleScroll = 'w-16 rounded-full py-8'
    const topRightStyleInit = 'w-full shadow-none'
    const topRightStyleScroll = 'rounded-full'

    window.addEventListener('wheel', e => {
        // if(e.del)
        if(headerRef.current) {
            if(window.scrollY > headerRef.current.offsetTop) {

                headerRef.current.children[0].classList.add('w-5/5')
                // headerRef.current.classList.add('my-8')
                // headerRef.current.children[0].children[0].classList.add('w-16')
                // headerRef.current.children[0].children[0].classList.add('rounded-full')
                // headerRef.current.children[0].children[0].classList.remove('w-1/3')
                // headerRef.current.children[0].children[1].classList.add('rounded-full')
                // headerRef.current.children[0].children[1].classList.remove('w-2/3')
                headerRef.current.children[0].classList.remove('w-5/5')

                setIsScrolling(true)
            } else {
                setIsScrolling(false)
                // headerRef.current.classList.remove('my-8')
                
                // headerRef.current.children[0].children[0].classList.remove('w-16')
                // headerRef.current.children[0].children[0].classList.add('w-1/3 rounded-none')
                // // headerRef.current.children[0].children[0].classList.remove('w-')
                // headerRef.current.children[0].children[1].classList.add('w-2/3 rounded-none')
                headerRef.current.children[0].classList.remove('w-5/5')
                headerRef.current.children[0].classList.add('w-5/5')

            }
            console.log(window.scrollY > headerRef.current.offsetTop)
        }
    })


  return (
    <header ref={headerRef} className='w-full transition fixed z-20'>

        <div className={`${isScrolling && 'py-8'} transition-all w-5/5 flex  mx-auto`}>

            <div className={`w-1/3 justify-center flex`}>
                <div className={` ${isScrolling ? topLeftStyleScroll : topLeftStyleInit} h-16 bg-black flex justify-center items-center transition-all`} style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                    <span className='text-white font-bold text-3xl text-center '>
                        H
                    </span>
                </div>
            </div>
            
            <div className={` w-2/3 flex justify-center`} >

                <div className={` ${isScrolling ? topRightStyleScroll : topRightStyleInit} transition-all bg-black flex items-center justify-center`} style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} >
                    
                    {/* 
                    
                        add bg to ul and padding tp div
                    
                    */}
                    
                    <ul className='text-white text-md flex gap-8 justify-around px-8 h-16 items-center rounded-full' /* style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} */>
                        <li className='font-semibold hover:cursor-pointer'>home</li>
                        <li className='hover:font-semibold hover:cursor-pointer transition-all'>works</li>
                        <li className='hover:font-semibold hover:cursor-pointer transition-all'>skills</li>
                        <li className='hover:font-semibold hover:cursor-pointer transition-all'>about</li>
                        <li className='hover:font-semibold hover:cursor-pointer transition-all'>say hi</li>
                    </ul>
                </div>
            </div>
        </div>


        
    </header>
  )
}

export default Header