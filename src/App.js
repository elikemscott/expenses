import "./App.css";

import React, { Component } from "react";
import { connect } from 'react-redux';
import {addUser} from './store/usersAction' 
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

export class App extends Component {
  

  AddNewUser = (newUser) => {
    this.props.addUser(newUser)
  };

  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "App_Name">
        <div className ="App" >
           {this.props.users.map((field, index) => {
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


const mapStateToProps = (state) => ({
  users: state.users

})

const mapDispatchToProps = {
  addUser: addUser
}

export default  connect( mapStateToProps, mapDispatchToProps)(App);


