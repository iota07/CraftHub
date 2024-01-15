import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Posts from '../Components/Posts/Posts';

const Home = () => {
    return (
        <div className='home w-full h-screen bg-yellow flex'>
            <Navbar />
            <Posts image="../public/micro.jpg" title="" text="lorem epsum"/>
        </div>
    );
};

export default Home;