import React, { Component } from 'react';
import './Contact.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';

class ContactSection extends Component {
  state = {
    height: 300
  }

  componentDidMount() {
    this._updateHeight();
    window.addEventListener('resize', this._updateHeight);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this._updateHeight);
  }
  
  _updateHeight = () => {
    if (window.innerHeight > 400) {
      this.setState({height: window.innerHeight - 400});
    } 
  }

  render() {
    const { email, github, linkedIn } = this.props;

    return (
      <section id="contact" style={{height: `${this.state.height}px`}}>
        <Container>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <h2>Contact</h2>
              <hr/>
              <div className="content">
                <p>I can be reached directly at <span>{email}</span>.</p>
                <Grid container spacing={16}>
                  <Grid item xs={4}>
                    <a href={`mailto:${email}`}><i className="far fa-envelope"></i></a>
                  </Grid>
                  <Grid item xs={4}>
                    <a href={github} target="_blank"><i className="fab fa-github"></i></a>
                  </Grid>
                  <Grid item xs={4}>
                    <a href={linkedIn} target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default ContactSection;