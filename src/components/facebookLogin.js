import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export class facebook extends Component {
  state = {
    isLoggedIn: false,
    userID:'',
    name:'',
    email:' ',
    picture: ' '
  }
  responseFacebook  = res =>{
    this.setState({
      isLoggedIn : true,
      userID: res.userID,
      name: res.name,
      email: res.email,
      picture: res.picture.data.url
    })
  }
  componentClicked = ()=>{
    console.log('clicked')
  }
  render() {
    let fbcontent;

    if(this.state.isLoggedIn){
      fbcontent = (
        <div style={{
          width:'200px',
          margin:'auto',
          height:'10px',
          padding: '10px'
        }}>
          <img src={this.state.picture} alt= {this.state.name} />
          <h2> Welcome</h2>
        </div>
      );
    }else{
      fbcontent = (
        
        <FacebookLogin

        style={{
          width:'200px',
          margin:'auto',
          height:'10px',
          padding: '10px'
        }}
        appId="395663348096709"
        autoLoad={true}
        data-button-type="Sign In with Facebook"
        fields="name,email,picture"
        onClick= {this.componentClicked}
        callback = {this.responseFacebook}
        icon="fa-facebook"
      />
      )
     
    }
    return (
      <div>
        {fbcontent}
      </div>
    )
  }
}

export default facebook
