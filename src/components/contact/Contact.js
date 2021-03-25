import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { init, sendForm } from "emailjs-com";
init("user_VSzFPW3V7ogaPcBxcbD89");

export const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    generateContactNumber();
    sendForm('default_service', 'template_b5ai2m9', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  return (
    <main className="bg-gray-700 absolute w-full h-full">
      <article className="container bg-gray-700 shadow-lg mx-auto">
        <header className="relative">
          <div className="relative h-full w-full flex items-center justify-center p-8">
            <div className="relative items-center justify-center bg-opacity-75 rounded p-12">
              <h1 className="text-center text-2xl text-gray-200 font-bold cursive leading-none lg:leading-snug home-name">
                {" "}
                Contact Me{" "}
              </h1>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="hidden"
                  name="contact_number"
                  value={contactNumber}
                />
                <div className="grid grid-cols-2 gap-5">
                  {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">
                      Name is required
                      <br />
                    </div>
                  )}
                  <input
                    ref={register({ required: true })}
                    aria-invalid={errors.first_name ? "true" : "false"}
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="border border-gray-500 px-4 py-2 focus:outline-nnone focus:border-blue-500"
                  />
                  {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">
                      Name is required
                      <br />
                    </div>
                  )}
                  <input
                    type="text"
                    name="last_name"
                    aria-invalid={errors.last_name ? "true" : "false"}
                    ref={register({ required: true })}
                    placeholder="Last Name"
                    className="border border-gray-500 px-4 py-2 focus:outline-nnone focus:border-blue-500"
                  />
                  {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">
                      Email is required
                      <br />
                    </div>
                  )}
                  <input
                    type="email"
                    name="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    ref={register({ required: true })}
                    placeholder="Email"
                    className="border border-gray-500 px-4 py-2 focus:outline-nnone focus:border-blue-500 col-span-2"
                  />
                  {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">
                      Subject is required
                      <br />
                    </div>
                  )}
                  <input
                    type="text"
                    name="subject"
                    aria-invalid={errors.subject ? "true" : "false"}
                    ref={register({ required: true })}
                    placeholder="Subject"
                    className="border border-gray-500 px-4 py-2 focus:outline-nnone focus:border-blue-500 col-span-2"
                  />
                  {errors.user_name && errors.user_name.type === "required" && (
                    <div role="alert">
                      Message is required
                      <br />
                    </div>
                  )}
                  <textarea
                    cols="10"
                    rows="5"
                    maxLength="1500"
                    name="message"
                    aria-invalid={errors.message ? "true" : "false"}
                    ref={register({ required: true })}
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                    placeholder="Type your message"
                  />
                </div>
                <input
                  name="submit"
                  type="submit"
                  value="Send Message"
                  className="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full"
                />
              </form>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};
