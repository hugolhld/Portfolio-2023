import '../App.css'

const Home = () => {
  return (
    <section id='home' className='flex justify-center mx-auto md:mx-0 items-center w-full md:h-screen snapelement'>

        <div className='flex flex-col gap-4'>
            <h1 className='flex flex-col text-4xl md:text-6xl 2xl:text-8xl font-bold'>
                <span className='pb-6 gradient text' >
                    H.DEV
                </span>
                <hr className='p-2' />
                <span className='gradient-bg tracking-wider'>
                    HELLO I'M
                </span>

                <span className='gradient tracking-wider	'>
                    CREATIVE
                </span>

                <span className='gradient-bg tracking-wider'>
                    DEVELOPER
                </span>
            </h1>

            <div className='flex gap-4'>
                <a href='https://github.com/hugolhld' target='_blank' className=" rounded-full px-4 py-2.5 text-white text-xs xl:text-lg bg-purple-700  text-center flex items-center transition-all hover:scale-110">
                    GitHub
                </a>
                <a href='https://www.linkedin.com/in/hugolhernould/' target='_blank' className="whitespace-nowrap rounded-full px-4 py-1 text-white text-xs xl:text-lg bg-purple-700 text-center flex items-center  hover:scale-110 transition-all">
                    Linkedin
                </a>
                <a href='#contact' className="whitespace-nowrap rounded-full px-4 py-1 text-white text-xs xl:text-lg bg-purple-700  flex items-center hover:scale-110 transition-all">
                    Say Hi
                </a>
            </div>
        </div>

    </section>
  )
}

export default Home