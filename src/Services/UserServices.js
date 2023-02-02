import axios from "axios";
// import { _Login_URL } from "./constants";

const loginUser = (username, password) => {
  axios.post("http://localhost:3000/users/login", {
    username: username,
    password: password,
  })
  .then(res=>{
    console.log(res.status)
  })
};

export default { loginUser };