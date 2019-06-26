import React from 'react';
import smart from './smart.png';
import port from './port.png';

const Projects = () => {
	return(
<div >
 <main>
  <article >
    <img className="mt6 vh-75 cover bg-center" src={smart} alt="smart"/>
    <div className="ph4 ph5-m ph6-l">
      <div className="pv5 f4 f2-ns measure center">
        <a className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir link dim underline" href="https://smart-brain-ser.herokuapp.com">Smart Brain - face detection</a>
        <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville ">
          Smart Brain - face detection, returns probability scores on the likelihood that the image contains human faces and coordinate locations of where those faces appear with a bounding box.<br/>
          Register, sing in, copy image url and see magic!
        </p>
      </div>
    </div>
  </article>
 </main>
 <main className='mt6'>
  <article >
    <img className="vh-75 cover bg-center" src={port} alt="background"/>
    <div className="ph4 ph5-m ph6-l">
      <div className="pv5 f4 f2-ns measure center">
        <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">Portfolio</h1>
       <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
          Working with React and using tachyons for styling.
       </p>
     </div>
    </div>
  </article>
 </main>
</div>
	);
}

export default Projects;