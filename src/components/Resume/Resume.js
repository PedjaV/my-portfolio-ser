import React from 'react';
import cv from './cv.jpg'


const Resume = () => {
	return (
 <div>
	<article className=" dib br2 shadow-2  fl w-50 tc mw6 mh3  bg-gray br3 pa3 pa4-ns mv5 ba b--black-10 calisto">
	 <div className="tc">
	    <img src={cv} alt="CV" />
	    <h1 className="f2">Predrag Veljović</h1>
	    <hr className="mw5 bb bw1 b--black-10" />
	 </div>
	 <ul className="lh-copy measure center f4 black-70">
	  <ul className="list pl0">
	    <li className="pa3 pa4-ns bb b--black-10">
	     <b className="db f3 mb1">Birthdate</b>
	      <span className="f5 db lh-copy measure">
	        09.08.1988
	      </span>
	    </li>
	    <li className="pa3 pa4-ns bb b--black-10">
	      <b className="db f3 mb1">
	        Residence
	      </b>
	       <span className="f5 db lh-copy measure">
	         Belgrade
	       </span>
	    </li>
	  </ul>
	 </ul>
 	 <h1 className="db f3 mb1 nb3-l">Language</h1>
  <div className=" pa3 pa4-ns bb b--black-10">
      <section className="ph3 ph5-ns pv4">
	    <p className="mr1 mb2 f3 link b db pa5 ba b--black-20 black dib ph2 pv1">English</p>
	    <p className="mr1 mb2 f3 link b db pa2 ba b--black-20 black dib ph2 pv1">Italian</p>
      </section>
  		</div>
  	</article>
	<article className="  dib fl br2 shadow-2  w-50 tc mw100 mh3  bg-gray br3 pa3 pa4-ns mv5 ba b--blue-10 baskerville">
		<h1 className="f4 bg-near-black white mv0 pv2 ph3">Education</h1>
     <div className="  pa3 bt">
        <p className="f2  lh-title measure-m mv0 black">Forest Engineer</p>
		<p className="f4  lh-copy measure mv0">Faculty of Forestry , Belgrade | 2007 - 2018</p><br/>
		<p className="f2  lh-title measure mv0">Software Engineering</p>
		<p className="f4  lh-copy measure mv0 black">It Academy, Belgrade | 2017 - 2018</p>
     </div>
   </article>
   <article className=" dib fl w-50 tc mw100 mh3  bg-gray br3 pa3 pa4-ns mv3 ba b--blue-10 baskerville">
 		<h1 className="f4 bg-near-black white mv0 mb6 pv2 ph3 ">Experience</h1>
  		<div className=" pa3 bt">
	        <p className="f2  lh-title measure-m mv0 black">NUX seča drveća, Kraljevo</p>
			<p className="f3  lh-title measure-m mv0 black">2011 - Present</p>
			<p className="f3  lh-title measure-m mv0 black">Owner</p><br/>
			<p className="f4  lh-copy measure mv0 black ml5">Product sales, market research, daily contact with customers,
					processing of inquiries and requests for bids, bidding
					and profits, operational processing of concluded sales transactions, invoicing of goods.
			</p>
  		</div>
   </article>
   <article className="  dib fl br2 shadow-2 w-50 tc mw100 mh3  bg-gray br3 pa3 pa4-ns mv3 ba b--blue-10 code">
			<h1 className="f4 bg-near-black white mv0 pv2 ph3">Skils</h1>
 		<section className="ph3 ph5-ns pv4">
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">HTML5</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">CSS</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">Bootstrap</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">Javascript</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">React</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">React-Redux</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">Nodejs</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">Git/GitHub</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">SQL</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">PSQL</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">UML</p>
		    <p className="mr1 mb2 f3 link b db pa2  ba b--black-20 black dib ph2 pv1">C#</p>
  		</section>
   </article> 
</div>
  );
}


export default Resume;