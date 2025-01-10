"use client";

import React from "react";
import Image from "next/image";
import aboutBanner from "../assets/aboutBanner.png";
import jsosifseeks from "../assets/jsosifseeks.png";
import jsosifpencil from "../assets/jsosifpencil.png";
import jsosifhand from "../assets/jsosifhand.png";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Us Banner Section */}
      <div className="relative">
        <Image
          src={aboutBanner}
          alt="About Us Banner"
          className="w-full h-[200px] object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white bg-blue-800 px-8 py-2 rounded-md shadow-md">
            About Us
          </h1>
        </div>
      </div>

      {/*  History Section */}
      <div className="px-8 py-12 flex flex-col md:flex-row justify-center items-start gap-16">
        <div className="relative bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="absolute inset-0 h-full">
            <Image
              src={jsosifseeks}
              alt="Vision Graphic"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative z-10">
            <h4 className="italic text-lg">JSOSIF seeks to be...</h4>
            <p className="text-2xl font-bold leading-relaxed mt-4">
              "A highly respected student investment fund that achieves
              outstanding risk-adjusted returns while investing heavily in human
              capital."
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="max-w-md w-full">
          <h4 className="text-2xl font-bold text-blue-800 mb-4">History</h4>
          <hr className="border-t-2 border-blue-800 mb-4" />
          <p className="text-gray-800 leading-relaxed">
            The John Simpson Odette Student Investment Fund was formed in the
            Fall of 2016 by Odette alumnus and the Managing Director of
            Ridgewood Capital Asset Management, John Simpson.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            The fund offers students the opportunity to manage a diversified
            investment portfolio of real capital in the financial markets.
            JSOSIF is the first student-led investment fund housed within the
            Odette Exchange Financial Markets Lab at the Odette School of
            Business. Through the help of faculty advisors and external
            industry experts, students are mentored through a live process that
            allows them to gain real-world experience.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
        <div className="px-8 py-12 flex flex-col md:flex-row justify-center items-start gap-16">
            <div className="max-w-md w-full">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">Mission Statement</h4>
            <hr className="border-t-2 border-blue-800 mb-4" />
            <p className="text-gray-800 leading-relaxed">
            The John Simpson Odette Student Investment Fund (JSOSIF) aims to provide
            students at the University of Windsor with valuable financial experience
            by facilitating the investment of real capital in financial markets. JSOSIF
            will generate returns by taking long-term positions in securities that fit
            the fund’s investment philosophy.
            </p>
        </div>

            {/* Image Section */}
            <div className="relative max-w-md w-full flex items-stretch">
                <Image
                src={jsosifpencil}
                alt="Vision Graphic"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>


      {/* Vision Statement */}
        <div className="px-8 py-12 flex flex-col md:flex-row justify-center items-start gap-16">
        {/* Image Section */}
        <div className="relative max-w-md w-full flex items-stretch">
            <Image
            src={jsosifhand}
            alt="Vision Graphic"
            className="w-full h-full object-cover rounded-lg"
            />
        </div>

        {/* Text Section */}
        <div className="max-w-md w-full">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">Vision Statement</h4>
            <hr className="border-t-2 border-blue-800 mb-4" />
            <p className="text-gray-800 leading-relaxed">
            JSOSIF is a student-run portfolio that manages funds donated by a private
            investor (John Simpson, Managing Director of Ridgewood Capital Asset
            Management, and alumnus of Odette). JSOSIF invests in a range of
            international equities, fixed income securities, and exchange-traded funds
            (“ETF”). The Odette School of Business uses JSOSIF as an educational tool
            for undergraduate and graduate business students looking to concentrate in
            Finance. JSOSIF’s purpose is to create an experiential learning environment
            in dealing with trading in capital markets and provides exposure to several
            strategies in managing a well-diversified and constantly monitored portfolio.
            JSOSIF aspires to be the benchmark of student investment funds throughout
            Canada by engaging with Odette alumni, current members, and industry.
            </p>
        </div>
        </div>

    </div>
  );
}
