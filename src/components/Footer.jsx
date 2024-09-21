import React, { useRef, useState } from 'react'

export default function Footer() {

    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const [norError, setNotError] = useState('');
    const inputRef = useRef();



    const handler = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(value)) {
            setError("");
            setNotError('Email is Valid');
            setValue('');
            inputRef.current.style.borderColor = '';
        } else if (!regEx.test(value) && value !== "") {
            setError("Oops! That doesn’t look like an email address");
            setNotError('')
            inputRef.current.style.borderColor = 'red'; 
        } else {
            setError("");
            setNotError('');
        }
    }

  return (
    
        <footer className='flex flex-col max-w-[30rem] items-center mt-[10rem] mb-[7rem] mx-[1rem]'>
            <h1 className='w-full text-center text-white text-3xl mb-5 font-bold'>Get notified when we launch</h1>
            <div id='foot' className='relative flex items-center w-full gap-2 justify-center'>
                <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value} className='focus:border-cyan border-2 border-transparent outline-none text-white w-full bg-darkBlue rounded-full transition-all py-2 px-4' type="email" placeholder='Email address'/>
                <p className='text-red text-xs absolute bottom-[-1.3rem] left-[0.95rem]'>{error} <span className='text-green'>{norError}</span></p>
                <button id='btn' onClick={handler} type='submit' className='border-2 w-[12rem] font-semibold bg-cyan rounded-full transition-all py-2 hover:border-cyan hover:bg-transparent hover:text-cyan'>Get notified</button>
            </div>
        </footer>
    
  )
}
