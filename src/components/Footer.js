import React from 'react';
import { history } from '../routers/AppRouter'; //todo consider importing from a different file.

export const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links">
        <a className="selectable" onClick={() => { 
            return (
              window.open('https://www.linkedin.com/in/josh-londt-764064116','mywindow1')
              )
            }
          }
        >LinkedIn</a>
        <a className="selectable" onClick={() => { 
            return (
              window.open('https://github.com/JoshTeak','mywindow1')
              )
            }
          }
        >GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
