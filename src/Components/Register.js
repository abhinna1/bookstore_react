import { useState, useEffect } from "react";
import axios from "axios";

import {
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Button,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const [status, setStatus] = useState(false);

  const [userError, setUserError] = useState(false);
  const [isValid, setValid] = useState(false);

  const _BASE_URL = "http://localhost:3001/";

  useEffect(() => {
    if ((username.length < 5) & (username.length > 0)) {
      setUserError(true);
      return;
    } else {
      setUserError(false);
    }
    if (cfmPassword !== password) {
      setStatus(true);
      return;
    } else {
      setStatus(false);
    }
  }, [username, password, cfmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${_BASE_URL}users/register`, {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 201) {
          alert(`User ${username} Registered Successfully.`);
        } else {
          alert("Error registering new user");
        }
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };
  return (
    <div className="App h-100vh d-flex justify-content-center align-items-center bg-dark">
      <Card className="p-2 mx-5">
        <CardBody>
          <CardTitle
            tag="h5"
            className="d-flex justify-content-center display-5 mb-3"
          >
            Registration Form
          </CardTitle>
          <Form className="" onSubmit={handleSubmit}>
            <FormGroup className="group1">
              <Input
                invalid={userError}
                id="username"
                name="email"
                placeholder="Username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <FormFeedback>
                Username length should be greater than 5.
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                id="Password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <Input
                invalid={status}
                id="cfmPassword"
                name="cfmpassword"
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => {
                  setCfmPassword(e.target.value);
                  if (password !== cfmPassword) {
                    setStatus(true);
                    return;
                  }
                  setStatus(false);
                }}
              />
              <FormFeedback>"Error"</FormFeedback>
            </FormGroup>
            <Button className="btn-success">Register</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
