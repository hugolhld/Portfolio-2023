import '../App.css'

const Home = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen snapelement'>
        {/* <LeftHome /> */}
        <div className='flex flex-col gap-4'>
            <h1 className='flex flex-col text-6xl font-bold'>
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
                    DEVELOPPER
                </span>
            </h1>

            <div className='flex gap-4'>
                <button className=" rounded-full px-4 py-2.5 text-white text-xs bg-purple-700 text-center flex items-center transition-all hover:scale-125">
                    <p className='hover:none'>

                        GitHub
                    </p>
                </button>
                <button className="whitespace-nowrap rounded-full px-4 py-1 text-white text-xs bg-purple-700 hover:scale-110 transition-all">
                    Linkedin
                </button>
                <button className="whitespace-nowrap rounded-full px-4 py-1 text-white text-xs bg-purple-700 hover:scale-110 transition-all">
                    Envoyez moi un message
                </button>
            </div>
        </div>
    </section>
  )
}

export default Home