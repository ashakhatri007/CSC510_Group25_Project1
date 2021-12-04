import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
    ADD_JOB,
    UPDATE_JOB,
    UPDATE_APPLICATION,
    ADD_APPLICATION,
    ACCEPT_APPLICATION,
    REJECT_APPLICATION,
    CLOSE_JOB,
    ADD_MENU,
    UPDATE_MENU
  } from './actionTypes';



export function createJob(
    restname,restid,itemname,quantity,costperitem,datebought,dateexpired
  ) {
    return (dispatch) => {
      const url = APIURLS.createJob();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          restname,
          id: restid,
          itemname,
          quantity,
          costperitem,
          datebought,
          dateexpired
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(jobSuccess(data.data.job));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }
  

  export function createMenu(
    restname,restid,menuname,quantity,costmenu
  ) {
    return (dispatch) => {
      const url = APIURLS.createMenu();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          restname,
          id: restid,
          menuname,
          quantity,
          costmenu,
          
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(menuSuccess(data.data.menu));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }
  



  export function jobSuccess(job) {
    return {
      type: ADD_JOB,
      job,
    };
  }

  export function menuSuccess(menu) {
    return {
      type: ADD_MENU,
      menu,
    };
  }

  export function fetchJobs() {
    return (dispatch) => {
      
      const url = APIURLS.fetchJobs();
  
      fetch(url)
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('dsssdsds',data);
          dispatch(updateJobs(data.jobs));
        });
    };
  }
  export function fetchMenus() {
    return (dispatch) => {
      
      const url = APIURLS.fetchMenus();
  
      fetch(url)
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('menusssssss',data);
          dispatch(updateMenu(data.menu));
        });
    };
  }
  export function fetchApplications() {
    return (dispatch) => {
      
      const url = APIURLS.fetchApplication();
  
      fetch(url)
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('dsssdsds',data);
          dispatch(updateApplication(data.application));
        });
    };
  }



export function updateJobs(jobs) {
    return {
      type: UPDATE_JOB,
      jobs,
    };
  }

  export function updateMenu(menu) {
    return {
      type: UPDATE_MENU,
      menu,
    };
  }
export function updateApplication(application) {
    return {
      type: UPDATE_APPLICATION,
      application,
    };
  }


export function createApplication(applicantname,address,phonenumber,applicantId,hours,dob,gender,skills,applicantemail,managerId,jobname,jobId){
    return (dispatch) => {
        const url = APIURLS.createApplication();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            applicantname,
            address,
            phonenumber,
            applicantId,
            hours,
            dob,
            gender,
            skills,
            applicantemail,
            managerId,
            jobname,
            jobId
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('data', data);
            if (data.success) {
              // do something
            //   localStorage.setItem("token", data.data.token);
            //   dispatch(applicationSuccess(data.data.job));
            console.log('APPLICATION ADDED SUCCESSFULLY')
            dispatch(applicationSuccess(data.data.application));
              return;
            }
            // dispatch(signupFailed(data.message));
          });
      };

}

export function acceptApplication(userId,applicationId){
    return (dispatch) => {
        const url = APIURLS.acceptApplication();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            id:userId,
            applicationId
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('data', data);
            if (data.success) {
              // do something
            //   localStorage.setItem("token", data.data.token);
            //   dispatch(applicationSuccess(data.data.job));
            console.log('APPLICATION ADDED SUCCESSFULLY')
            
            dispatch(acceptSuccess(data.data.application));
              return;
            }
            // dispatch(signupFailed(data.message));
          });
      };

}

export function rejectApplication(userId,applicationId){
    return (dispatch) => {
        const url = APIURLS.rejectApplication();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            id:userId,
            applicationId
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('data', data);
            if (data.success) {
              // do something
            //   localStorage.setItem("token", data.data.token);
            //   dispatch(applicationSuccess(data.data.job));
            console.log('APPLICATION REJECTED SUCCESSFULLY')
            
            dispatch(rejectSuccess(data.data.application));
              return;
            }
            // dispatch(signupFailed(data.message));
          });
      };

}


export function closeJob(userId,jobId){
    return (dispatch) => {
        const url = APIURLS.closeJob();
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: getFormBody({
            id:userId,
            jobId
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log('data', data);
            if (data.success) {
              // do something
            //   localStorage.setItem("token", data.data.token);
            //   dispatch(applicationSuccess(data.data.job));
            console.log('APPLICATION REJECTED SUCCESSFULLY')
            
            dispatch(closeSuccess(data.data.job));
              return;
            }
            // dispatch(signupFailed(data.message));
          });
      };

}

export function closeSuccess(job) {
    return {
      type: CLOSE_JOB,
      status:'1',
      jobId:job._id
    };
  }
  
  
  
  

export function applicationSuccess(application) {
    return {
      type: ADD_APPLICATION,
      application,
    };
  }

  export function acceptSuccess(application) {
    return {
      type: ACCEPT_APPLICATION,
      status:'1',
      applicationId:application._id
    };
  }

  export function rejectSuccess(application) {
    return {
      type: REJECT_APPLICATION,
      status:'2',
      applicationId:application._id
    };
  }