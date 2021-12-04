# API URLS

We have used the following API urls to fetch data from the server to client.

## Login
Method: "POST"\
/users/crete-session\
Response: 1\
res.json(422, {\
        message: "Invalid username or password",\
      });\
Response: 2\
res.json(200, {\
      message: "Sign In Successful, here is your token, please keep it safe",\
      data: {\
        token: jwt.sign(user.toJSON(), "caloriesapp", { expiresIn: "100000" }),\
        user: user,\
      },\
      success: true,\
    }); 
## Sign Up
Method: "POST"\
/users/signup\
Response: 1\
res.json(422, {\
        message: "Passwords donot match",\
      });\
Response: 2\
res.json(200, {\
          message: "Sign Up Successful, here is your token, plz keep it safe",\
          data: {\
            token: jwt.sign(user.toJSON(), "caloriesapp", {\
              expiresIn: "100000",\
            }),\
            user,\
          },\
          success: true,\
        })

## Edit Profile
Method: "POST"\
/users/edit\

Response: \
res.json(200, {\
      message: "User is updated Successfully",\
      data: {\
        user,\
      },\
      success: true,\
    });

## Create History
Method: "POST"\
/users/createhistory\
Response:\
res.json(200, {\
            message: "History Created Successfully",\
            data: {\              
              history:history,\
            },\
            success: true,\
          });

## Get History
Method: "GET"\
/users/gethistory?id=${userId}&date=${date}\
Response:\
res.json(200, {\
      message: "The User Profile",\
      data: {\
        history: history,\
      },\
      success: true,\
    })

## Get Food and its Calorie content
Method: "GET"\
/users/search/${searchText}\
Response:\
res.json(200, {\
      message: "The list of Searched Food",\
      data: {\
        users: users,\
      },\
      success: true,\
    })
