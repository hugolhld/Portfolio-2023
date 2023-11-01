import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TitleSection from '../components/TitleSection'
import SectionElement from '../components/SectionElement'
import Reveal from '../components/Reveal'

const Form = () => {

  const formRef = useRef()

  const labelClass = "text-white font-semibold pt-4 pb-2"
  const inputClass = "rounded-lg py-2 px-2 focus:outline-none shadow-xl"

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
    <SectionElement id={'contact'}>

        <TitleSection title='.Say Hi' />

        <form ref={formRef} onSubmit={sendMail} className='flex flex-col w-4/5'>
          <Reveal>
            <div className='flex flex-col'>
              <label className={labelClass} htmlFor="mail">Your email</label>
              <input className={inputClass} type="email" name="mail" id="mail" />
            </div>
          </Reveal>
          
          <Reveal>
            <div className='flex justify-between'>
              <div className=' w-full flex flex-col mr-2'>
                <label className={labelClass} htmlFor="name">Your name</label>
                <input className={inputClass} id='name' type="text" />
              </div>

              <div className="w-full flex flex-col ml-2">
                <label className={labelClass} htmlFor="subject">Subject</label>
                <input className={inputClass} id='subject' type="text" />
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className='flex flex-col'>
              <label className={labelClass} htmlFor="message">Your message</label>
              <textarea className='p-2 rounded-lg resize-none shadow-xl' name="text" id="message" cols="30" rows="10"></textarea>
              <div className='flex w-full md:w-auto md:justify-end'>
                <input type="submit" value="Say hi" className='w-full text-white font-semibold md:w-1/3 my-4 rounded-lg py-2 hover:cursor-pointer' style={{background: 'linear-gradient(45.46deg, rgba(187, 21, 41) 0.94%, rgba(143, 29, 197) 52.06%)', boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.25)'}} />
              </div>
            </div>
          </Reveal>
        </form>
    </SectionElement>  
  )
}

export default Form