import React from 'react';
import { history } from '../routers/AppRouter';

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__links">
            <div className="header__links-group">
              {
                history.location.pathname !== "/aboutme"? 
                <button className="button button--link selectable" onClick={() => {
                  if(history.location.pathname !== "/aboutme")
                  {
                    history.push({
                      pathname: "/aboutme",
                      state: { previousPath: history.location}
                    });
                    this.forceUpdate();
                  }
                }}>Josh Londt</button> : ""
              }
            </div>
            <div className="header__links-group">
              <button className="button button--link selectable" onClick={() => {
                if(history.location.pathname !== "/projects")
                {
                  history.push({
                    pathname: "/projects",
                    state: { previousPath: history.location}
                  });
                  this.forceUpdate();
                }
              }}>Projects</button>
              <button className="button button--link selectable" onClick={() => {
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
          </div>
        </div>
      </header>
    )
  }
};

export default Header;
