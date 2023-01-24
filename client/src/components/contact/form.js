import React from 'react'
import "./form.css"
function Form({light}) {
  return (
    <>
    <form className='contact-form'>
        <div className='form-row'>
        <input className={`${light?"input":" "}`} type="text" name="name" placeholder='YOUR NAME' />
        <input className={`${light?"input":" "}`} type ="email" name="email" placeholder='YOUR EMAIL'/>
        </div>
<input className={`${light?"input":" "}`} type="text" name="subject" placeholder="YOUR SUBJECT"/>
<textarea className={`${light?"input":" "}`} placeholder='YOUR MESSAGE' rows="12"></textarea>
<input className={`${light?"input font-sun-mode":" "}`} type="submit"  value="SEND MESSAGE" placeholder="SEND MESSAGE"/>
    </form>
    </>
  )
}

export default Form