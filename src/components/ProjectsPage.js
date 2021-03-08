import React from 'react';

const ProjectsPage = () => (
  <div className="content-container">
  	<div className="page-header">
		<h2 className="page-header__title">Projects</h2>
	</div>
	<div className="content-block-column">
		<div className="content-block-item">
			<div className="content-item-panel item-left">
				<h3>Education Us</h3>
				<p>Education Us is a lesson sharing web application for teachers. The application was created using JavaScript and React. All database storage is done using firebase</p>
			</div>
		</div>
		<div className="content-block-item">
			<div className="content-item-panel item-right">
				<h3>Recommend Me</h3>
				<p>Recommend Me is a movie recommendation web application. The application was created using JavaScript and React. All database storage is done using firebase</p>
			</div>
		</div>
	</div>
  </div>
);

export default ProjectsPage;