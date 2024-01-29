'use client';
import React, { useEffect } from 'react';
//= Scripts
import teamSkillsProgress from '@/common/teamSkillsProgress';
import tooltipEffect from '@/common/tooltipEffect';
//= Static Data
import Team2 from './Team2';
import { getTeamMembers } from '@/app/(api)/api';
import { useQuery } from 'react-query';

const Team = () => {
  useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 500);
  }, []);
  const { data, isLoading, isError } = useQuery(
    ['teamData'],
    async () => await getTeamMembers(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <div className="team-crv section-padding">
      <Team2 data={data} />
    </div>
  );
};

export default Team;
