import React from 'react';
import './Contact.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';

const ContactSection = ({email, github, githubDisp, linkedIn, linkedInDisp, phone, phoneDisp, smallMap, largeMap}) => {
  return (
    <section id="contact">

      {/* <Container>
        <Grid container>
          <Grid item xs={2} sm={1} md={2} lg={2} xl={3}>
            <div></div>
          </Grid>
          <Grid item xs={2} sm={5} md={4} lg={4} xl={3}>
            <div className="google-maps">
              <div className="map-header">
                My local area:
              </div>
              <br/>
              <iframe
                src={smallMap}
                width={"600"} 
                height={"450"}
                frameborder={"5"}
                title={"map"}
                allowfullscreen>
              </iframe>
            </div>
          </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="contact-text">
              <a href={`mailto:${email}`}><i className="far fa-envelope"></i>&nbsp;&nbsp; {email}</a>
              <br/>
              <a href={`tel:${phone}`}><i className="fas fa-phone"></i>&nbsp;&nbsp; {phoneDisp}</a>
              <br/>
              <a href={github} target="_blank"><i className="fab fa-github"></i>&nbsp;&nbsp; {githubDisp}</a>
              <br/>
              <a href={linkedIn} target="_blank"><i className="fab fa-linkedin-in"></i>&nbsp;&nbsp; {linkedInDisp}</a>
              <br/>
              <a href={largeMap} target="_blank"><i className="fas fa-globe-americas"></i>&nbsp;&nbsp; Central/Northern New Jersey</a>
              <br/><br/>
            </div>
          </Grid>  
        </Grid>
      </Container> */}

    </section>
  );
}

export default ContactSection;