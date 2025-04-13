// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import your CSS file for styling
// // import { useHistory } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <div>
//     <nav className='font-bold font-2xl' style={{display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f8f9fa' }}>
//        <div className='flex gap-15 flex-row'> 
//         <Link to="/home" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link >
//         <Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link >
//         <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact Me</Link >

//        </div>

//        <div>
//         <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>Logout</Link >
//        </div>
//         {/* <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link > */}
//     </nav>
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-6 py-4 flex justify-between items-center shadow-lg ">
      {/* Left Side Links */}
      <div className="flex gap-30 items-center text-lg font-medium text-white">
        <Link
          to="/home"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Right Side (Logout) */}
      <div>
        <Link
          to="/login"
          className="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded-md font-semibold transition duration-300"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
