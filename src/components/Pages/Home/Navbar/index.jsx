import React, { Component } from 'react';
import './Navbar.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Container from '../../../Container';

class Navbar extends Component {
  state = {
    leftDrawer: false
  }

  toggleDrawer = () => {
    this.setState({leftDrawer: !this.state.leftDrawer});
  }

  goToSection = (e, section) => {
    e.preventDefault();
    this.props.goToSection(section);
    if (this.state.leftDrawer) this.setState({leftDrawer: false});
  }

  render () {
    const { navbarLight, name, activeSection } = this.props;

    return(
      <header className={navbarLight ? "navbar navbar-light" : "navbar"}>
        <Container>
          <div className="navbar-container">
            <div className="nav-icon-container">
              <IconButton color="inherit" onClick={this.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer 
                open={this.state.leftDrawer} 
                onClose={this.toggleDrawer}
              >
                <ul className="nav-section-sidebar">

                  <li className="sidebar-brand-logo">
                    <a 
                        href="#splash"
                        className={activeSection === 0 ? 'active' : ''} 
                        onClick={(e) => this.goToSection(e, 0)}
                      >
                        {name}
                    </a>
                  </li>
                  <hr />

                  <li>
                    <a 
                      href="#skills"
                      className={activeSection === 2 ? 'active' : ''} 
                      onClick={(e) => this.goToSection(e, 1)}
                    >
                      Skills
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#portfolio"
                      className={activeSection === 1 ? 'active' : ''} 
                      onClick={(e) => this.goToSection(e, 2)}
                    >
                      Portfolio
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#about"
                      className={activeSection === 3 ? 'active' : ''} 
                      onClick={(e) => this.goToSection(e, 3)}
                    >
                      About
                    </a>
                  </li>

                    <li id="hide-if-mobile"> {/* hide resume section on small screens, doesn't work properly on mobile */}
                      <a 
                        href="#resume"
                        className={activeSection === 4 ? 'active' : ''} 
                        onClick={(e) => this.goToSection(e, 4)}
                      >
                        Resume
                      </a>
                    </li>

                  <li>
                    <a 
                      href="#contact"
                      className={activeSection === 5 ? 'active' : ''} 
                      onClick={(e) => this.goToSection(e, 5)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </Drawer>
            </div>
            <a 
              href="#splash" 
              className="brand-logo"
              onClick={(e) => this.goToSection(e, 0)}
            >
              {name}
            </a> 
            <div className="nav-icon-container"></div>
            <ul className="nav-section">

            <li>
                <a 
                  href="#skills"
                  className={activeSection === 2 ? 'active' : ''}  
                  onClick={(e) => this.goToSection(e, 1)}
                >
                  Skills
                </a>
              </li>

              <li>
                <a 
                  href="#portfolio"
                  className={activeSection === 1 ? 'active' : ''} 
                  onClick={(e) => this.goToSection(e, 2)}
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a 
                  href="#about" 
                  className={activeSection === 3 ? 'active' : ''} 
                  onClick={(e) => this.goToSection(e, 3)}
                >
                  About
                </a>
              </li>

              <li id="hide-if-mobile">  {/* hide resume section on small screens, doesn't work properly on mobile */}
                <a 
                  href="#resume" 
                  className={activeSection === 4 ? 'active' : ''} 
                  onClick={(e) => this.goToSection(e, 4)}
                >
                  Resume
                </a>
              </li>
              
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 5 ? 'active' : ''} 
                  onClick={(e) => this.goToSection(e, 5)}
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </Container>
      </header>
    );
  }
}

export default Navbar;