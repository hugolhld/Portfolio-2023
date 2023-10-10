import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TitleSection from '../components/TitleSection'

const Form = () => {

  const formRef = useRef()

  const sendMail = (e) => {
    e.preventDefault()

    emailjs.send('service_5pwbo1f', 'template_ekcmc24', {
      name: formRef.current.name.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
      mail: formRef.current.mail.value,
    }, 'wZ1lVDnNssye3eJEg')
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <section id='contact' className='w-full mx-16 h-screen flex flex-col justify-center items-center snapelement'>
        {/* <h2 className='text-3xl text-start font-semibold text-white p-4 w-full'>.Say Hi</h2> */}
        <TitleSection title='.Say Hi' />
        <form ref={formRef} onSubmit={sendMail} className='flex flex-col w-4/5'>
          <label className='text-white font-semibold pt-4 pb-2' htmlFor="mail">Votre adresse mail</label>
          <input className='rounded-lg py-2 px-2 focus:outline-none border-4 border-purple-500' type="email" name="mail" id="mail" />
          
          <div className='flex justify-between'>
            <div className=' w-full flex flex-col mr-2'>
              <label className='text-white font-semibold pt-4 pb-2' htmlFor="name">Votre nom</label>
              <input className=' w-full rounded-lg py-2 px-2 focus:outline-none border-4 border-purple-500' id='name' type="text" />
            </div>

            <div className="w-full flex flex-col ml-2">
              <label className='text-white font-semibold pt-4 pb-2' htmlFor="subject">Sujet</label>
              <input className='w-full rounded-lg py-2 px-2 focus:outline-none border-4 border-purple-500' id='subject' type="text" />
            </div>
          </div>
          
          <label className='text-white font-semibold pt-4 pb-2' htmlFor="message">Votre demande</label>
          <textarea className='p-2 rounded-lg resize-none border-4 border-purple-500' name="text" id="message" cols="30" rows="10"></textarea>
          <div className='flex justify-end'>
            <input type="submit" value="Envoyer" className='bg- text-white font-semibold w-1/3 my-4 rounded-lg py-2 hover:cursor-pointer' style={{background: 'linear-gradient(45.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} />
          </div>
        </form>
    </section>
  )
}

export default Form