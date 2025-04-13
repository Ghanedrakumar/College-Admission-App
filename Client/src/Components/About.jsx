// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <section className="about-section">
//                 <h2>About ITM College</h2>
//                 <p>
//                     ITM College, Aligarh is a premier institution offering world-class
//                     education in the field of technology and management. Our mission is
//                     to nurture talent and foster innovation.
//                 </p>
//             </section>
//     </div>
//   )
// }

// export default About



import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-8 animate-fadeIn">
          About ITM College, Aligarh
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://gyaanarth.com/wp-content/uploads/2022/07/96dd5bc9-1eee-4e0e-8d11-75687e10cbb4.jpg"
            alt="ITM College Building"
            className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          />

          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-blue-600">ITM College, Aligarh</span> is one of the
              premier institutions in North India, offering a diverse range of academic programs and a vibrant
              campus life. Established with a vision to provide world-class education, we are dedicated to
              empowering students with knowledge, skills, and values that foster personal and professional growth.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              Our faculty consists of experienced educators and industry professionals committed to academic
              excellence. With modern infrastructure, state-of-the-art labs, and a rich library, ITM ensures that
              students get the best environment to thrive.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose ITM?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from highly qualified professors and mentors with deep subject knowledge and industry experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Smart classrooms, high-tech labs, and digital libraries enhance the learning experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Career Opportunities</h3>
              <p className="text-gray-600">
                Our dedicated placement cell helps students land their dream jobs in top companies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-100 p-8 rounded-xl shadow-inner">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Join Us Today!</h3>
          <p className="text-gray-700">
            Be a part of a legacy that shapes future leaders. Discover your potential at ITM College, Aligarh.
            Admissions are now open!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
