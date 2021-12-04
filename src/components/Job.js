import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createApplication , closeJob} from '../actions/job';

class Job extends Component {
    
    handleApply = () => {

        
    
        const {user} = this.props.auth;
        const {job} = this.props;
    
        this.props.dispatch(createApplication(user.name,user.address,user.phonenumber,user._id,user.hours,user.dob,user.gender,user.skills,user.email,job.managerid,job.name,job._id))
       
      }

      handleApply1 = () => {

        
    
        
            const {user} = this.props.auth;
            const {job} = this.props;
           
            this.props.dispatch(closeJob(user._id,job._id))
    
           
          
       
      }
    
    render() {
        const { job } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        const { isLoggedIn } = this.props.auth;
        return (
          
            <div className="post" key={job._id} style={{width:'50vw',marginLeft:'50px'}}>
              {user.restname == job.restname? 
            <div className="post-header">
              
              <div >
                <h4 style={{display:'inline-block'}}>Job Name : </h4> 
                <span style={{marginLeft:'10px'}}>{job.restname}</span>
                  </div>


                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Location : </h4> 
                <span style={{marginLeft:'10px'}}>{job.itemname}</span>
                  </div>

                  <div >
                    
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Description : </h4> 
                <span style={{marginLeft:'10px'}}>{job.costperitem}</span>
                  </div>

                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Pay : </h4> 
                <span style={{marginLeft:'10px'}}>{job.dateexpired}</span>
                  </div>

                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Schedule : </h4> 
                <span style={{marginLeft:'10px'}}>{job.datebought}</span>
                  </div>
                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Schedule : </h4> 
                <span style={{marginLeft:'10px'}}>{job.quantity}</span>
                  </div> 
                
                
              
            
            </div> : []}
          </div>
        );
    }
}

function mapStateToProps({ auth, job,application }) {
    return {
      auth,
      application,
    //   job
      
    };
  }
  
  export default connect(mapStateToProps)(Job);