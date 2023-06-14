import React, { Component } from 'react';
import './Splash.css';
import avatar from '../../../../../images/avatar.jpg';
import PropTypes from 'prop-types';
import Container from '../../../../Container';

class SplashSection extends Component {
  goToSection = (e, section) => {
    e.preventDefault();
    this.props.goToSection(section);
  }

  render() {
    const { name, headline, github, linkedIn } = this.props;

    return (
      <section>
        <Container splash={true}>
          <div className="w3-display-container">
            <div className="w3-display-middle title">
              <span className="w3-center">
                <div className="splash-img-container">
                  <img 
                  src={avatar} 
                  alt={name} 
                  onClick={(e) => this.goToSection(e, 3)}
                  ></img>
                </div>
                <h1>{name}</h1>
                <hr />
                <h2>{headline}</h2>
                <ul>
                  <li>
                    <a 
                      href="#portfolio" 
                      onClick={(e) => this.goToSection(e, 1)}
                    >
                      <i className="fa fa-folder-open"></i>
                    </a>
                  </li>
                  <li>
                    <a href={github} target="_blank"><i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href={linkedIn} target="_blank"><i className="fab fa-linkedin"></i></a>
                  </li>
                </ul> 
              </span>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

SplashSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SplashSection);