import { useState, useEffect } from 'react';

const useTeamData = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('teamData.json')
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return [team, setTeam];
};
export default useTeamData;
