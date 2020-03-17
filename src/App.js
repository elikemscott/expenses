import "./App.css";

import React, { Component } from "react";
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          category: "Category",
          description: "Description",
          amount: "Amount",
          date: "",
          
        }
      ],
    
     
    };
  }

  AddNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "App_Name">
        <div className ="App" >
           {this.state.users.map((field, index) => {
            return (
            <div >
            <UserInfo key={index } name = {field.category} expenditure={field.description} description={field.amount} date={field.date} />
            </div>
          
          );
        })}
        
        </div>
          
        </div>
       
        
       

      </div>
    )
  }
}

export default App

