import React from 'react';
import './About.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';

const AboutSection = ({summary}) => {
  return (
    <section id="about">
      <Container>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <h2>About</h2>
            <hr/>
            <div className="content">
              {summary && summary.map((paragraph, i) => {
                return <p key={`p-${i}`}>{paragraph}</p>;
              })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutSection;