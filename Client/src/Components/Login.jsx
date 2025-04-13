// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const navigate = useNavigate();

//   const { register, handleSubmit, formState: { errors } } = useForm()
// // const onSubmit = (data)=>{
// //   console.log(data)
// // }
// const onSubmit = async (data) => {
//   try {
//       const final = await fetch("http://localhost:3000/login/login", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//       });
      
//       const result = await final.json()
//       console.log(result)

//       if (final.ok) {
//         // alert("Login successful")
//         setTimeout(()=>{
//           navigate("/home");
//         },500)
//       } else {
//         // Handle error response from the server
//         console.error("Login failed:", result.error);
//         alert("Login failed");
//       }
//   }

//   catch (error) {
//       console.log("Error:", error);
//   }

// }
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" {...register("username", { required: "Username is required" })} />
//           {errors.username && <p>{errors.username.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" {...register("password", { required: "Password is required" })} />
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>

//         <button type='submit'>Login</button>

//       </form>
// <div>
//   <p>Don't have an account? <Link to="/signup">Signup</Link></p>
// </div>

//     </div>
//   )
// }

// export default Login



import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const final = await fetch("http://localhost:3000/login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await final.json();
      console.log(result);

      if (final.ok) {
        setTimeout(() => {
          navigate("/home");
        }, 200);
      } else {
        console.error("Login failed:", result.error);
        alert("Login failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="mt-4 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
