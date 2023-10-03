import React from 'react'

const Works = () => {
  return (
    <section className='w-full h-screen flex justify-center flex-col items-center snapelement'>
        <h2 className='text-3xl text-start font-semibold text-white p-16'>.Works</h2>
        <ul className='w-4/5 flex flex-col gap-4'>
            <li>
                <button className='w-full relative '>
                    <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'>

                    </div>
                    <span className=' absolute w-full h-full flex items-center justify-center top-0 left-0 font-semibold text-white text-lg'>
                        Portoflio - 2023
                    </span>
                    {/* <span>
                        EKINA
                    </span> */}
                </button>
            </li>
            <li>
                <button className='w-full relative '>
                    <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'></div>
                    <span className=' absolute w-full h-full flex items-center justify-center top-0 left-0 font-semibold text-white text-lg'>
                        My Cardinet - 2023
                        <br />
                        EKINA
                    </span>
                </button>
            </li>
            <li>
                <button className='w-full relative '>
                    <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'></div>
                    <span className=' absolute w-full h-full flex items-center justify-center top-0 left-0 font-semibold text-white text-lg'>
                        COCOPARKS - 2021
                    </span>
                </button>
            </li>
            <li>
                <button className='w-full relative '>
                    <div className='w-full py-14 blur hover:blur-0 transition-all bg-red-400'></div>
                    <span className=' absolute w-full h-full flex items-center justify-center top-0 left-0 font-semibold text-white text-lg'>
                        COCOPARKS - 2021
                    </span>
                </button>
            </li>
        </ul>
    </section>
  )
}

export default Works