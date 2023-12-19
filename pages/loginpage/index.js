import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("logging in witth", email, password);

  };

  return (

    <div>

      <center>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input

            type="email"

            palceholder="Email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

          <br />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

          <br />

          <div className="mb-3" />

          <Button variant="dark" size="sm" type="submit">

            Login

          </Button>

        </form>

      </center>

    </div>

  );

};

const Page = () => {

  return (

    <div>

      <Login />

    </div>

  );

};

export default Page;
