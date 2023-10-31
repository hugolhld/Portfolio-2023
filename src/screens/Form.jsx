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
    <section id='contact' className='w-full mx-auto md:mx-16 h-screen flex flex-col justify-center items-center snapelement'>

        <TitleSection title='.Say Hi' />

        <form ref={formRef} onSubmit={sendMail} className='flex flex-col w-4/5'>
          <label className='text-white font-semibold pt-4 pb-2' htmlFor="mail">Your email</label>
          <input className='rounded-lg py-2 px-2 focus:outline-none shadow-xl' type="email" name="mail" id="mail" />
          
          <div className='flex justify-between'>
            <div className=' w-full flex flex-col mr-2'>
              <label className='text-white font-semibold pt-4 pb-2' htmlFor="name">Your name</label>
              <input className=' w-full rounded-lg py-2 px-2 focus:outline-none shadow-xl' id='name' type="text" />
            </div>

            <div className="w-full flex flex-col ml-2">
              <label className='text-white font-semibold pt-4 pb-2' htmlFor="subject">Subject</label>
              <input className='w-full rounded-lg py-2 px-2 focus:outline-none shadow-xl' id='subject' type="text" />
            </div>
          </div>
          
          <label className='text-white font-semibold pt-4 pb-2' htmlFor="message">Your message</label>
          <textarea className='p-2 rounded-lg resize-none shadow-xl' name="text" id="message" cols="30" rows="10"></textarea>
          <div className='flex w-full md:w-auto md:justify-end'>
            <input type="submit" value="Say hi" className='w-full text-white font-semibold md:w-1/3 my-4 rounded-lg py-2 hover:cursor-pointer' style={{background: 'linear-gradient(45.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} />
          </div>
        </form>
    </section>
  )
}

export default Form