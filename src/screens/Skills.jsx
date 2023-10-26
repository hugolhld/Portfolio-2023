import reactImg from '../assets/react.svg'
import tailwindImg from '../assets/tailwind.svg'
import threeImg from '../assets/threejs.svg'
import rapierImg from '../assets/rapier.svg'
import firebaseImg from '../assets/firebase.svg'
import githubImg from '../assets/github.svg'
import TitleSection from '../components/TitleSection'

const Skills = () => {
  return (
    <section id='skills' className='w-full mx-auto md:mx-16 h-screen flex flex-col justify-center items-center snapelement'>

        <TitleSection title={'.Skills'} />

        <ul className='flex w-4/5  justify-between items-center flex-wrap mx-auto gap-x- gap-y-4'>
          
          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0">
                <img src={reactImg} alt="react js" className='w-full h-full p-4' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'linear-gradient(270.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://react.dev/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  ReactJS
                </a>
              </div>
            </div>
          </li>

          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0">
                <img src={tailwindImg} alt="tailwind css" className='w-full h-full p-4' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://tailwindcss.com/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  TailwindCSS
                </a>
              </div>
            </div>
          </li>

          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0 ">
                <img src={threeImg} alt="three js" className='w-full h-full p-4  pl-8' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://docs.pmnd.rs/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  ThreeJS / R3F
                </a>
              </div>
            </div>
          </li>

          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0">
                <img src={rapierImg} alt="rapier js" className='w-full h-full p-4' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://rapier.rs/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  RapierJS
                </a>
              </div>
            </div>
          </li>

          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0">
                <img src={firebaseImg} alt="firebase" className='w-full h-full p-4' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'rgba(143, 29, 197)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://firebase.google.com/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  Firebase
                </a>
              </div>
            </div>
          </li>

          <li className='flex justify-center w-1/2 md:w-1/3 group perspective ' >
            <div className="relative w-32 h-32 p-4 rounded-full transition-all duration-1000 preserve-3d group-hover:my-rotate-y-180" style={{background: 'linear-gradient(-92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
              <div className="absolute inset-0">
                <img src={githubImg} alt="github" className='w-full h-full p-4' />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-full text-white my-rotate-y-180 backface-hidden" style={{background: 'linear-gradient(92.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}}>
                <a href="https://github.com/" target='_blank' className='w-full h-full flex justify-center items-center font-semibold'>
                  Github
                </a>
              </div>
            </div>
          </li>
          
        </ul>
    </section>
  )
}

export default Skills