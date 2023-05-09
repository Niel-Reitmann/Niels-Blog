import Link from "next/link";

export default function NielSite() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <div className="text-xl">
            My name is Niel Reitmann. I'm currently a Growth Associate at{" "}
            <a
              href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
              className="text-indigo-500 hover:text-indigo-400"
            >
              Startmate
            </a>
            . Previously design at{" "}
            <a href="https://www.entrylevel.net/" className="text-indigo-500 hover:text-indigo-400">
              EntryLevel
            </a>
            ,{" "}
            <a href="https://www.facebook.com/uqiesociety/" className="text-indigo-500 hover:text-indigo-400">
              UQIES
            </a>{" "}
            Vice-President, Co-founder of{" "}
            <a
              href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
              className="text-indigo-500 hover:text-indigo-400"
            >
              Flaming Galahs
            </a>{" "}
            and{" "}
            <a
              href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
              className="text-indigo-500 hover:text-indigo-400"
            >
              Travelator
            </a>
            .
          </div>
        </div>
        <div className="mt-8 mb-8">
          <a
            href="/story.html"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Story
          </a>
          <a
            href="https://www.linkedin.com/in/niel-reitmann/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/NielReitmann"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Niel-Reitmann"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            GitHub
          </a>
          <a
            href="/blog.html"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            <Link href="/blogpage">Blog</Link>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/public/images/SmLogo.jpeg"
                />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Startmate
                  </h3>
                  <p className="text-gray-600 mt-1">
                  The epicentre for startup ambition across Australia and New Zealand.
                  </p>
                </div>
                <div className="px-4 py-2">
                  <a
                    href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/public/images/Flaming Galah Logo.png"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Flaming Galahs
                  </h3>
                  <p className="text-gray-600 mt-1">
                  A technology collective exclusively for Australia's university students.
                  </p>
                </div>
                <div className="px-4 py-2">
                  <a
                    href="https://galah.community/"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/public/images/SmLogo.jpeg"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    UQIES
                  </h3>
                  <p className="text-gray-600 mt-1">
                  The most influential entrepreneurship society at The University of Queensland.
                  </p>
                </div>
                <div className="px-4 py-2">
                  <a
                    href="https://www.facebook.com/uqiesociety/"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                    </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/public/images/SmLogo.jpeg"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Travelator
                  </h3>
                  <p className="text-gray-600 mt-1">
                  Pioneering the future of tourism influencer marketing.
                  </p>
                </div>
                <div className="px-4 py-2">
                  <a
                    href="https://galah.community/"
                    className="text-indigo-500 hover:text-indigo-400"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );

}