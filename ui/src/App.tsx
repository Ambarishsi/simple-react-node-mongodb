import React from "react";
import * as axios_utils from './utils/axios_utils';
import './App.scss';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
 
class App extends React.Component{

state={
  users: [],

}
    
  
   getAllUsers = ()  =>{
    axios_utils.getAllUsers()
            .then(res => {
                 console.log(res.data.data);
                this.setState({
                    ...this.state,
                    users: res.data.data
                });
            });
}

componentDidMount(){
    this.getAllUsers();
}
  render() {
  
    const { users } = this.state;
    
    console.log('dadadad',users);
 
    return (
      <>

      <Container className="margin-top">

        {
          users.map(user => {
            console.log('dadadad',user);
            return (
              <Alert key={user['id']} variant="primary">
               
                <Alert.Heading> Name: {user[ 'name']}</Alert.Heading>
                <p>
                  <b>Email:</b> {user[ 'email']}
                </p>
                <p>
                  <b>Gender:</b> {user[ 'gender']}
                </p>
                <p>
                  <b>Status:</b> {user[ 'status']}
                </p>
              </Alert>
            )
          })
         
        }
        
      </Container>
       
      </>
    );
  }

}
 
export default App;