import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {clearAuthState,editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';



import Widgets from './Widgets.js';
import {createJob} from '../actions/job';
import { fetchJobs } from '../actions/job';
import Job from './Job';


class Goal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          restname:'',
          restid: '',
          itemname:'',
          quantity:'0',
          costperitem:'',
          datebought:'',
          dateexpired:'',
          editMode: false,
        };
      }
    

    handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText)
         
        this.props.dispatch(searchUsers(searchText));
        
      };
      handleSave1 = () => {

        const {restname,restid,itemname,quantity,costperitem,datebought,dateexpired} = this.state;
    
        const {user} = this.props.auth;
        const {job} = this.props;
        console.log(itemname)
    
        // this.setState({
        //   restname: user.restname,
        //   restid:user._id
        // })
    
        this.props.dispatch(editItem(itemname,quantity))
    
        this.setState({
          itemname:''
        })
    
       
        
      }
    
   

    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleInputChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        
    
      }

    
  handleSave = () => {

    const {restname,restid,itemname,quantity,costperitem,datebought,dateexpired} = this.state;

    const {user} = this.props.auth;

    this.setState({
      restname: user.restname,
      restid:user._id
    })

    this.props.dispatch(createJob(user.restname,user._id,itemname,quantity,costperitem,datebought,dateexpired))

    this.setState({
      itemname:''
    })
    
  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      const {user} = this.props.auth;
      const {job} = this.props;
        
      
        return (
            <div>
              
           <div className="goal-form" style={{width:'600px',height:'500px',marginLeft:'100px'}} >
           <span className="login-signup-header">Add Inventory</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            {/* <form className="login-form"> */}

            <div className="field">
              
          <input
            placeholder="Item Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('itemname', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Quantity"
            type="text"
            required
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Cost per item"
            type="text"
            required
            onChange={(e) => this.handleInputChange('costperitem', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Date Bought"
            type="text"
            required
            onChange={(e) => this.handleInputChange('datebought', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Date Expired"
            type="text"
            required
            onChange={(e) => this.handleInputChange('dateexpired', e.target.value)}
          />
        </div>

        {/* <div className="field">
          <input
            placeholder="Schedule"
            type="text"
            required
            onChange={(e) => this.handleInputChange('schedule', e.target.value)}
          />
        </div> */}
        
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave} >Save</button>
        </div>
        
        

        </div>

         
        <div className="goal-form" style={{width:'600px',height:'300px',marginLeft:'100px'}} >
           <span className="login-signup-header">Update Item</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            {/* <form className="login-form"> */}

            <div className="field">
              
          <input
            placeholder="Item Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('itemname', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Quantity"
            type="text"
            required
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
          />
        </div>
{/* 
        <div className="field">
          <input
            placeholder="Cost per item"
            type="text"
            required
            onChange={(e) => this.handleInputChange('costperitem', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Date Bought"
            type="text"
            required
            onChange={(e) => this.handleInputChange('datebought', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            placeholder="Date Expired"
            type="text"
            required
            onChange={(e) => this.handleInputChange('dateexpired', e.target.value)}
          />
        </div> */}

        {/* <div className="field">
          <input
            placeholder="Schedule"
            type="text"
            required
            onChange={(e) => this.handleInputChange('schedule', e.target.value)}
          />
        </div> */}
        
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave1} >Save</button>
        </div>
        
        

        </div>
        
        
        
               
        
        </div>
        
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
      job:state.job,
    };
  }
  
  export default connect(mapStateToProps)(Goal);