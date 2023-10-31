import './App.css'
import { useRef, useState } from 'react'
import Background from './components/Background'
import Header from './components/Header'
import Home from './screens/Home'
import Right from './components/Right'
import Works from './screens/Works'
import GlobeComp from './components/GlobeComp'
import Skills from './screens/Skills'
import gitLogo from './assets/github-eva.svg'
import mailLogo from './assets/mail.svg'
import Form from './screens/Form'
import About from './screens/About'
import Footer from './components/Footer'

function App() {

  const tetstt = useRef()

  const [countScroll, setcountScroll] = useState(0)


  return (
    <>
      <Background />
        <Header />
        <main>
          <div className="first__section flex-col-reverse md:flex-row flex relative">
            <div ref={tetstt} id='scrollContainer' className="snapcontent left-content w-4/5 mx-auto md:mx-0 md:w-1/2 "/*max-h-screen overflow-scroll */>
              <Home />
              <Works />
              <Skills />
              <About />
            </div>
            <div className='right-content w-full h-[50vh] relative md:absolute md:right-0 md:h-[100vh] overflow-hidden md:w-1/2'>
              <Right mainRef={tetstt} countScroll={countScroll} />
            </div>
          </div>
          <div className="second__section flex-col-reverse md:flex-row flex relative">
            <div className='w-4/5 mx-auto md:mx-0 md:w-1/2'>
              <Form />
            </div>
            <div className='w-full mx-auto md:h-screen md:mx-0 md:w-1/2 flex justify-center overflow-hidden'>
              <GlobeComp />
            </div>
          </div>
          <div className='hidden fixed bottom-0 right-0 z-10 md:flex my-8 mx-16'>
            <a href='https://www.github.com/hugolhld' target='_blank' rel='noreferrer' className="p-4 rounded-full mx-4 transition-all hover:animate-bounce" style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <img src={gitLogo} alt="github logo" className='w-12 h-12' style={{filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(102%) contrast(101%)'}}/>
            </a>
            <a href='mailto:hugo.lhernould@gmail.com' className="p-4 rounded-full mx-4 hover:animate-bounce" style={{background: 'linear-gradient(270.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <img src={mailLogo} alt="mail logo" className='w-12' style={{filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(19deg) brightness(102%) contrast(101%)'}} />
            </a>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default App
