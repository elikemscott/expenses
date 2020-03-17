import React from 'react'


 function UserInfo(props) {
  
            return (
            <div >
              <h4>Category: {props.username}</h4>
              <p>Description: {props.expenditure}</p>
              <p>Amount: {props.description}</p>
              <p>Date: {props.date}</p>
              <hr />
            </div>
          
          );
        
    
}
export default UserInfo;
