import React, { Component } from 'react';
import './Portfolio.css';
import Container from '../../../../Container';
import Grid from '@material-ui/core/Grid';
import ProjectItem from './ProjectItem';

class PortfolioSection extends Component {
  render() {
    const { 
      projects, numProj, handleShowMore, handleShowLess, projItemLongestDesc, projItemInfoHeight 
    } = this.props;

    return (
      <section id="portfolio">
        <Container>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <h2>Portfolio</h2>
              <hr/>
              <div className="content">
                <Grid container spacing={24}>
                  {projects && projects.slice(0, numProj).map((project, i) => {
                    return (
                      <Grid key={project.name} item xs={12} sm={6} md={4}>
                        <ProjectItem 
                          index={i} 
                          project={project}
                          projItemLongestDesc={projItemLongestDesc}
                          projItemInfoHeight={projItemInfoHeight}
                        ></ProjectItem>
                      </Grid>
                    );
                  })}
                </Grid>
                {numProj < projects.length && (
                  <div className="show-ml-c">
                    <span onClick={handleShowMore}>
                      <i className="fas fa-caret-down"></i> show more
                    </span>
                  </div>
                )}
                {numProj >= projects.length && (
                  <div className="show-ml-c">
                    <span onClick={handleShowLess}>
                      <i className="fas fa-caret-up"></i> show less
                    </span>
                </div>
                )}
              </div> 
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default PortfolioSection;