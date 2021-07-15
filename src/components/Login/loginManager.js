import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./firebase.config"


export const initializeLoginFramework=()=>{
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn=()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res=>{
      const {displayName,email,photoURL}=res.user;
      const signInUSer={
        isSignIn:true,
        name:displayName,
        email:email,
        photo:photoURL,
        success:true
      }
    //   setUser(signInUSer)
    return signInUSer;
    })
    .catch(error=>{
      console.log(error);
      console.log(error.message);
    })
  }
 export const handleSignOut=()=>{
    return firebase.auth().signOut()
    .then(res=>{
      const signOutUser={
        isSignIn: false,
        name:'',
        email:'',
        photo:'',
        error:'',
        success:false
      }
    //   setUser(signOutUser)
    return signOutUser;
    })
  }


  export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      user.success = true;
      return user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }


  export const createUserWithEmailAndPassword=(name,email,password) => {
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      // Signed in 
      const newUserInfo= res.user;
      newUserInfo.error='';
      newUserInfo.success=true;
      updateUserName(name)
      return newUserInfo;
      // ...
    })
    .catch((error) => {
      const newUserInfo= {};
      newUserInfo.error=error.message;
      newUserInfo.success=false;
      return newUserInfo;
      
    });
  }


  export const signInWithEmailAndPassword =(email,password) =>{
   return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res => {
      const newUserInfo= res.user;
      newUserInfo.error='';
      newUserInfo.success=true;
      return newUserInfo;
    //   setUser(newUserInfo)
    //   setLoggedInUser(newUserInfo);
    //   history.replace(from);
    //   console.log("Sign in USer info ",res.user);
    })
    .catch((error) => {
      const newUserInfo= {};
            newUserInfo.error=error.message;
            newUserInfo.success=false;
            return newUserInfo
    });
  
  }

  const updateUserName= name=>{
    const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name
        
      }).then(() => {
        console.log("Name Update Successfully");
      }).catch((error) => {
        console.log(error);
      });  
  }

  export const handleGithubSignIn=()=>{
    var gitProvider = new firebase.auth.GithubAuthProvider();
   return firebase.auth().signInWithPopup(gitProvider)
    .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    
    var user = result.user;
    user.success = true;
    return user;

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  }