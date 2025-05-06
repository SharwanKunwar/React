import React from 'react';
import useGithubData from '../CustomHooks/GithubData';

function Card() {
  const UserData = useGithubData("SharwanKunwar");

  if (!UserData) {
    return <p className='text-center text-xl mt-10'>Loading...</p>;
  }

  return (
    <div className='bg-gray-400/30 w-[80%] h-[80%] rounded-2xl flex flex-col justify-center items-center p-5 gap-7 backdrop-blur-[5px] sm:flex-row'>
      <div className='w-full h-6/12 sm:h-[90%] sm:w-[90%]'>
      <img className='rounded-2xl w-full drop-shadow-[0_0_10px_white]' src={UserData.avatar_url} alt="profile-img" />
      </div>
      <div className='w-full h-6/12 flex flex-col items-center sm:h-[90%] sm:justify-center sm:items-center'>
      <section className='text-white'>
  <h2 className='flex items-center text-black justify-center mb-5 text-2xl font-bold'>{UserData.login}</h2>
  <h1>Full Name: {UserData.name}</h1>
  <h3>ID: {UserData.id}</h3>
  <h3>Location: {UserData.location}</h3>
  <h3>Followers: {UserData.followers}</h3>
  <p className="italic mt-4">Bio: {UserData.bio}</p>
</section>

      </div>
    </div>
  );
}

export default Card;
