import React from 'react'
import data from '../data/data';
import Skill from './Skill';

function SkillList() {
  return (
    <div>
        {data.map((dt) => (
            <Skill skill= {dt.skill} level= {dt.level} color= {dt.color} />
        )
        )}
    </div>
  )
}

export default SkillList;