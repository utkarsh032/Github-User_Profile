import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const Github = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`https://api.github.com/users/${searchQuery}`);

      setTimeout(() => {
        setUserData(response.data);
        setSearched(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="">
      {loading ? (
        // Display loading spinner using Loader component
        <Loader />
      ) : searched ? (

        <div className="flex justify-center items-center h-screen p-6">
          {userData ? (


            <div className='flex flex-col md:flex-row justify-between  w-full md:w-3/4 lg:w-1/2 mx-auto shadow-neon rounded-xl '>
              <div className='mb-4 md:mb-0 flex mx-auto items-center'>
                <img className='rounded-full shadow-neon p-2 w-full max-w-xs mx-auto' src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
              </div>

              <div className='bg-base-100 rounded-xl w-full md:w-1/2 shadow-neon'>
                <div className='bg-base-300 p-4 rounded-t-xl py-6 shadow-neon'>
                  <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center'>
                    <h1 className='text-xl md:text-4xl font-bold font-mono mb-2 md:mb-0'>{userData.name}</h1>
                    <img className='rounded-full m-4 w-12 md:w-10' src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                  </div>

                  <div className=''>
                    <p className='text-sm md:text-base'>User: {userData.login}</p>
                    <p className='text-sm md:text-base'>Name: {userData.name}</p>
                    <p className='text-sm md:text-base'>Email: {userData.email}</p>
                    <p className='text-sm md:text-base'>Bio: {userData.bio && userData.bio.length > 49 ? userData.bio.substring(0, 49) + '...' : userData.bio}</p>
                  </div>
                </div>

                <div className='p-4 leading-9'>
                  <p className='text-sm md:text-base'>Joined Date: {new Date(userData.created_at).toLocaleString()} </p>

                  <div className='flex flex-col md:flex-row md:gap-10'>
                    <p className='text-sm md:text-base'>Public Repo: {userData.public_repos}</p>
                    <p className='text-sm md:text-base'>Last Update: {new Date(userData.updated_at).toLocaleString()}</p>
                  </div>

                  <div className='flex flex-col md:flex-row md:gap-10'>
                    <p className='text-sm md:text-base'>Followers: {userData.followers}</p>
                    <p className='text-sm md:text-base'>Following: {userData.following}</p>
                  </div>

                  <div className='md:flex flex-col md:flex-row md:justify-between py-4'>
                    <Link to={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer" className='btn shadow-neon mb-2 md:mb-0'>
                      <FaXTwitter /> {userData.twitter_username}
                    </Link>

                    <Link to={userData.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary shadow-gray-500">
                      <FaGithub /> Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>



          ) : (
            <p className="text-red-500">User not found</p>
          )}
        </div>
      ) : (
        // Display search card
        <div className='flex justify-center items-center h-screen p-6'>
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
        </div>
      )}
    </div >
  );
};

export default Github;
