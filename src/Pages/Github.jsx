import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Github = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
      setUserData(response.data);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-6">
      {searched ? (
        // Display GitHub user data card

        <div className=" p-1  rounded-md shadow-neon gap-6">
          {userData ? (
            <div className="card card-side grid grid-cols-2 bg-base-200 shadow-xl">
              <img className='rounded-full m-4 shadow-neon' src={userData.avatar_url}
                alt={`${userData.login}'s avatar`} />
              <div className="card-body">
                <div className=' flex items-center justify-between'>
                  <h2 className="text-3xl font-bold font-mono ">{userData.name}</h2>
                  <img className='rounded-full m-4 w-10' src={userData.avatar_url}
                    alt={`${userData.login}'s avatar`} />
                </div>

                <p>Username: <span className='underline'>{userData.login}</span></p>
                <p>Name: {userData.name}</p>
                <p>Bio: <span className='underline'>{userData.bio}</span></p>

                <p>Location: {userData.location}</p>

                <p>Email: {userData.email}</p>

                <p><span>Twitter: </span> {userData.twitter_username}</p>
                <p><span>Joined:</span> {new Date(userData.created_at).toLocaleString()}</p>

                <p><span>Public Repos:</span> {userData.public_repos} &#160;&#160;<span>Last Update:</span>{' '}{new Date(userData.updated_at).toLocaleString()}</p>

                <p><span>Followers:</span> {userData.followers} &#160;&#160;<span>Following:</span> {userData.following}</p>

                <div className="card-actions justify-end">
                  <Link to={userData.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Github</Link>
                </div>
              </div>


            </div>
          ) : (
            <p className="text-red-500">User not found</p>
          )}
        </div>

      ) : (
        // Display search card


        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Search Github User</h2>
            <div className='flex'>
              <input
                type="text"
                placeholder="Enter GitHub Username"
                className="p-2 border border-gray-300 rounded-md flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={handleSearch} className="btn ">Search</button>
            </div>
          </div>
        </div>



      )}
    </div>
  );
};

export default Github;
