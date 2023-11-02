import '../App.css'
import Reveal from '../components/Reveal'
import SectionElement from '../components/SectionElement'

const Home = () => {

    const buttonClass = "rounded-full px-4 py-2.5 text-white text-xs 3xl:text-lg bg-purple-700 text-center flex items-center  hover:scale-90 transition-all"

  return (
    // <section id='home' className='flex justify-center mx-auto md:mx-0 items-center w-full md:h-screen snapelement'>
    <SectionElement id={'home'}>

        <div className='flex flex-col gap-4 w-max'>
            <div className='flex flex-col gap-1 text-4xl md:text-6xl 3xl:text-8xl font-bold'>

                <Reveal>
                    <h1 className='pb-6 gradient text' >
                        H.DEV
                    </h1>
                </Reveal>

                <Reveal delay={'.15'} width={true}>
                    <hr className='p-2' />
                </Reveal>
                
                <Reveal delay={'.35'}>
                    <h1 className='gradient-bg tracking-wider'>
                        HELLO I'M
                    </h1>
                </Reveal>
                
                <Reveal>
                    <h1 className='gradient tracking-wider	'>
                        CREATIVE
                    </h1>
                </Reveal>

                <Reveal delay={'.1'}>
                    <h1 className='gradient-bg tracking-wider'>
                        DEVELOPER
                    </h1>
                </Reveal>

            </div>

            <Reveal>
                <div className='flex gap-4 w-max'>
                    <a href='https://github.com/hugolhld' target='_blank' className={buttonClass}>
                        GitHub
                    </a>
                    <a href='https://www.linkedin.com/in/hugolhernould/' target='_blank' className={buttonClass}>
                        Linkedin
                    </a>
                    <a href='#contact' className={buttonClass}>
                        Say Hi
                    </a>
                </div>
            </Reveal>
        </div>
        
    </SectionElement>
    // </section>
  )
}

export default Home