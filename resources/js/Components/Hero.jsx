import React from "react";
import bangunan from "@/Images/bangunan-removebg-preview.png";

export default function Hero() {
  return (
    <div>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          background-image: linear-gradient(to bottom, #A5A6F6, transparent);
        }
      `}
      </style>
      <section className="relative min-h-screen mt-14">
        {" "}
        {/* Add 'mt-14' to create top margin */}
        <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
          <div className="flex flex-col items-center justify-center h-full lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              Welcome to <span className="text-primary-700">TalentHub</span>
            </h1>
            <p className="max-w-2xl mb-6 text-center font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Facilities for Entrepreneurship Development Programs and Skill
              Enhancement Training tailored to industry needs
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="lg:hidden relative z-10">
            <img src={bangunan} alt="mockup" className="w-full" />
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative z-10">
            <img src={bangunan} alt="mockup" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      </section>
    </div>
  );
}
