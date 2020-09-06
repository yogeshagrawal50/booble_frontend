import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';


export class facebook extends Component {
  state = {
    isLoggedIn: false,
    userID:'',
    name:'',
    email:' ',
    picture: ' '
  }
  responseGoogle  = res =>{
    this.setState({
      isLoggedIn : true,
      userID: res.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      picture: res.profileObj.imageUrl
    })
    
  }
  componentClicked = ()=>{
    console.log('clicked')
  }
  render() {
    let googlecontent;

    if(this.state.isLoggedIn){
      googlecontent = (
        <div style={{
          width:'400px',
          margin:'auto',
          background:'#f4f4f4',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt= {this.state.name} />
          <h2> Welcome</h2>
        </div>
      );
    }else{
      googlecontent = (
        <GoogleLogin
    clientId="65453333671-tji1gs98gdbh07ujv9m9o91cdgbdc3i0.apps.googleusercontent.com"
    buttonText="Sign In with Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    className ="btn google-btn social-btn"
    icon = "fab fa-google"
  />
      )
     
    }
    return (
      <div>
        {googlecontent}
      </div>
    )
  }
}

export default facebook
