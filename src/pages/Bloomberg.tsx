"use client";
import Image from "next/image";
import bloomberg from "../assets/bloomberg.png";
import microsoftteams from "../assets/microsoftteams.png";
import attach from "../assets/attach.png";

export default function Bloomberg() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={bloomberg}
          alt="Bloomberg Background"
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-between py-8">
          {/* Bloomberg Access Title */}
          <h1 className="text-4xl font-bold bg-blue-800 text-white px-6 py-2 rounded-sm shadow-md">
            Bloomberg Access
          </h1>

          {/* Middle Row with Two Boxes */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Bloomberg Description Box */}
            <div className="bg-white/80 text-black p-4 rounded-md shadow-lg max-w-md text-center">
              <p className="text-lg">
                Attend the Bloomberg Office Hours to learn more about using the
                University-provided Bloomberg Software. The lab representative
                can assist you in setting up your account so you can attain your
                Bloomberg Market Concepts (BMC) Certification.
              </p>
            </div>

            {/* Microsoft Teams Box */}
            <div className="bg-white/80 p-4 rounded-md shadow-lg text-black text-center max-w-md">
              <h2 className="text-2xl font-bold mb-4">Microsoft Teams Link</h2>
              <Image
                src={microsoftteams}
                alt="Microsoft Teams Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                <a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YzYzMDQ4M2QtOGIxMS00OThkLWEyMTctYTA4MzIwMjhjNjZj%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252212f933b3-3d61-4b19-9a4d-689021de8cc9%2522%252c%2522Oid%2522%253a%25220f9ffcd5-7671-4db9-8b7c-cce8a7c66908%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=a5ff1420-b4e0-49e2-91c8-cbd5bf4f573e&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                   target="_blank">
                Click to Join
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-8 py-12 md:flex md:space-x-16">
        {/* Bloomberg Office Hours & Contact Information */}
        <div className="md:w-1/2">
          {/* Bloomberg Office Hours */}
          <h2 className="text-2xl font-bold text-center border-b-2 border-gray-300 pb-2">
            Bloomberg Office Hours
          </h2>
          <ul className="mt-4 text-lg space-y-2 text-center">
            <li>Mondays: 10am-4pm</li>
            <li>Tuesdays: 10am-4pm</li>
            <li>Wednesdays: 10am-4pm</li>
            <li>Thursdays: 10am-4pm</li>
          </ul>

          {/* Contact Information */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center border-b-2 border-gray-300 pb-2">
              Contact Information
            </h2>
            <div className="mt-4 text-lg text-center space-y-4">
              <div>
                <p className="font-bold">Bloomberg Technical Support:</p>
                <a
                  href="mailto:bbg.edu@bloomberg.net"
                  className="text-blue-800 hover:underline"
                >
                  bbg.edu@bloomberg.net
                </a>
              </div>
              <div>
                <p className="font-bold">Office Hours Support:</p>
                <a
                  href="mailto:sweet21@uwindsor.ca"
                  className="text-blue-800 hover:underline"
                >
                  Jacob Sweet
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h2 className="text-2xl font-bold text-center border-b-2 border-gray-300 pb-2">
            Resources
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
              <Image
                src={attach}
                alt="Attachment Icon"
                className="w-10 h-18"
              />
              <a
                href="/files/JSOSIF-2024-Annual-Report.pdf"
                target="_blank"
                className="text-lg text-blue-800 hover:underline font-medium"
              >
                JSOSIF 2024 Annual Report
              </a>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
              <Image
                src={attach}
                alt="Attachment Icon"
                className="w-10 h-18"
              />
              <a
                href="/files/Getting-Started-Guide-for-Students-English.pdf"
                target="_blank"
                className="text-lg text-blue-800 hover:underline font-medium"
              >
                Getting Started Guide
              </a>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow">
              <Image
                src={attach}
                alt="Attachment Icon"
                className="w-10 h-18"
              />
              <a
                href="/files/BMC-Professor-Guide.pdf"
                target="_blank"
                className="text-lg text-blue-800 hover:underline font-medium"
              >
                BMC Professor Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
