import React from 'react'
// import {beginner, intermediate, advanced} from  "../data/data"
function Skill({skill, level, color}) {
  return (
    <div className= "skill" style= {{backgroundColor: color}}>
        <span>
            {skill}
        </span>
        <span>
            {level === "beginner" && "🌱"}
            {level === "intermediate" && "🚀"}
            {level === "advanced" && "🔥"}
        </span>
    </div>
  )
}

export default Skill;


// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>
//       <span>
//         {level === "beginner" && "👶"}
//         {level === "intermediate" && "👍"}
//         {level === "advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

// export default Skill;
