import React from 'react';
import useTeamData from '../../hooks/useTeamData';
import TeamMember from '../TeamMember/TeamMember';

const OurTeam = () => {
  const [team, setTeam] = useTeamData();
  console.log(team);
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-medium text-center text-gray-700 p-4 my-4 sm:text-3xl md:text-4xl'>
        Meet All of Our Team Members
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
        {team.map((singleMember) => (
          <TeamMember
            singleMember={singleMember}
            key={singleMember.id}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
