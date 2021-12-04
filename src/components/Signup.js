import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSingup, signup ,clearAuthState} from '../actions/auth';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
      restname: ''
    };
  }
  
  componentWillUnmount() {
    this.props.dispatch(clearAuthState())
  }



  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name, restname } = this.state;

    if (email && password && confirmPassword && name && restname) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, confirmPassword, name, restname));
    }
  };

//   responseGoogle = (response)=>{
//     console.log(response);
//     console.log(response.profileObj);
    
//     this.props.dispatch(signup(response.profileObj.email,response.profileObj.googleId,response.profileObj.googleId,response.profileObj.givenName))
//   }
  
  responseGoogle = (response)=>{
  console.log(response);
  console.log(response.profileObj);
 
  this.props.dispatch(signup(response.profileObj.email,response.profileObj.googleId,response.profileObj.googleId,response.profileObj.givenName))
}


  render() {

    const { inProgress, error ,isLoggedIn} = this.props.auth;

    if (isLoggedIn){
      return <Redirect to="/" />
    }
    return (
      <div>
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Restaurant Name"
            type="restname"
            required
            onChange={(e) => this.handleInputChange('restname', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>

       
        
        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Signup
          </button>
        </div>
      <div>
        <GoogleLogin
        clientId="890765322406-8kjk4ckk7rna07elrdugioj1elvdo3vo.apps.googleusercontent.com"
        buttonText="SignUp"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </div>
      </form>
  
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
