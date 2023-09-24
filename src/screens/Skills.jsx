import React from 'react'
import reactImg from '../assets/react.svg'
import tailwindImg from '../assets/tailwind.svg'
import threeImg from '../assets/threejs.svg'
import rapierImg from '../assets/rapier.svg'
import firebaseImg from '../assets/firebase.svg'
import githubImg from '../assets/github.svg'

const Skills = () => {
  return (
    <section className='w-full h-screen flex flex-col justify-center  snapelement'>
        <h2 className='text-3xl text-start font-semibold text-white p-16'>H. Skills</h2>
        <ul className='flex w-4/5 justify-between flex-wrap mx-auto'>
          <li className='w-32 h-32 rounded-full  flex justify-center m-16 p-4' style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
            <img src={reactImg} alt="" className='w-full'/>
          </li>
          <li className='w-32 h-32 rounded-full  flex justify-center m-16 p-4' style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>

          {/* <li className='w-1/3 rounded-full border border-white flex justify-center py-8'> */}
            <img src={tailwindImg} alt="" className='w-full'/>
          </li>
          <li className='w-32 h-32 rounded-full flex justify-center m-16 p-4' style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>

          {/* <li className='w-1/3 rounded-full border border-white flex justify-center py-8'> */}
            <img src={threeImg} alt="" className='w-full pl-4'/>
          </li>
          <li className='w-32 h-32 rounded-full  flex justify-center m-16 p-4' style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
            <img src={rapierImg} alt="" className='w-full'/>
          </li>
          <li className='w-32 h-32 rounded-full  flex justify-center m-16 p-4' style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>

          {/* <li className='w-1/3 rounded-full border border-white flex justify-center py-8'> */}
            <img src={firebaseImg} alt="" className='w-full'/>
          </li>
          <li className='w-32 h-32 rounded-full flex justify-center m-16 p-4' style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>

          {/* <li className='w-1/3 rounded-full border border-white flex justify-center py-8'> */}
            <img src={githubImg} alt="" className='w-full'/>
          </li>
          
        </ul>
    </section>
  )
}

export default Skills