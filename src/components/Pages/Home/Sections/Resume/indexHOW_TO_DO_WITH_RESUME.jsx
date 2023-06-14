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
        <Container>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <h2><i>R E S U M E</i></h2>
              <div className="content">
                <p>
                  <a href="" onClick={this.handleOpen}>
                    <i className="far fa-file-pdf"></i>
                  </a>
                </p>
              </div> 
            </Grid>
          </Grid>
        </Container>
        <Modal
          id="resume-doc-modal"
          aria-labelledby="resume-document"
          aria-describedby="resume-document"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="resume-doc-container">
            <object data={this.props.resume} type="application/pdf" width="100%" height="100%" className="resume-document"> 
              <p>It appears you do not have a PDF plugin for this browser.
              You can <a href={this.props.resume}>click here to
              download the PDF file.</a></p>  
            </object>
          </div>
        </Modal>
      </section>
    );
  }
}

export default ResumeSection;