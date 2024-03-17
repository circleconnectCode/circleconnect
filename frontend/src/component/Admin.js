import React from 'react'
import User from './User'
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  const handleClicksales = (id) => {
    navigate(`/Sales`);
  };
  return (
    <div>Admin
   <h2>User Component</h2>
      <button onClick={() => handleClick(5)}>View User 5</button>
      <button onClick={() => handleClick(10)}>View User 10</button>
      <button onClick={() => handleClicksales()}>Sales</button>
      
    </div>
  )
}

export default Admin