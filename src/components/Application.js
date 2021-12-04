import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptApplication, rejectApplication } from '../actions/job';
import application from '../reducers/application';

class Application extends Component {
   
   
    
    handleApply1 = () => {

       
        
        const {user} = this.props.auth;
       
        const {app} = this.props
        console.log('AAAAAPPPPP',app._id)
        this.props.dispatch(acceptApplication(user._id,app._id))

       
      }
    handleApply2 = () => {

       
        
        const {user} = this.props.auth;
       
        const {app} = this.props
        console.log('AAAAAPPPPP',app._id)
        this.props.dispatch(rejectApplication(user._id,app._id))

       
      }
    
    render() {
        const { app } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        console.log('APPPPPP',app);
        const { isLoggedIn } = this.props.auth;
        return (
            <div className="post"  style={{width:'50vw',marginLeft:'50px'}}>
            <div className="post-header">

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Job Name : </h4> 
                <span style={{marginLeft:'10px'}}>{app.jobname}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Applicant Name : </h4> 
                <span style={{marginLeft:'10px'}}>{app.applicantname}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Address : </h4> 
                <span style={{marginLeft:'10px'}}>{app.address}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Phone Number : </h4> 
                <span style={{marginLeft:'10px'}}>{app.phonenumber}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Hours Available : </h4> 
                <span style={{marginLeft:'10px'}}>{app.hours}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>DOB : </h4> 
                <span style={{marginLeft:'10px'}}>{app.dob}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Gender : </h4> 
                <span style={{marginLeft:'10px'}}>{app.gender}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Skills : </h4> 
                <span style={{marginLeft:'10px'}}>{app.skills}</span>
            </div>

            <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Status : </h4> 
                {app.status == '0' && <span style={{marginLeft:'10px'}}>In Progress</span>}
                {app.status == '1' && <span style={{marginLeft:'10px'}}>Accepted</span>}
                {app.status == '2' && <span style={{marginLeft:'10px'}}>Rejected</span>}
                
            </div>
{/*               
              <div className="post-content">{app.dob} </div>
              <div className="post-content">{app.status} </div> */}

             
            {/* {isLoggedIn && <div className="field">
        <button className="button save-btn" onClick={this.handleApply} style={{width:'50%'}}>Apply</button>
        </div> } */}
        {user.role == 'Manager' && user._id == app.manageremail && <div className="field" >
         <button className="button save-btn" onClick={this.handleApply1} style={{width:'40%',backgroundColor:'green'}}>Accept</button>
         <button className="button save-btn" onClick={this.handleApply2} style={{width:'40%',marginLeft:'20px',backgroundColor:'red'}}>Reject</button>
         </div>}
        
            </div>
          </div>
        );
    }
}

function mapStateToProps({ auth, job,application }) {
    return {
      auth,
    //   application,
    //   job
      
    };
  }
  
  export default connect(mapStateToProps)(Application);


