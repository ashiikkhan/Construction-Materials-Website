import React from 'react';

const TeamMember = (props) => {
  const { name, img, designation } = props.singleMember;
  return (
    <div className='p-4 m-4 bg-white shadow-2xl'>
      <img src={img} alt='team-members' className='w-72 h-72 mx-auto' />
      <div className='p-4 text-center'>
        <h2 className='text-2xl text-gray-700'>{name}</h2>
        <h6 className='text-lg text-gray-500'>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamMember;
