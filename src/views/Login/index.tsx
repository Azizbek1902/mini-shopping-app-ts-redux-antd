import React, { useState } from "react";
import { Input, Button } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { addToken } from "../../redux/reducer/token";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (): void => {
    const data = {
      login: login.trim(),
      password: password.trim(),
    };
    if (data.login == "admin" && data.password == "admin") {
      dispatch(addToken(login));
      localStorage.setItem("token", login);
    } else if (data.login == "" || data.password == "") {
      alert("Login yoki parol kiritilmagan");
    } else {
      alert("Login yoki parol xato");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "100px 0" }}>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1>Login</h1>
        <Input
          style={{ height: "40px" }}
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          style={{ height: "40px" }}
          placeholder="Login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button size="large" type="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
