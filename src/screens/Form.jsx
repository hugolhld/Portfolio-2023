import React from 'react'

const Form = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center snapelement'>
        <form action="">
          <label htmlFor="subject">Sujet</label>
          <input id='subject' type="text" />
          <label htmlFor="mail">Votre mail</label>
          <input type="email" name="" id="mail" />
          <label htmlFor="message">Votre demande</label>
          <textarea name="text" id="message" cols="30" rows="10"></textarea>
        </form>
    </section>
  )
}

export default Form