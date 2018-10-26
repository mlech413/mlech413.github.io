import React, { Component } from 'react';
import './Splash.css';
import avatar from '../../../../../images/avatar.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../../../Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    backgroundColor: "rgba(255,255,255,.24)",
    minWidth: "240px",
    color: "white",
    borderRadius: "2px",
    WebkitBoxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
  },
  cardContent: {
    padding: "24px"
  }
};

class SplashSection extends Component {
  goToSection = (e, section) => {
    e.preventDefault();
    this.props.goToSection(section);
  }

  render() {
    const { name, headline, github, linkedIn, classes } = this.props;

    return (
      <section>
        <Container splash={true}>
          <div className="splash-card-container">
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
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
                      <i className="fas fa-folder-open"></i>
                    </a>
                  </li>
                  <li>
                    <a href={github} target="_blank"><i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href={linkedIn} target="_blank"><i className="fab fa-linkedin"></i></a>
                  </li>
                </ul> 
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    );
  }
}

SplashSection.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SplashSection);