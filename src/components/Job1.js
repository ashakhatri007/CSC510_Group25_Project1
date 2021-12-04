import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from '.';
import { createApplication , closeJob} from '../actions/job';

class Job1 extends Component {
    
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
        const {menu } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        const { isLoggedIn } = this.props.auth;
        return (
          
            <div className="post" key={menu.restname} style={{width:'50vw',marginLeft:'50px'}}>
              {1>0? 
            <div className="post-header">
              
              <div >
                <h4 style={{display:'inline-block'}}>Job Name : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.restname}</span>
                  </div>


                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Location : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.menuname}</span>
                  </div>

                  <div >
                    
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Description : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.costmenu}</span>
                  </div>

                  
                  
                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Schedule : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.quantity}</span>
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
  
  export default connect(mapStateToProps)(Job1);