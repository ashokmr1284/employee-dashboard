import reqresData from '../apis/reqresData';

/*
export const fetchEmployee = (id) => async dispatch => {
  const response = await reqresData.get(`/users/${id}`);
  dispatch({ type: "FETCH_EMPLOYEE", payload: response.data })
};
*/

export const fetchEmployee = (id) =>  {
  if (id) {
    return async dispatch => {
      const response = await reqresData.get(`/users/${id}`);
      dispatch({ type: "FETCH_EMPLOYEE", payload: response.data })
    };
  }
  else {
    return {
      type: "FETCH_EMPLOYEE", 
      payload: []
    }
  }
};

