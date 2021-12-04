# FrontEnd:
## 1. Authentication(src/actions/auth.js)
### I. Function Login
#### Parameters:(Email, Password)
#### Method: 'POST'
#### Decription: Makes an API call to create a session for the user. The function receives JSON data from the server side.
If the login is successful, the function calls "Login successful" function that updates the state of the user on client side.
"Login Failed" function is calledif there is an error or if the credentials are invalid.
#### Output:
data(token, user)
#### message:sign in successful
success:True/False

### II. Function SignUp
#### Parameters: Email, password, confirm Password, name
#### Method: "Post"
#### Description:
Create a user(Manager or Applicant). The server side checks the conditions.
a.Password & Confirm Password matches.
b.If a user already exists with the same email. If user already exists, it returns the user.
c.Creates a new user if there is not a user with the same email in DB.

The function updates the state of the user on client side on success.

### III. Function Edit User Profile
#### Parmaters: 
name, password, role, address, phonenumber, hours, gender, dob, skills
#### Method: "Post"
#### Description: 
Finds the user inside the database & updates its name, password, role, address, phonenumber, hours, gender, dob, skills
#### Output: 
#"User is updated Successfully"
data{user}
success:True

### IV. Function createJob
#### Parameters: 
jobname, id, skills, location, description, pay, schedule
#### Method: "Post"
#### Description: 
Creates new Job
#### Output: 
data: {
        job: job,
      },
      message: "Job Created!!",
      success: true,

### V. Function closeJob
#### Parameters: 
JobId
#### Method:
'POST'
#### Description:
Function makes an API call to change the status of the job to open to close
#### Output:  
message: "Job status is updated Successfully",

      data: {
        job,
      },
      success: true,

### VI. Function Create Application
#### Parameters- 
ID, Name, Address, PhoneNumber, Hours, DOB, gender, Skills, JobName, JobId, MangerId
#### Method: "Post"
#### Description: 
Function makes a new application whenever an applicant applies.
#### Output:
#### Message: 
data: {
        application: application,
      },
      message: "Application Created!!",
      success: true,
    }

### VII. Function Accept Application
#### Parameters- 
ApplicationId
#### Method: "Post"
#### Description:
Changes the status of the application from pending to Accepted.
#### Output:
message: "Application is updated Successfully",
      data: {
        application,
      },
      success: true,
      
### VIII. Function Reject Application
#### Parameters- 
ApplicationId
#### Method: "Post"
#### Description:
Changes the status of the application from pending to Rejected.
#### Output:
message: "Application is updated Successfully",
      data: {
        application,
      },
      success: true
      
### IX. Function search Job
#### Parmaters: 
search String
#### Method: "Get"
#### Description: 
Finds the jobs based on the search String
#### Output: 
message: "The list of Searched Users",
      data: {
        users: users,
      },
      success: true
