import React, { Component } from 'react';

import Application from './Application';
import { connect } from 'react-redux';



class UserApplication extends Component {
    
    render() {
        const {application} = this.props;
        
        const {user} = this.props.auth;
        console.log('lalallaala')
        
        return (
            <div>
        {application.map((app) => (
          app.applicantid == user._id && 
          <Application app={app} key={app._id} />
        ))}
        
       
          
      </div>
      

            
        );
        
    }
}

function mapStateToProps({auth,job,application}) {
    return {
      auth,
      job,
      application

      
    };
  }
  
export default connect(mapStateToProps)(UserApplication);


