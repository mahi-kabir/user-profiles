import React from 'react';

const UserSalary = (props) => {
    const salary = props.salary;
    
    const totalSalary = salary.reduce((total,prd) => total+prd.salary, 0);
    //const totalSalary = beton.reduce((total,sl) => total+sl.salary, 0)
    // let total = 0;
    // for(let i=0; i<salary.length; i++){
    //     const amount = salary[i];
    //     total = total + amount;
    // }
    return (
        <div>
            <h3>Total Salary: ${totalSalary}</h3>
            <p><small>Items clicked: {salary.length}</small></p>
        </div>
    );
};

export default UserSalary;