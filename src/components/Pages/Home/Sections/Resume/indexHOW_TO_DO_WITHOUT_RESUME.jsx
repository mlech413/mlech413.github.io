import React, { Component } from 'react';
import './Resume.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

class ResumeSection extends Component {
  state = {
    open: false,
  };

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <section id="resume">
 




 
      </section>
    );
  }
}

export default ResumeSection;

