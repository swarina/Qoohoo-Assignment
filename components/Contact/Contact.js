import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex justify-center items-center md:justify-start gap-4 py-8">
      <a
        className="p-2 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare className="w-6" fontSize="26px" />
      </a>
      <a
        className="p-2 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="w-6" fontSize="26px" />
      </a>
      <a
        className="p-2 shadow-2xl rounded-md border border-black border-opacity-40 transition-colors duration-300 hover:bg-black hover:text-white"
        href="https://www.twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="w-6" fontSize="26px" />
      </a>
    </div>
  );
};

export default Contact;
