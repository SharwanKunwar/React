import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function CardInput() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [img, setImg] = useState(null);
  const { setData } = useContext(UserContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImg(imgUrl);
    }
  };

  const handleCreate = () => {
    setData({
      name,
      age,
      city,
      phone,
      img,
      email,
      job
    });
  };

  return (
    <div className="bg-gray-400 w-[400px] min-h-[600px] rounded-lg flex justify-center items-center flex-col p-6 gap-4">
      <input
        type="text"
        placeholder="Enter your name"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your age"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your city"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your phone"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Role"
        className="w-[300px] h-[35px] rounded-lg p-2 border border-white outline-none"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-[300px] mt-2"
      />

      {img && (
        <img
          src={img}
          alt="preview"
          className="w-[100px] h-[100px] rounded-full object-cover border-2 border-white"
        />
      )}
    {name&&city&&age&&phone&&img? (
            <button
        className="w-[200px] mt-5 bg-white rounded-md p-2 text-black font-semibold hover:bg-gray-200 transition"
        onClick={handleCreate}
      >
        Create
      </button>
    ):""}
      
    </div>
  );
}

export default CardInput;
