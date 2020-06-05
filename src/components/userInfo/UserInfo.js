import React, { useState } from 'react';
import FakeData from '../../fakeData/FakeData';
import './UserInfo.css';
import Users from '../users/Users';
import UserSalary from '../User Salary/UserSalary';

const UserInfo = () => {

    const first15 = FakeData.slice(0,14);
    const [users, setUsers] = useState(first15);
    const [salary, setSalary] = useState([]); 

    const handleAddSalary = (user) =>{
        
        const newSalary = [...salary, user];
        setSalary(newSalary);
    }
    return (
        <div className = "user-profiles-container">
            <div className = "users-container">
                
                {
                    users.map(usr => <Users 
                    handleAddSalary = {handleAddSalary}
                    user = {usr}>
                    </Users>)

                    }
                
            </div>
            
            <div className= "salary-container">
                <UserSalary salary = {salary}></UserSalary>
            </div>
            
        </div>
    );
};

export default UserInfo;

