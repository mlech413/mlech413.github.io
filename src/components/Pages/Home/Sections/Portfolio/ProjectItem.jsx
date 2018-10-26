import React, { Component } from 'react';
import './Portfolio.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

class ProjectItem extends Component {
  showTechnologies = () => {
    let tech = '';
    this.props.project.technologies.forEach((t, i) => {
      if (i < this.props.project.technologies.length - 1) {
        tech += `${t}, `;
      } else {
        tech += t;
      }
    });
     return tech;
  }

  render() {
    const { index, project, projItemLongestDesc, projItemInfoHeight } = this.props;

    return (
      <Card>
        <CardActionArea>
          <div className="proj-item-img-c">
            <img src={require(`../../../../../images/projects/${project.image}`)} alt={project.name}></img>
            <div className="proj-item-img-overlay">
              <p>{this.showTechnologies()}</p>
            </div>
          </div>
          <div 
            id={`proj-item-${index}`} 
            className="proj-item-info"
            style={index === projItemLongestDesc ? {} : {height: projItemInfoHeight} }
          >
            <h1 className="proj-item-name">{project.name}</h1>
            <p className="proj-item-desc">{project.description}</p>
          </div>
        </CardActionArea>
        <div className="proj-item-links">
          <a href={project.github} target="_blank">
            <i className="fab fa-github fa-sm"></i> github
          </a>
          <a href={project.live} target="_blank">
          <i className="fas fa-external-link-alt fa-sm"></i> live
          </a>
        </div>  
      </Card>
    );
  }
}

export default ProjectItem;