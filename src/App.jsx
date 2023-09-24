import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Header from './components/Header'
import Home from './screens/Home'
import Right from './components/Right'
import Works from './screens/Works'
import Globe from './components/GlobeComp'
import GlobeComp from './components/GlobeComp'
import Skills from './screens/Skills'

function App() {
  const [count, setCount] = useState(0)

  const [scrollOffset, setScrollOffset] = useState(0)

  const tetstt = useRef()

  const [countScroll, setcountScroll] = useState(0)
  // let countScroll = 0
  // window.addEventListener('scroll', (e) => {
  //   // console.log(window.scrollY)
  //   // console.log(window.screenY)
  //   // console.log(window.scrollTop)
  //   // console.log(window.innerHeight)
  //   // console.log(document.body.offsetHeight)
  //   // // console.log(window.)

    
  //   }
  // })

  const handleScroll = (e) => {

    // e.preventDefault()

    // if(window.scrollY > window.innerHeight) {
    //   console.log('++')
    // }
    // console.log(tetstt.current.scrollTop)
    // console.log(tetstt.current.children)
    // console.log(tetstt.current.childNodes)
    // if(tetstt.current.childNodes) {
    // }
    for(const el of tetstt.current.childNodes) {
      // console.log(el.offsetHeight)
      // console.log(el.scrollHeight)
      // console.log(el.clientHeight)
      // console.log(el.scrollTop)
      // console.log(tetstt.current.scrollTop)
      // console.log(el.offsetTop)
      if(Math.round(tetstt.current.scrollTop) >= el.offsetTop) {
        // console.log(el)
        el.style.background = 'blue'
        setcountScroll(countScroll + 1)
        // countScroll += 1
      } else {
        el.style.background = 'none'
      }
    }
  }

  const scrollPercentage = () => {
    // console.log(Math.floor(window.scrollY - (window.innerHeight / document.querySelector('#scrollContainer').offsetHeight) * 100))
    console.log(Math.floor(window.scrollY / (document.body.offsetHeight - window.innerHeight ) * 100))
    console.log(window.innerHeight)
    console.log(document.body.offsetHeight)
    console.log(tetstt.current.offsetHeight)
    // console.log(Math.floor( - Math.floor(tetstt.current.scrollTop) / (document.body.offsetHeight - window.innerHeight ) * 100))
    // console.log(tetstt.current.offsetHeight - window.innerHeight)
    // console.log(Math.floor(Math.floor(tetstt.current.scrollTop) / (tetstt.current.offsetHeight - window.innerHeight ) * 100))
    // console.log(Math.floor(tetstt.current.scrollTop))
    // let scrollTop = window.scrollY;
    // let docHeight = document.body.offsetHeight;
    // let winHeight = window.innerHeight;
    // let scrollPercent = scrollTop / (docHeight - winHeight);
    // let scrollPercentRounded = Math.round(scrollPercent * 100);
    // // console.log(document.querySelector('#scrollContainer').scrollY)
    // // console.log(window.scrollY)
    // console.log(scrollPercentRounded)
  }

  // window.addEventListener('scroll', scrollPercentage)

  return (
    <>
      <Background />
      {/* <div className='w-full absolute z-10'> */}
        <Header />
        <main className=' '>
          <div className="first__section flex relative">
            <div ref={tetstt} id='scrollContainer' className="snapcontent left-content w-1/2 "/*max-h-screen overflow-scroll */>
              <Home />
              <Works />
              <Skills />
              <Works />
            </div>
            <div className='right-content absolute right-0  w-1/2'>
              <Right mainRef={tetstt} countScroll={countScroll} />
            </div>
          </div>
          <div className="second__section flex relative">
            <div className='w-1/2'>
              <Works />
            </div>
            <div className='w-1/2 flex justify-center overflow-hidden'>
              <GlobeComp />
            </div>
          </div>
        </main>
    </>
  )
}

export default App
