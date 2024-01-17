import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProfileCard from '../Components/Profile/ProfileCard';

const Profile = () => {
    return (
        <div className='home w-full h-screen bg-yellow'>
            <Navbar />
            <ProfileCard image="../public/micro.jpg" />
        </div>
    );
};

export default Profile;