import { useState } from "react";
import axios from "axios";

function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const handleSignup = async () => {

    await axios.post(
      "http://localhost:5000/api/auth/signup",
      form
    );

    alert("Signup successful");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-4">
        Signup
      </h1>

      <input
        placeholder="Name"
        className="border p-2 block mb-4"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />

      <input
        placeholder="Email"
        className="border p-2 block mb-4"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <input
        placeholder="Password"
        type="password"
        className="border p-2 block mb-4"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <select
        className="border p-2 block mb-4"
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value
          })
        }
      >
        <option value="member">
          Member
        </option>

        <option value="admin">
          Admin
        </option>
      </select>

      <button
        onClick={handleSignup}
        className="bg-black text-white px-4 py-2"
      >
        Signup
      </button>

    </div>
  );
}

export default Signup;