// import React from 'react';
// import './Project.css';
// import project_data from '../../assets/projectData';

// function Project() {
//   return (
//     <div id='project' className='myProject'>
//       <div className="myProject_title">
//         <h1>Project</h1>
//       </div>
//       <div className="Myproject-container">
//         {project_data.map((proj, index) => {
//           return (
//             <div key={index} className="project-card">
//               <img src={proj.proj_img} alt={proj.name} />
//               <h2>{proj.name}</h2>
//               <p>{proj.description}</p>
//               <div className="project-buttons">
//                 <a href={proj.code_link} target="_blank" rel="noopener noreferrer">
//                   <button>Get Code</button>
//                 </a>
//                 <a href={proj.live_link} target="_blank" rel="noopener noreferrer">
//                   <button>Live</button>
//                 </a>
//               </div>
              
//             </div>
//           );
//         })}
        
//       </div>
//       <a href="https://github.com/Swadeshwar-k" className="my-Github" target="_blank" rel="noopener noreferrer">  My GitHub</a>
//     </div>
//   );
// }

// export default Project;
import React, { useState, useEffect } from 'react';
import './Project.css';
import project_data from '../../assets/projectData';

function Project() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show first 3 projects on mobile if not expanded
  const visibleProjects = isMobile && !showAll ? project_data.slice(0, 3) : project_data;

  return (
    <div id="project" className="myProject">
      <div className="myProject_title">
        <h1>Projects</h1>
      </div>

      <div className="Myproject-container">
        {visibleProjects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.proj_img} alt={proj.name} />
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
            <div className="project-buttons">
              <a href={proj.code_link} target="_blank" rel="noopener noreferrer">
                <button>Get Code</button>
              </a>
              <a href={proj.live_link} target="_blank" rel="noopener noreferrer">
                <button>Live</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button (only visible on mobile) */}
      {isMobile && (
        <button className="view-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'View Less' : 'View More'}
        </button>
      )}

      <a
        href="https://github.com/Swadeshwar-k"
        className="my-Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
    </div>
  );
}

export default Project;
