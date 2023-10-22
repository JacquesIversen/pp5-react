import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/", {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      });
      setCurrentUser(data);
      console.log("user data from get user", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
