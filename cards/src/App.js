import React from 'react';
import "./style.css";
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
      <Skill skill='react' emoji='🤷‍♂️' color='red' />
      <Skill skill='node.js' emoji='🤷🛒' color='blue' />
    </div>
  );
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor: props.color}}>
     <span>{props.skill}</span>  
     <span>{props.emoji}</span>  
    </div>
  )
}



export default App;
