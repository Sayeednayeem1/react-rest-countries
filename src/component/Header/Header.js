import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome To Rest Countries</h1>
            <nav className='header'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/info">Info</a>
                <a href="/details">Details</a>
            </nav>
        </div>
    );
};

export default Header;