// import React from 'react'
// import { useForm } from "react-hook-form";
// const Admission = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();
//   // const [formData, setFormData] = useState({});
//   // const onSubmit = (data) => {
//   //   console.log(data);
//   // };
//   const onSubmit = async (data) => {

//     try {
//       const response = await fetch("http://localhost:3000/admission/admission", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }


//   return (
//     <div>

//       <h1 >Admission</h1>
//       <img src="https://gyaanarth.com/wp-content/uploads/2022/07/96dd5bc9-1eee-4e0e-8d11-75687e10cbb4.jpg" alt="error in this image" />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="father">Father Name:</label>
//           <input
//             id="fathername"
//             {...register("fathername", { required: "Father Name is required" })}
//           />
//           {errors.fathername && <p>{errors.fathername.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="course">Course:</label>
//           <select id="course" {...register("course", { required: "Course is required" })}>
//             <option value="">Select a Course</option>
//             <option value="B Tech">B Tech</option>
//             <option value="M Tech">M Tech</option>
//             <option value="MBA">MBA</option>
//             <option value="BBA">BBA</option>
//             <option value="B ED">B ED</option>
//             <option value="B.COM">B.COM</option>
//             <option value="M.COM">M.COM</option>
//             <option value="ITI">ITI</option>
//             <option value="DIPLOMA">DIPLOMA</option>
//             <option value="DPHARMA">DPHARMA</option>
//           </select>
//           {errors.course && <p>{errors.course.message}</p>}
//         </div>


//         <div>
//           <label htmlFor="stream">Course Stream:</label>
//         <input 
//         type="text-area" 
//         id='stream'
//         {...register("stream", { required: "Course Stream is required" })}
//         />
//           {errors.stream && <p>{errors.stream.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <select id="category" {...register("category", { required: "Category is required" })}>
//             <option value="">Select a Category</option>
//             <option value="OBC">OBC</option>
//             <option value="SC">SC</option>
//             <option value="ST">ST</option>
//             <option value="GENERAL">GENERAL</option>
//           </select>
//           {errors.category && <p>{errors.category.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="dob">Date of Birth:</label>
//           <input
//             id="dob"
//             type="date"
//             {...register("dob", { required: "Date of Birth is required" })}
//           />
//           {errors.dob && <p>{errors.dob.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="address">Local Address:</label>
//           <input
//             id="address"
//             type="text-area"
//             {...register("address", { required: "Address is required" })}
//           />
//           {errors.address && <p>{errors.address.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="phone">Phone Number:</label>
//           <input
//             id="phone"
//             type="tel"
//             {...register("phone", { required: "Phone number is required" })}
//           />
//           {errors.phone && <p>{errors.phone.message}</p>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>


//     </div>
//   )
// }

// export default Admission







import React from 'react';
import { useForm } from "react-hook-form";

const Admission = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/admission/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://gyaanarth.com/wp-content/uploads/2022/07/96dd5bc9-1eee-4e0e-8d11-75687e10cbb4.jpg')`
      }}>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg backdrop-blur-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">College Admission Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Father's Name</label>
            <input
              {...register("fathername", { required: "Father Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.fathername && <p className="text-red-500 text-sm">{errors.fathername.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select Category</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="GENERAL">GENERAL</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Course</label>
            <select
              {...register("course", { required: "Course is required" })}
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select Course</option>
              <option value="B Tech">B Tech</option>
              <option value="M Tech">M Tech</option>
              <option value="MBA">MBA</option>
              <option value="BBA">BBA</option>
              <option value="B ED">B ED</option>
              <option value="B.COM">B.COM</option>
              <option value="M.COM">M.COM</option>
              <option value="ITI">ITI</option>
              <option value="DIPLOMA">DIPLOMA</option>
              <option value="DPHARMA">DPHARMA</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
          </div>

          {/* Stream */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Course Stream</label>
            <input
              {...register("stream", { required: "Course Stream is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.stream && <p className="text-red-500 text-sm">{errors.stream.message}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700">Address</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-lg font-semibold transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admission;
