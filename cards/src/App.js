import React from 'react';
import "./style.css";

const skills = [
  {
    "skill": "Python",
    "level": "Intermediate",
    "color": "Blue"
  },
  {
    "skill": "JavaScript",
    "level": "Beginner",
    "color": "Green"
  },
  {
    "skill": "Java",
    "level": "Advanced",
    "color": "Red"
  },
  {
    "skill": "C++",
    "level": "Intermediate",
    "color": "Orange"
  },
  {
    "skill": "HTML",
    "level": "Beginner",
    "color": "Yellow"
  },
  {
    "skill": "CSS",
    "level": "Intermediate",
    "color": "Purple"
  },
  {
    "skill": "ReactJS",
    "level": "Advanced",
    "color": "Teal"
  },
  {
    "skill": "Django",
    "level": "Intermediate",
    "color": "Brown"
  },
  {
    "skill": "SQL",
    "level": "Beginner",
    "color": "Pink"
  },
  {
    "skill": "TypeScript",
    "level": "Advanced",
    "color": "purple"
  }
]


function App() {
  return (
    <div className="card">
      <Avatar 
        photoName='IMG_2166.JPG'
        name='my pic' />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
        
      </div>
    </div>
  );
}
function Avatar(props){
  return(
    <img 
   className='avatar' src={props.photoName} alt={props.name} />
  );
}

function Intro(){
  return(
    <div className="intro">
      <h1>Subed Shah</h1>
      <p>a software engineer who can work on both the front-end and back-end of a website or application. </p>
    </div>
  )
}

function SkillList(){
  return(
    <div className="skill-list">
      {skills.map((skill)=>(
        <Skill skillObj={skill} />
      ))}
      
      
    </div>
  );
}

function Skill({skillObj}){
  return(
    <div className="skill" style={{backgroundColor: skillObj.color}}>
     <span>{skillObj.skill}</span>  
     <span>{skillObj.level === 'Intermediate' && '👌'}</span>  
     <span>{skillObj.level === 'Advanced' && '✨'}</span>  
     <span>{skillObj.level === 'Beginner' && '🥲'}</span>  
    </div>
  )
}



export default App;
