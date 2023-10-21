import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  /* const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  }; */

  /*   useEffect(() => {
    
    handleMount();
  }, []); */

  const login = async (event, signInData) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data);
      console.log(data);
    } catch (err) {
      /* setErrors(err.response?.data); */
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
