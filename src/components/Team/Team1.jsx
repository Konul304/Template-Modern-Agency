'use client';
import React, { useEffect } from 'react';
//= Scripts
import teamSkillsProgress from '@/common/teamSkillsProgress';
import tooltipEffect from '@/common/tooltipEffect';
//= Static Data
import teamsDate from '@/data/sections/team.json';
import Team2 from './Team2';

const Team = (data) => {
  useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 500);
  }, []);

  return (
    <div className="team-crv section-padding">
      <Team2 data={data} />
    </div>
  );
};

export default Team;
