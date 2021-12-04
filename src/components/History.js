import React, { Component } from 'react';

import Application from './Application';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/job';
import { Pie, Line, defaults } from 'react-chartjs-2';
import jobs from '../reducers/job';


class History extends Component {

  constructor(props) {
    super(props);

    this.state = {
      labels:[],
      datasets:[]
    };
  }

  componentDidMount() {

    const {job} = this.props;
    const {labels,datasets} = this.state
    console.log('dsdsdrutututuut',job)
    job.map((job) => (
      
      this.setState({
        labels:labels.push(job.itemname)
      })
      
    ))


    
  }

    
    render() {
      const {job} = this.props;
      const {user} = this.props.auth;
      console.log('JOVVVVVV',job)
      const labels = [0,]
      const data = ['',]
      const datacost = ['',]
      job.map((job) => (job.restname == user.restname && labels.push(job.itemname)))
      job.map((job) => (job.restname == user.restname && data.push(job.quantity)))
      job.map((job) => (job.restname == user.restname && datacost.push(job.costperitem)))
        return (
            <div>
        
        {/* <Widgets style={{marginTop:'1000px'}}/> */}
        <div style={{marginTop:'40px'}}>
        <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Quantity of Items Inside Inventory',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        height = {10}
        width = {50}
      />
      </div>
      <div style={{marginTop:'60px'}}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Cost of Items Inside Inventory',
              data: datacost,
              backgroundColor: [
                'rgba(34,139,34, 0.2)'
              ],
              borderColor: [
                'rgba(34,139,34, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        height = {10}
        width = {50}
      />
      </div>
      <Line
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Quantity of items wasted',
              data: [867, 785, 269, 786, 916, 837, 773, 406, 826, 961, 770, 759],
              backgroundColor: [
                'rgba(30,144,255, 0.2)'
              ],
              borderColor: [
                'rgba(30,144,255, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        height = {10}
        width = {50}
      />
      </div>
            
        );
        
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
      job:state.job,
      

      
    };
  }
  
export default connect(mapStateToProps)(History);
