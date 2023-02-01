import React from 'react';

const UserCard = ({userData}) => {
  return (
    <div className='user-card'>
      <div className='info-group'>
        <span className='info-label'>First Name:</span>
        <span className='info-data'>{userData.first_name}</span>
      </div>
      <div className='info-group'>
        <span className='info-label'>Last Name:</span>
        <span className='info-data'>{userData.last_name}</span>
      </div>
      <div className='info-group'>
        <span className='info-label'>Email:</span>
        <span className='info-data'>{userData.email}</span>
      </div>
      <div className='info-group'>
        <span className='info-label'>Gender:</span>
        <span className='info-data'>{userData.gender}</span>
      </div>
    </div>
  )
}

export default UserCard