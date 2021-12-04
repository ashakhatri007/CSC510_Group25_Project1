import { UPDATE_APPLICATION,ADD_APPLICATION,ACCEPT_APPLICATION,REJECT_APPLICATION} from '../actions/actionTypes';

export default function application(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_APPLICATION:
      return action.application;

    case ADD_APPLICATION:
      return [action.application, ...state];

    case ACCEPT_APPLICATION:
        const updatedApplication = state.map((application) => {
            if (application._id === action.applicationId){
                return {
                    ...application,
                    status: action.status
                };
            }

            return application
        });

        return updatedApplication;

        case REJECT_APPLICATION:
            const updatedApplication1 = state.map((application) => {
                if (application._id === action.applicationId){
                    return {
                        ...application,
                        status: action.status
                    };
                }
    
                return application
            });
    
            return updatedApplication1;

          
    default:
      return state;
  }
}

