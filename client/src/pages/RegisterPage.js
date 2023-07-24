import { useState } from "react";

export default function RegisterPage() {
  // hooks for acessing user name and user password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Register function for making a post request to out api
  async function register(event) {
    event.preventDefault();
    // do post request to localhost 4000
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registeration failed");
    }
  }

  return (
    <form action="" className="register" onSubmit={register}>
      <h1>Register</h1>

      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
