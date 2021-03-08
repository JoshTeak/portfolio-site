import React from 'react';

const ProjectsPage = () => (
 	<div className="content-container">
	  	<div className="page-header">
			<h2 className="page-header__title">Projects</h2>
		</div>
		<div className="content-block-column">
			<div className="content-block-item selectable" onClick={() => { 
				return (
					window.open('https://curriculum-aides.herokuapp.com','mywindow1')
					)
				}
			}>
				<div className="content-item-panel item-left" >
					<h2>Curriculum Aide</h2>
					<p>Curriculum Aide is a lesson sharing web application for teachers. The application was created using JavaScript and React. All database storage is done using firebase. You are required to login using a Google account.</p>
					<p>On the dashboard page of Curriculum Aide, users can find a list of lessons uploaded by the community. Clicking on the sidebar will expose the filter options. These options allow lessons to be filtered by subject area and arranged in order by various options such as lesson duration, or year level. You can also select to search only lessons you have favorited. After filtering a list of lessons matching your search criteria will be available. Clicking on a lesson will display the lessons content along with an options button in the top right hand corner of that lesson. This button allows you to print, favourite, rate or report the lesson. If you are the creator of the lesson you will have an additional option to edit the lesson.</p>
					<p>The create lesson page allows you to contribute a lesson to the Curriculum Aide’s lesson list for everyone to view. Each text area will have a prompt describing how to fill each section in. Once finished click “Save Lesson Plan” and you lesson will be uploaded.</p>
				</div>
			</div>
			<div className="content-block-item selectable" onClick={() => { 
				return (
					window.open('https://limitless-castle-94218.herokuapp.com','mywindow2')
					)
				}
			}>
				<div className="content-item-panel item-right">
					<h2>Recommend Me</h2>
					<p>Recommend Me is a movie recommendation web application. The application was created using JavaScript and React. All database storage is done using firebase You are required to login using a Google account. The application works by using the Movie Database (IMDB Alternative) API which can be found on RapidAPI to access the movie’s information.</p>
					<p>On the seen page of Recommend Me, you will see a movie poster with prompt whether you have or haven’t seen the movie. Each movie that you have seen will be added to your list of seen movies and updated to Firebase which you can then recommend from on the recommend page. </p>
					<p>On the recommend page, you will see a movie poster with prompt whether you would or wouldn’t recommend the movie to someone else. Each movie that you recommend will be added to your list of recommended movies and updated to Firebase which is then put through an algorithm to provide you with a list of movies recommended to you.</p>
					<p>On the find page, will see a list of movies with a recommendation rating from 100 to -100 based on the recommendations of people with similar tastes in movies.</p>
				</div>
			</div>
		</div>
  	</div>
);

export default ProjectsPage;