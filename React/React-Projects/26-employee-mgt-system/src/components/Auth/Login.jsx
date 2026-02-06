import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("") 
    console.log("email is",email);
    console.log("password is",password);
};
  return (  
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-amber-600 p-20 rounded-xl">
        <form 
          onSubmit={(e) => {
            formHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input autoComplete="off"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required
            className="border-2 border-amber-600 px-6 py-4 font-bold text-2xl rounded-full outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input autoComplete="off"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="border-2 border-amber-600 px-6 py-4 font-bold text-2xl rounded-full outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" px-7 py-5 text-2xl rounded-full outline-none active:scale-95 w-full bg-amber-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
