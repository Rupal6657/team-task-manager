import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const res = await axios.post(
      "https://team-task-manager-mahj.onrender.com",
      {
        email,
        password
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login successful");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-4">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 block mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 block mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2"
      >
        Login
      </button>

    </div>
  );
}

export default Login;