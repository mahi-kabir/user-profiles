import React from 'react';
import friendsZone from '../../images/friendsZone.png'
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <img src = {friendsZone} alt=""/>

            <nav>
                <a href="profile">Profile</a>
                <a href="salary">Salary</a>
                <a href="hire">Hire</a>
            
            </nav>
        </div>
    );
};

export default Header;