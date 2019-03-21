import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur, ea autem esse inventore doloribus amet? Doloribus natus quos, perspiciatis similique ipsa quo culpa totam voluptates asperiores deleniti, corrupti repellendus!</p>
        </div>
        <div className='card-action gret lighten-4 grey-text'>
          <div>Posted by Yasha</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;