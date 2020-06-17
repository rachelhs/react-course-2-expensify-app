import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => {
    return () => {
        googleAuthProvider.addScope('profile');
        googleAuthProvider.addScope('email');
        return firebase.auth().signInWithPopup(googleAuthProvider)
        .then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
           });
    };
};

export default startLogin;