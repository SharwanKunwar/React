import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function GeneratePassword() {
    const [length, setLength] = useState("8");
    const [passowrd, setPassword] = useState("");
    const [allowChar, setChar] = useState(false);
    const [allowNum, setNum] = useState(false);
    const passRef = useRef();

    const generate = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(allowChar) str+= "~!@#$%^&*+-_";
        if(allowNum) str+= "0123456789";
        
        for(let i=1; i<length; i++){
            let randomNumber = Math.floor(Math.random()*str.length);
            pass += str.charAt(randomNumber);
        }
        setPassword(pass);
    },[length,allowChar,allowNum,setPassword]);

    useEffect(()=>{
        generate();
    },[allowChar, allowNum, setPassword,length]);

    // buttons
    const handleClick = (e)=>{
        if(e.target.id === 'gen'){
            generate();
        }else if(e.target.id == "cop"){
            window.navigator.clipboard.writeText(passowrd);
            passRef.current?.select();
        }
    }

  return (
    <>
    <div className=' sm:w-[50%] sm:h-[90%] w-[320px] h-[610px] rounded-2xl shadow-2xl sm:flex sm:flex-col flex flex-col'>

        {/* //Animation */}
        <div className='bg-white/20 backdrop-blur-md sm:w-full sm:h-6/12 flex justify-center items-center w-full h-6/12 rounded-t-2xl shadow-lg border border-white/30'>
        <DotLottieReact className=' h-full object-cover object-center '
          src="https://lottie.host/2ffd6463-bd36-4943-829c-b58cff5decf4/coVkdTs9uU.lottie"
          //src="https://lottie.host/b7f381ee-490e-48fe-b5b7-0c2420970d38/5uwW3HK0rS.lottie"
           loop
           autoplay
         />

        </div>

        {/* //passgencode */}
        <div className='bg-gray-300/50 backdrop-blur-md sm:w-full sm:h-6/12 flex flex-col justify-center items-center w-full h-6/12 rounded-b-2xl p-4 shadow-lg border border-yellow-300/40'>
        <div className=' w-full h-[50%] flex justify-center items-center'>
            <input className='bg-white w-[100%] h-6/9 rounded-[10px] pl-5'
            type='text'
            value={passowrd}
            ref={passRef}
            placeholder='Password'
            readOnly
            />
            
        </div>
        <div className=' border-2 w-full h-6/12 sm:pl-10 pl-4 pt-2 pb-2'>

            <section className=' flex items-center p-2'>
            <input className='w-[20px] h-[20px]'
            type='checkbox'
            checked={allowChar}
            onChange={()=>{
                setChar((prev)=>!prev);
            }}
            />
            <label className='pl-3'>Add Characters</label>
            </section>

            <section className=' flex items-center p-2'>
            <input className='w-[20px] h-[20px]'
            type='checkbox'
            checked={allowNum}
            onChange={()=>{
                setNum((prev)=>!prev);
            }}
            />
            <label className='pl-3'>Add Numbers</label>
            </section>

            <section className=' flex items-center p-2'>
            <input
            type='range'
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            min={6}
            max={20}
            />
            <label className='pl-3'>Lenght : {length}</label>
            </section>

        </div>
            <section className=' sm:w-full sm:h-[30%] w-full h-6/12  flex justify-center items-center gap-10'>
            <button
            id='gen'
            onClick={handleClick}
             className='w-[40%] bg-black text-white h-[60%] rounded-[5px] flex justify-center items-center font-bold sm:hover:bg-white sm:hover:text-black hover:bg-white hover:text-black'>Generate</button>
            <button
            id='cop'
            onClick={handleClick}
             className='w-[40%] bg-black text-white h-[60%] rounded-[5px] flex justify-center items-center font-bold sm:hover:bg-white sm:hover:text-black hover:bg-white hover:text-black'>Copy</button>
            </section>
        </div>
    </div>
    </>
)
}

export default GeneratePassword
