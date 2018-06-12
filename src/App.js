import React, { Component } from 'react';
import Projects from './components/projects'
import AddProject from './components/addProjects'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({
      projects:[
        {
          title : 'web site design',
          category : 'web design'
        },
        {
          title : 'web app',
          category : 'Mobile dev'
        },
        {
          title : 'Ecommerce website',
          category : 'web dev'
        }
      ]
    });
  }
  handleAddProject(project){
    console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
