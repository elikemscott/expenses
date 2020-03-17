import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category:'',
            description:'',
            amount:'',
            date:'',
             
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          category: this.state.category,
          description: this.state.description,
          amount: this.state.amount,
          date: this.state.date
        };
        this.props.addUser(newUser) 
        this.setState({
          category:'',
          description:'',
          amount:'',
          date: ''
        });
      };

    render() {
        return (
            <div className="">
            <p ></p>
    
              <form onSubmit = {this.handleSubmit}>
            
               <span><input placeholder="Category" type ="text" name ="category" value={this.state.category} className ="username" onChange={this.handleChange} /></span><br />
               <span><input placeholder="Description" name ="description" type ="text" value={this.state.description} onChange={this.handleChange} /></span><br />
               <span><input type = " number" name ="amount" placeholder="Amount"value={this.state.amount} onChange ={this.handleChange}  /></span><br />
               <span><input placeholder="Date" name ="date" value={this.state.date} onChange={this.handleChange} /></span ><br />
                <button type="submit">Add</button>
    
             
          
               </form>
            </div>
        )
    }
}

export default UserForm
