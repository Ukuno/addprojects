import React, { Component } from 'react';
import Project from './projects'
// import logo from './logo.svg';
// import './App.css';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Projects">
       <strong> {this.props.project.title} :</strong>{this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
