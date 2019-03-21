export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async code to data base
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Newname',
      authorLasttName: 'Newlastname',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=> { dispatch({ type: 'CREATE_PROJECT', project: project }) 
    }).catch(err => dispatch({ type: 'CREATE_PROJECT_ERROR', err }));
  }
};