import React, {useState} from 'react';

const AuthContext=React.createContext({
  idToken:'',
  isLoggedIn:false,
  login:()=>{}
})

export const AuthContextProvider = (props) => {
    const [idToken, setIdToken] = useState();
    let isLoggedIn=!!idToken;
    const loginHandler = (token)=>{
        setIdToken(token);
    }
    const contextValue={
        idToken: idToken,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
    }
  return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;