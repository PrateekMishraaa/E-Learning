import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Input from '../Components/Input';

const videos = [
  {
    title: 'Surah Ghafir',
    description: 'Salman Al-Utaybi - Surah Ghafir 1-58',
    url: 'https://www.youtube.com/embed/example1',
    uploader: 'test',
    time: '22:33',
  },
  {
    title: 'Django',
    description: 'Deploying Django to a server - Django Web Development with Python p.12',
    url: 'https://www.youtube.com/embed/example2',
    uploader: 'Fuck',
    time: '19:29',
  },
  {
    title: 'Bill Gates',
    description: 'Coding is Not Difficult - Bill Gates',
    url: 'https://www.youtube.com/embed/example3',
    uploader: 'test',
    time: '19:28',
  },
  {
    title: 'Code with harry',
    description: 'Coding is Not Difficult - Bill Gates',
    url: 'https://www.youtube.com/embed/example3',
    uploader: 'test',
    time: '19:28',
  },
  {
    title: 'Code with harry',
    description: 'Coding is Not Difficult - Bill Gates',
    url: 'https://www.youtube.com/embed/example3',
    uploader: 'test',
    time: '19:28',
  },
];

const VideoCard = ({ video }) => {
  return (
    <div className="w-80 bg-white shadow-md rounded-lg p-4 m-4">
      <iframe className="w-full h-40" src={video.url} title={video.title} allowFullScreen></iframe>
      <h2 className="text-lg font-bold mt-2">{video.title}</h2>
      <p className="text-sm text-gray-600">{video.description}</p>
      <div className="flex justify-between items-center mt-3">
        <button className="bg-gray-300 px-3 py-1 rounded">View</button>
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">by {video.uploader} on {video.time}</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='h-10 w-[40%] mx-auto mt-4 rounded-2xl'>
        <Input />
      </div>
      <div className="flex justify-center flex-wrap mt-10 ">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
      <div className='h-20'>


      {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
