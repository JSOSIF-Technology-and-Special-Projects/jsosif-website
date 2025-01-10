"use client"
import jsosifbannerbw from '../assets/jsosifbannerbw.png';
import Image from 'next/image';
import React from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
import jsoifjoin from '../assets/jsosifjoin.png';

export default function Footer() {
  return (
    <footer>
      <div className="bg-black text-white text-left py-4 flex justify-between items-center">
        <div>
          <Image src={jsosifbannerbw} alt="Logo" className="w-40 h-30 ms-20"/>
          <h5 className="ms-20">
            Odette School of Business <br />
            University of Windsor<br />
            401 Sunset Avenue<br />
            Windsor, ON N9B 3P4
          </h5>
          <a href='https://www.linkedin.com/company/john-simpson-odette-student-investment-fund/' target="_blank">
              <i className="fa-brands fa-linkedin-in ms-20"></i>
          </a>
          <a href='https://www.instagram.com/jsosif/' target="_blank">
              <i className="fa-brands fa-instagram ms-10 "></i>
          </a>
        </div>
        <div className="me-20">
          <Image src={jsoifjoin} alt="Join JSOSIF" className="w-20 h-20"/>
        </div>
      </div>
      <div className="h-11 overflow-clip">
        <TickerTape colorTheme="light" isTransparent={false}></TickerTape>
      </div>
    </footer>
  );
}
