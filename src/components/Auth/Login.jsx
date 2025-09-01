import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-700 via-emerald-800 to-gray-900">
      <div className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/20 animate-fadeIn">
        <h1 className="text-3xl font-bold text-white text-center">
          Manage your tasks smarter
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Welcome back! Please log in to continue.
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-8">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none border-2 border-emerald-400 bg-white/10 text-white font-medium text-lg py-3 px-5 rounded-xl placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500 transition-all"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none border-2 border-emerald-400 bg-white/10 text-white font-medium text-lg py-3 px-5 rounded-xl placeholder:text-gray-400 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-500 transition-all"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="mt-5 bg-emerald-500/90 text-white font-semibold text-lg py-3 rounded-xl shadow-md hover:bg-emerald-400 hover:shadow-lg transition-all"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
