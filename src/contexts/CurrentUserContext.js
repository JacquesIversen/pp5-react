import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const SetAuthContext = createContext();

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
      Cookies.set("access", data.access);
      setCurrentUser(data.user);
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
