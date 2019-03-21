export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async code to data base
    dispatch({
      type: 'CREATE_PROJECT',
      project: project
    })
  }
};