import React from "react";

import { contact } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="section bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact us
          </h2>
          <p className="subtitle text-gray-400">
            We are happy to hear from you. Please dont hasitate to contact us, we are more than happy to help.
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => (
              <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                <div className="text-gray-400 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-body text-gray-600 text-xl mb-1">{item.title}</h4>
                  <p className="mb-1 text-gray-400">{item.subtitle}</p>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* form */}
          <form className="space-y-8 w-full max-w-[780px]">
                <div className="flex gap-8">
                    <input type='text' className="input" placeholder="Your name"></input>
                    <input type='text' className="input" placeholder="Your email"></input>
                </div>
                <textarea className="textarea" placeholder="Your message"></textarea>
                <button className="btn btn-lg bg-accent hover:bg-accent-hover disabled" disabled='true'>Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
