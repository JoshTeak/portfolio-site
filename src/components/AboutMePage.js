import React from 'react';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.

class AboutMePage extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="content-container">
        <div className="page-header">
          <h1 className="page-header__title">Josh Londt</h1>
        </div>
        <div className="content-block">
          <img className="summary-img" />
        </div>
        <div className="content-block">
          <h1>Projects</h1>
          <div className="content-block-row">
            <div className="content-item selectable" onClick={() => { 
              return (
                window.open('https://curriculum-aides.herokuapp.com','mywindow1')
                )
              }
            }>
              <h3>Curriculum Aide</h3>
              <p>Education Us is a lesson sharing web application for teachers. The application was created using JavaScript and React. All database storage is done using firebase</p>
            </div>
            <div className="content-item selectable" onClick={() => { 
              return (
                window.open('https://limitless-castle-94218.herokuapp.com','mywindow2')
                )
              }
            }>
              <h3>Recommend Me</h3>
              <p>Recommend Me is a movie recommendation web application. The application was created using JavaScript and React. All database storage is done using firebase</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMePage;
