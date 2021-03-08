import React from 'react';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.

export const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links">
        <div className="footer__links-group">
          <button className="button button--link" onClick={() => {
            if(history.location.pathname !== "/aboutme")
            {
              history.push({
                pathname: "/aboutme",
                state: { previousPath: history.location}
              });
              this.forceUpdate();
            }
          }}>About Me</button>
          <button className="button button--link" onClick={() => {
            if(history.location.pathname !== "/projects")
            {
              history.push({
                pathname: "/projects",
                state: { previousPath: history.location}
              });
              this.forceUpdate();
            }
          }}>Projects</button>
          <button className="button button--link" onClick={() => {
            if(history.location.pathname !== "/contact")
            {
              history.push({
                pathname: "/contact",
                state: { previousPath: history.location}
              });
              this.forceUpdate();
            }
          }}>Contact</button>
        </div>
        <div className="footer__links-group">
          <a href="https://www.linkedin.com/in/josh-londt-764064116/">LinkedIn</a>
          <a href="https://github.com/JoshTeak">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
