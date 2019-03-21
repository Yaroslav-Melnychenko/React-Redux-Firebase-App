const SignIn = (credentnails) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentnails.email,
            credentnails.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
}
export default SignIn;