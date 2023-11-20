import React, { useRef } from 'react'

export const Form = () => {
    const name = useRef();
    const lastname = useRef();
    const email = useRef();
    const box = useRef();    
    const textbox = useRef();    
    const save = (e)=>{
        e.preventDefault();
        console.log(name.current.value, lastname.current.value, email.current.value);        
        box.current.classList.add("green");
        textbox.current.innerHTML = "Bye bye";
    }
    return (
        <div>
            <h1>Form</h1>
            <div className='box-ref' ref={box}>
                <p className='text-ref' ref={textbox}>Hello there!</p>
            </div>
            <form className='form' onSubmit={save}>
                <input type='text' placeholder='Name' ref={name} />
                <input type='text' placeholder='Lastname' ref={lastname} />
                <input type='text' placeholder='Email' ref={email} />
                <input type='submit' placeholder='Send' />
            </form>
        </div>
    )
}
