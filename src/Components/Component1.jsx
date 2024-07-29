import React from 'react';
import './AboutMe.css'; // Import CSS file for styling


function add(num1,num2){
       return num1+num2;
}
let subtract= (num1,num2)=>{
       if(num1-num2<0){
        return 0
       }
       else{
        return num1-num2
       }

}


const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="info">
        <p><strong>Name:</strong> Muhammad Talha</p>
        <p><strong>Education:</strong> BSCS from COMSATS University Lahore</p>
        <p><strong>Employment:</strong> Associate Software Engineer at Visnext Software Solutions</p>
        <p><strong>Description:</strong> I am passionate about software development and enjoy working with React and other technologies. My journey into programming began during my studies at COMSATS University, where I developed a keen interest in creating solutions through code. At Visnext Software Solutions, I have been fortunate to collaborate on various projects, honing my skills in frontend and backend development. My goal is to continue growing as a developer, contributing to innovative projects and pushing the boundaries of technology.</p>
        
        <p><strong>Achievements:</strong> During my academic career, I participated in several coding competitions and won awards for my innovative projects. I also actively contribute to open-source projects and share my knowledge through blogging and community events.</p>
        <p><strong>Interests:</strong> Apart from coding, I enjoy reading books on technology, playing soccer, and exploring new places.</p>

        <p><strong>Future Goals:</strong> I aim to specialize in full-stack development, deepen my understanding of cloud computing, and contribute to the tech community by mentoring aspiring developers.</p>
        <p><strong>Skills:</strong> JavaScript, React.js, Node.js, HTML5, CSS3, MongoDB, Express.js</p>
        <p>Feel free to connect with me on LinkedIn or GitHub to discuss tech, share ideas, or collaborate on exciting projects!</p>
      </div>
    </div>
  );
};

export default AboutMe;


export {add,subtract}