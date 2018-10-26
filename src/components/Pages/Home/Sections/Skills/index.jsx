import React from 'react';
import './Skills.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';

const SkillsSection = ({frontEnd, backEnd, other}) => {
  return (
    <section id="skills">
      <Container>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <h2>Skills</h2>
            <hr/>
            <div className="content">
              <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                  <h3>Front End</h3>
                  <ul>
                    {frontEnd && frontEnd.map((skill) => {
                      return <li key={skill}>{skill}</li>;
                    })}
                  </ul>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <h3>Back End</h3>
                  <ul>
                    {backEnd && backEnd.map((skill) => {
                      return <li key={skill}>{skill}</li>;
                    })}
                  </ul>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <h3>Other</h3>
                  <ul>
                    {other && other.map((skill) => {
                      return <li key={skill}>{skill}</li>;
                    })}
                  </ul>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default SkillsSection;