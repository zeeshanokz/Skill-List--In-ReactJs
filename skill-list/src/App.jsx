import React from 'react';
import './App.css'
// import Skill from './components/Skill';
import SkillList from './components/SkillList';
import Avatar from './components/Avatar';
import Intro from './components/Intro';

function App() {

  return (
    <>
    <div className='card'>
      <Avatar/>
      <Intro/>
   <SkillList/>
    </div>
     </>
  );
};
export default App;
