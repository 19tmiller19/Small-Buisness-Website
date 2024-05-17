import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "Your Api Key Here");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  const [isSpinning, setIsSpinning] = useState(false);

  const [submitBtn, setSubmitBtn] = useState("Submit Form")

  const handleClick = ()=>{
    setSubmitBtn("Submited")
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 3000);
  }

  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>
       <form onSubmit={onSubmit} className='contact-left'>
        <input type="text" name="name" placeholder="Name"className='contact-inputs'/>
        <input type="email" name="email" placeholder='Email' className='contact-inputs'/>
        <input type='phone' name="phone" placeholder='phone' className='contact-inputs'/>
        <textarea className='textarea' name="message" placeholder='Please leave some information about your interested services and we will get back to you as soon as possible'></textarea>
        <button type="submit" className={`contact-us-btn ${isSpinning ? 'spin' : ''}`} onClick={handleClick}>{submitBtn}</button>
      </form>
      
    </div>
  )
}

export default Contact