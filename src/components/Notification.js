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
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      marginLeft: 20,
      marginTop: 50,
      justifyContent: 'center',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  


class Notification extends Component {
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
        
      let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      var parts = utc.split('/')
      
        return (
            <div>
             <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}>
    {
      (1>0) ?
        <Box flexDirection="row-reverse">
          {
            job.map(job => {
            var parts2 = job.dateexpired.split('/')

            if (Number(parts2[0]) - Number(parts[2]) < 10 && Number(parts2[1]) - Number(parts[1] < -2)){

              return <Card  key={job._id}>
                <CardContent>
                
                  <Typography color="secondary" gutterBottom>
                    Expiration Alert!
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom>
                    {job.dateexpired}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {job.itemname} has expired on {job.dateexpired}
                  </Typography>
                  <Typography  color="textSecondary">
                    {job.quantity} unit{job.quantity > 1 ? "s have" : " has"} gone bad. Please order more.
                  </Typography>
                </CardContent>
              </Card> }
            })
          }
          {
            job.map(job => {
              return <Card  key={job._id}>
                <CardContent>
                  <Typography  color="primary" gutterBottom>
                    Expiration Alert!
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom>
                    {job.dateexpired}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {job.itemname} is about to expire on {job.dateexpired}
                  </Typography>
                  <Typography  color="textSecondary">
                    {job.quantity} unit{job.quantity > 1 ? "s are" : " is"} about to expire. Order replacement soon!
                  </Typography>
                </CardContent>
              </Card>
            })
          }
          {
            
            job.map(job => {
            if (job.dateexpired < utc){
                if (job.quantity<10){
              return <Card  key={job._id}>
                <CardContent>
                  <Typography  color="secondary" gutterBottom>
                    Low Inventory Alert!
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom>
                    Only {job.quantity} unit{job.quantity > 1 ? "s are" : " is"} left in stock.
                  </Typography>
                  <Typography variant="h5" component="h2">
                    It looks like some of your inventory is getting low
                  </Typography>
                  <Typography variant="h6" component="h2" color="textSecondary">
                    {job.itemname} quantity is low. Try checking quantity or restricting use.
                  </Typography>
                </CardContent>
              </Card>}}
            })
          }
        </Box> :
        <div style={{
          display: 'flex',
          width: '100vw',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: "3rem" }}>
            All caught up!✔
          </div>
        </div>
    }

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
  
  export default connect(mapStateToProps)(Notification);