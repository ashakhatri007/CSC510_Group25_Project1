const API_ROOT = 'http://localhost:8000/api/v1';


export const APIURLS = {

    login: () => `${API_ROOT}/users/create-session`,
    signup: () => `${API_ROOT}/users/signup`,
    fetchJobs: () => `${API_ROOT}/users/`,
    editProfile : () => `${API_ROOT}/users/edit`,
    editItem : () => `${API_ROOT}/users/edititem`,
    
    createJob: () => `${API_ROOT}/users/createjob`,
    createMenu: () => `${API_ROOT}/users/createmenu`,
    createApplication: () => `${API_ROOT}/users/createapplication`,
    acceptApplication: () => `${API_ROOT}/users/acceptapplication`,
    rejectApplication: () => `${API_ROOT}/users/rejectapplication`,
    userSearch: (searchText) => `${API_ROOT}/users/search/${searchText}`,
    fetchApplication: () => `${API_ROOT}/users/fetchapplications`,
    closeJob: () => `${API_ROOT}/users/closejob`,
    fetchMenus: () => `${API_ROOT}/users/fetchmenus`,

   
    
}