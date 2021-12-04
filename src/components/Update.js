import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';

import 'react-datepicker/dist/react-datepicker.css';

import Widgets from './Widgets.js';
import {createJob} from '../actions/job';
import { fetchJobs } from '../actions/job';
import Job from './Job';


class Update extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          itemnam:'',
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

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      const {user} = this.props.auth;
      const {job} = this.props;
        
      
        return (
            <div>
             

        <div>
        {job.map((job) => (
          <Job job={job} />
        ))}
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
  
  export default connect(mapStateToProps)(Update);