import { Card, CardBody, CardTitle, Form, FormGroup, FormFeedback, Input, Button } from "reactstrap";
import { useEffect } from "react";
import { useState } from "react";
import UserServices, { loginUser } from '../Services/UserServices';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);

  const [userError, setUserError] = useState(false);

  const handleSubmit = (e)=>{
    // console.log(e);
    e.preventDefault();
    // loginUser(username, password);
  }
  return (
    <section className="login bg-dark w-100 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card className="p-2 mx-5">
        <CardBody>
          <CardTitle
            tag="h5"
            className="d-flex justify-content-center display-5 mb-3"
          >
            Login Form
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
                invalid={status}
                id="Password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (password !== password) {
                    setStatus(true);
                    return;
                  }
                  setStatus(false);
                }}
              />
              <FormFeedback>"Error"</FormFeedback>
            </FormGroup>
            <Button className="btn-success w-100" onClick={()=>{UserServices.loginUser(username, password)}}>Login</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
};

export default Login;
