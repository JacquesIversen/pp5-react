import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const AuthContext = createContext();
export const SetAuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

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
      history.push("/");
      console.log(data);
    } catch (err) {
      /* setErrors(err.response?.data); */
      setCurrentUser(null);
    }
  };

  const logout = async () => {
    Cookies.remove("access");
    setCurrentUser(null);
    console.log("loggedout");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
