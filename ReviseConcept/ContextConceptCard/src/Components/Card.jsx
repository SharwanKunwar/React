import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import UserContext from '../Contexts/UserContext';

function Card() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [image, setImage] = useState(null);


    const isFormValid = name && age && address && contact;


    const { setUser } = useContext(UserContext);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClick = () => {
        if (!name || !age || !address || !contact || !image) {
          alert("Please fill in all fields and upload an image.");
          return;
        }
      
        setUser({ name, age, address, contact, image });
        navigate('/final');
      };
      

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); // stores base64 string
          };
          reader.readAsDataURL(file);
        }
      };
      

    return (
        <>
            <div className='bg-red-400 w-[100%] h-screen flex justify-center items-center'>
                <div className='bg-yellow-400 sm:w-6/20 sm:h-[90%] rounded-2xl w-[90%] h-[90%] flex flex-col gap-5 justify-center items-center'>
                    <h2 className='font-bold text-2xl'>Set Data</h2>
                    {/* Input fields */}
                    <section className=' w-full h-[10%] flex justify-center items-center'>
                        <input
                            className='bg-white w-[90%] h-[90%] rounded-[7px] pl-3'
                            type="text"
                            placeholder='Enter your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </section>
                    <section className=' w-full h-[10%] flex justify-center items-center'>
                        <input
                            className='bg-white w-[90%] h-[90%] rounded-[7px] pl-3'
                            type="text"
                            placeholder='Enter your age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </section>
                    <section className=' w-full h-[10%] flex justify-center items-center'>
                        <input
                            className='bg-white w-[90%] h-[90%] rounded-[7px] pl-3'
                            type="text"
                            placeholder='Enter your address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </section>
                    <section className=' w-full h-[10%] flex justify-center items-center'>
                        <input
                            className='bg-white w-[90%] h-[90%] rounded-[7px] pl-3'
                            type="text"
                            placeholder='Enter your contact no'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </section>

                    <section className='w-[90%] bg-blue-400 h-[10%] flex justify-center items-center'>
                    <input className=' w-[90%] flex justify-center items-center'
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        
                    />
                    </section>


                    {/* Create button */}
                    <button
                        className={`bg-black w-[50%] h-[8%] rounded-[10px] text-white font-bold ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleClick}
                        disabled={!isFormValid}
                    >   
                    Create
                    </button>

                </div>
            </div>
        </>
    );
}

export default Card;
