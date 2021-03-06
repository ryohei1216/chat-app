import React, { useState, useEffect } from "react";
import firebase from "./config/firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //←コンポーネントの表示が終わった後に呼び出し？
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
