import React, { Component } from 'react'
import { handleLogin, isLoggedIn } from "../services/auth"
import Layout from '../components/layout';
import { navigate } from "gatsby"

class login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }
    
    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }
     
    handleSubmit = event => {
         event.preventDefault()
        const isValid = handleLogin(this.state)
        console.log(isValid);
        if(isValid){
            navigate(/profile/)
        }
     }

  render() {
    return (
      <>
       <Layout></Layout>
       <h1 className="text-center p-5">Login</h1> 
        <form style={{width:"50%"}} className="mx-auto" onSubmit={event => { this.handleSubmit(event)}}>
            <label>
                Username
            </label>
            &nbsp;
           <div className="form-group">
               <input className="form-control" name="username" type="text" onChange={this.handleUpdate} />
           </div>

           <label>
               Password
           </label>
            &nbsp;
           <div className="form-group">
               <input className="form-control" name="password" type="password" onChange={this.handleUpdate} />
           </div> 
           <input type="submit" value="Log In"/>
        </form>
      </>
    )
  }
}

export default login
