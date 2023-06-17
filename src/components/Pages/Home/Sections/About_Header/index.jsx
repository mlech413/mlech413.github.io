import React from 'react';
import './AboutHeader.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';

const AboutHeaderSection = ({summary}) => {
  return (
    <section id="about-header">
      <Container>
        <Grid>
          <div id="about-location">
            {/* <h2><i>A B O U T</i></h2> */}
          </div>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutHeaderSection;