// import "./Signup.css"

// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom';
// // const onSubmit = (data) => {
// //     console.log(data);
// // }
// const Signup = () => {
//     const { register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm();

//     const onSubmit = async (data) => {
//         console.log(data);
//         // Perform validation checks
//         if (data.password !== data.confirmPassword) {
//             alert("Password and Confirm Password do not match");
//             return;
//         }
//         if (data.password.length < 3) {
//             alert("Password must be at least 3 characters long");
//             return;
//         }

//         try {
//             const final = await fetch("http://localhost:3000/signup/signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });
//             if (final.ok) {
//                 alert("Signup successful")
//             }
//             else {
//                 alert("Signup failed")
//             }

//             const result = await final.json()
//             console.log(result)
//         }

//         catch (error) {
//             console.log("Error:", error);
//         }

//     }

//     return (
//         <div>

//             <h1>Signup</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username"  {...register("username", { required: "Username is required" })} />
//                     {errors.username && <p>{errors.username.message}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" {...register("email", { required: "Email is required" })} />
//                     {errors.email && <p>{errors.email.message}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password"  {...register("password", { required: "New Password is required" })} />
//                     {errors.password && <p>{errors.password.message}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input type="password" id="confirmPassword" {...register("confirmPassword", { required: "Confirm_Password is required" })} />
//                     {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="phone">Phone</label>
//                     <input type="tel" id="phone" {...register("phone", { required: "Phone is required" })} />
//                     {errors.phone && <p>{errors.phone.message}</p>}
//                 </div>


//                 <button type="submit" className=''>Submit</button>

//                 <div>
//                     <p>Already have an account? <Link to="/login">Login</Link></p>
//                 </div>
//             </form>
//         </div>
//     )
// }


// export default Signup

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();




  const onSubmit = async (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    if (data.password.length < 3) {
      alert("Password must be at least 3 characters long");
      return;
    }


    try {
      const final = await fetch("http://localhost:3000/signup/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (final.ok) {
        alert("Signup successful");
        setTimeout(() => {
          navigate("/login");
        }, 300);

      } else {
        alert("Signup failed");
      }


      try {
        const result = await final.json();
        console.log(result);
      }
      catch (jsonerror) {
        console.log("Error:", jsonerror);
      }


    } catch (error) {
      console.log("Error:", error);
    }
  
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create Account</h2>

        {/* Username */}
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

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", { required: "Confirm Password is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: "Phone is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-300"
        >
          Sign Up
        </button>

        {/* Already have an account */}
        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
