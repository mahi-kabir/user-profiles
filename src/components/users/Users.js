import React from "react";
import './Users.css'


const Users = (props) => {
  //console.log(props);
  const { image, salary, email, first_name, last_name, phone } = props.user;
  return (
    <div className="users">
      <div class="user-images">
        <img src={image} alt="" />
      </div>

      <div className="users-name">
        <h1>Name: {first_name} {last_name}</h1>
        <h3>Email:{email}</h3>

        <h3>Contact:{phone}</h3>
        <h2>Salary:${salary}</h2>
        <button 
            className = "main-button" onClick = {() => props.handleAddSalary(props.user)}>
            Add Salary
        </button>
      </div>
    </div>
  );
};

export default Users;
