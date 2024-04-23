import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config"
import  toast, { Toaster } from 'react-hot-toast';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

   

// SignUp User
const createUser = (email,password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       const user = userCredential.user;
       console.log(user);
       toast.success("User Created Successfully")
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error('User exists',errorMessage)
      
    });
    return;
} 

// Sign In User

const signInUser = (email,password) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password);
 
}

  const AuthInfo = {user,createUser,loading,signInUser}
  
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
              {children}
            </AuthContext.Provider>
            <Toaster/>
        </div>
    );
};

export default AuthProvider;