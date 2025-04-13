import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/contact/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }

    console.log(data); // For demonstration purposes, log the data to the console
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-50 to-red py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                {...register("message", { required: true })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                ITM College, Aligarh
              </h2>
              <p className="text-gray-600">
                Karsua Road, Near Lodha,
                <br />
                Aligarh, Uttar Pradesh - 202001
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-500">Phone</h3>
              <p className="text-gray-600">+91 12345 67890</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-500">Email</h3>
              <p className="text-gray-600">info@itmaligarh.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-500">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <Link
                  to="https://www.facebook.com/profile.php?id=100033238369739"
                  className="text-blue-700 hover:text-blue-900"
                >
                  🌐 Facebook
                </Link>
                <Link
                  to="https://www.instagram.com/ghanendra57/"
                  className="text-blue-700 hover:text-blue-900"
                >
                  📸 Instagram
                </Link>
                <Link
                  to="https://www.linkedin.com/in/ghanedra-kumar-11686b263/"
                  className="text-blue-700 hover:text-blue-900"
                >
                  🌐 LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
