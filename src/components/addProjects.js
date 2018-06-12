import React, { Component }from 'react';

class AddProjects extends Component{
    constructor(){
        super();
        this.state = {
            newProject : {}
        }
    }
    static defaultProps = {
        categories : ['select category','web design','Mobile development', 'web development']
    }


    handleSubmit(e){
       if(this.refs.title.value === ""){
           alert('title is required');
       } else {
           this.setState({newProject:{
               title : this.refs.title.value,
               category : this.refs.category.value
           }}, function(){
            //    console.log(this.state);
            this.props.addProject(this.state.newProject);
           });
       }
        e.preventDefault();
    }
    render(){
        let categoryOption = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return(
            <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title : </label>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Catagory : </label>
                    <select ref="category">
                        {categoryOption}
                    </select>
                </div>
                <div>
                    <input type='submit' value="submit" />
                </div>
                
            </form>
            </div>
        );
    }
}

export default AddProjects;