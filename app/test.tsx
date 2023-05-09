import Link from "next/link";
import React from "react";

export default function NielSite() {
  return (
    <div className="container w-full min-h-screen text-gray-600 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center min-h-screen h-full w-960 gap-26 px-24 overflow-x-hidden">
        <div className="flex flex-col gap-24 w-full">
          <div className="text-4xl font-light introheader">
            My name is Niel Reitmann. I'm currently a Growth Associate at{" "}
            <a
              href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
              className="text-black no-underline hover:underline transition duration-1000"
            >
              Startmate
            </a>
            . Previously design at{" "}
            <a href="https://www.entrylevel.net/" className="text-black no-underline hover:underline transition duration-1000">
              EntryLevel
            </a>
            ,{" "}
            <a href="https://www.facebook.com/uqiesociety/" className="text-black no-underline hover:underline transition duration-1000">
              UQIES
            </a>{" "}
            Vice-President, Co-founder of{" "}
            <a
              href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
              className="text-black no-underline hover:underline transition duration-1000"
            >
              Flaming Galahs
            </a>{" "}
            and{" "}
            <a
              href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
              className="text-black no-underline hover:underline transition duration-1000"
            >
              Travelator
            </a>
            .
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-24">
          <a
            href="/story.html"
            className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
          >
            Story
          </a>
          <a
            href="https://www.linkedin.com/in/niel-reitmann/"
            className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/NielReitmann"
            className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Niel-Reitmann"
            className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
          >
            GitHub
          </a>

            <Link className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" href="/blogpage">Blog</Link>

        </div>

        <div className="w-full flex flex-wrap justify-between gap-16">
          <div className="">
            <div className="">
            
                <div className="text-gray-500 w-48 flex justify-center items-center">
                    <img
                    className="w-full"
                    src="/images/SmLogo.jpeg"
                    />
                  <h3 className="text-lg font-medium text-gray-900">
                    Startmate
                  </h3>
                  <p className="text-base font-normal my-1">
                  The epicentre for startup ambition across Australia and New Zealand.
                  </p>
                  <a
                    href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
                <div className="text-gray-500 w-48 flex justify-center items-center">
                    <img
                    className="w-full"
                    src="/images/SmLogo.jpeg"
                    />
                  <h3 className="text-lg font-normal my-1">
                    Travelator
                  </h3>
                  <p className="text-base font-normal my-1">
                  The epicentre for startup ambition across Australia and New Zealand.
                  </p>
                  <a
                    href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
                <div className="text-gray-500 w-48 flex justify-center items-center">
                    <img
                    className="w-full"
                    src="/images/SmLogo.jpeg"
                    />
                  <h3 className="text-lg font-normal my-1">
                    Flaming Galahs
                  </h3>
                  <p className="text-base font-normal my-1">
                  The epicentre for startup ambition across Australia and New Zealand.
                  </p>
                  <a
                    href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
                <div className="text-gray-500 w-48 flex justify-center items-center">
                    <img
                    className="w-full"
                    src="/images/SmLogo.jpeg"
                    />
                  <h3 className="text-lg font-normal my-1">
                    UQIES
                  </h3>
                  <p className="text-base font-normal my-1">
                  The epicentre for startup ambition across Australia and New Zealand.
                  </p>
                  <a
                    href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  );

}