import React from 'react';
import './About.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';
import phone_face from '../../../../../images/phone_face.jpg';

const AboutSection = ({name, summary1, summary2, summary3, summary4, summary5}) => {
  return (
    <section id="about">
      <Container>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <h2 id="about-name-location"><i>{name}</i></h2>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <div className="about-content">
              <div className="about-img-container">
                  <img 
                    src={[phone_face]} 
                    alt={"Mark"} 
                  ></img>
              </div>
              <div className="about-text-items">
                {summary1 && summary1.map((paragraph, i) => {
                  return <p key={`p-${i}`}><i className="fa fa-check"></i>&nbsp; {paragraph}</p>;
                })}
                {summary2 && summary2.map((paragraph, i) => {
                  return <p key={`p-${i}`}><i className="fa fa-check"></i>&nbsp; {paragraph}</p>;
                })}
                {summary3 && summary3.map((paragraph, i) => {
                  return <p key={`p-${i}`}><i className="fa fa-check"></i>&nbsp; {paragraph}</p>;
                })}
                {summary4 && summary4.map((paragraph, i) => {
                  return <p key={`p-${i}`}><i className="fa fa-check"></i>&nbsp; {paragraph}</p>;
                })}
                {summary5 && summary5.map((paragraph, i) => {
                  return <p key={`p-${i}`}><i className="fa fa-check"></i>&nbsp; {paragraph}</p>;
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutSection;