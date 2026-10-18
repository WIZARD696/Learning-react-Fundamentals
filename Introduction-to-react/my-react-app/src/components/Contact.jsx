import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [phone,setPhone]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Name: ${name} \nEmail: ${email} \nPhone: ${phone}`)
    }

  return (
    <div className='contact' onSubmit={handleSubmit}>
        <form action="">
            Name: <input id="name" onChange={(e) => {setName(e.target.value)}} value={name} name="name" type="text" placeholder="Enter your name" />
            Email: <input id="email" onChange={(e) => {setEmail(e.target.value)}} value={email} name="email" type="text" placeholder="Enter your email" />
            Phone: <input id="phone" onChange={(e) => {setPhone(e.target.value)}} value={phone} name="phone" type="text" placeholder="Enter your phone number" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact