import React, { useState } from 'react'
import './GithubCard.css'

function GithubCard() {
  const [username, setUsername] = useState("");
  const [id, setID] = useState("...");
  const [imgURL, setImgurl] = useState("./src/assets/profile.jpg");
  const [fullName, setFullname] = useState("...");
  const [address, setAddress] = useState("...");
  const [followers, setFollowers] = useState("...");
  const [following, setFollowing] = useState("...");
  const [error, setError] = useState(""); // error state

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const load = () => {
    const getGitHubUser = async (user) => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError("❌ Username doesn't exist");
          } else {
            setError("⚠️ Something went wrong. Please try again.");
          }

          // Reset displayed data if user is not found
          setID("...");
          setImgurl("./src/assets/profile.jpg");
          setFullname("...");
          setAddress("...");
          setFollowers("...");
          setFollowing("...");
          return;
        }

        const data = await response.json();

        // Set all states
        setError(""); // clear error
        setID(data.id);
        setImgurl(data.avatar_url);
        setFullname(data.name || "N/A");
        setAddress(data.location || "N/A");
        setFollowers(data.followers);
        setFollowing(data.following);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setError("⚠️ Network error. Try again later.");
      }
    };

    if (username.trim() !== "") {
      getGitHubUser(username.trim());
    } else {
      setError("Please enter a GitHub username");
    }
  };

  return (
    <div id='github-card-outer'>
      <div className='card-box' id='card-left'>
        <div id='card-info'>
          <section id='card-info-text'>
            <h2 id='card-info-h2'>Create your GitHub Card</h2>
          </section>

          <label>
            Enter your username
            <input
              type='text'
              id='input-field'
              placeholder='eg. SharwanKunwar'
              value={username}
              onChange={getUsername}
            />
          </label>

          <button onClick={load}>Create</button>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>

      {/* Right Box */}
      <div className='card-box' id='card-right'>
        <div id="one-box">
          <div id="img-box">
            <img id='img' src={imgURL} alt="profile" />
            <h2 className='text-h2'>{username || "..."}</h2>
          </div>
          <div id="text-box">
            <h3 className='text-h3'>ID: <span>{id}</span></h3>
            <h3 className='text-h3'>Full Name: <span>{fullName}</span></h3>
            <h3 className='text-h3'>Location: <span>{address}</span></h3>
            <h3 className='text-h3'>Followers: <span>{followers}</span></h3>
            <h3 className='text-h3'>Following: <span>{following}</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubCard;
