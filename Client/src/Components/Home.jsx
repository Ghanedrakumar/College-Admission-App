// import React from "react";
// // import "./Home.css";
// import { Link } from "react-router-dom"; // Import Link for navigation
// const Home = () => {
//     return (
//         <div className="home-container">
//             <header className="hero-section">
//                 <div className="overlay">
//                     <h1>Welcome to ITM College, Aligarh</h1>
//                     <p>Your Gateway to Excellence in Education</p>
//                     <Link to="/admission" className="cta-button">
//                         Apply for Admission
//                     </Link>
//                 </div>
//             </header>

            

//             <section className="image-section">
//                 <h2>Our Campus</h2>
//                 <div className="my">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3SIbU5AHOlxm14RFp5JI8HshPfy2zISH4A&s"
//                     alt="ITM College Aligarh Karsua"
//                     className="campus-image shadow-2xl  "
//                 />
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa771oJuA7QVBlLoZYRhqjhv0Sv5mwpAoCPA&s"
//                     alt="ITM College Aligarh Karsua"
//                     className="campus-image shadow-2xl  "
//                 />
           
                
//                 </div>
//             </section>

//             <section className="features-section">
//                 <h2>Why Choose ITM College?</h2>
//                 <div className="features">
//                     <div className="feature">
//                         <h3>Experienced Faculty</h3>
//                         <p>Learn from the best educators in the industry.</p>
//                     </div>
//                     <div className="feature">
//                         <h3>Modern Infrastructure</h3>
//                         <p>State-of-the-art facilities for a better learning experience.</p>
//                     </div>
//                     <div className="feature">
//                         <h3>Placement Assistance</h3>
//                         <p>Get placed in top companies with our dedicated placement cell.</p>
//                     </div>
//                 </div>
//             </section>

//             <footer className="footer">
//                 <p>&copy; 2025 ITM College, Aligarh. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner1.jpg"; // Import your background image here

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-200 via-white to-purple-100 text-gray-800 font-sans">
            {/* Hero Section with Working Background Image */}
            <header
                className="relative h-[60vh] bg-center bg-cover flex items-center justify-center "
               
                style={{
                   
                    backgroundImage: `url(${banner})`,
                }}
                
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold ">Welcome to ITM College, Aligarh</h1>
                    <p className="mt-4 text-xl md:text-2xl">Your Gateway to Excellence in Education</p>
                    <Link to="/admission">
                        <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-semibold transition transform hover:scale-105 duration-300 shadow-lg">
                            Apply for Admission
                        </button>
                    </Link>
                </div>
            </header>

            {/* Campus Images */}
            <section className="bg-blue-100 text-center py-16 px-4 animate-fade-up">
                <h2 className="text-3xl font-bold mb-10 text-indigo-800">Our Campus</h2>
                <div className="flex flex-wrap justify-center gap-50">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3SIbU5AHOlxm14RFp5JI8HshPfy2zISH4A&s"
                        alt="Campus 1"
                        className="w-72 h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa771oJuA7QVBlLoZYRhqjhv0Sv5mwpAoCPA&s"
                        alt="Campus 2"
                        className="w-72 h-48 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-blue-100 py-16 animate-fade-up">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">Why Choose ITM College?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
                    <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">Experienced Faculty</h3>
                        <p>Learn from the best educators in the industry.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">Modern Infrastructure</h3>
                        <p>State-of-the-art facilities for a better learning experience.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">Placement Assistance</h3>
                        <p>Get placed in top companies with our dedicated placement cell.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-indigo-700 text-white text-center py-6 mt-10">
                <p>&copy; 2025 ITM College, Aligarh. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
