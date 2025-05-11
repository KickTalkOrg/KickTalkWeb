"use client";

import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Home() {
  return (
    <div className="downloadPage">
      <div className="downloadPageHead">
        <Image src={logo} alt="logo" />
      </div>
      <div className="downloadPageBody">
        <div className="downloadPageBodyHead">
          <h1>KickTalk is downloading...</h1>
        </div>
      </div>
    </div>
  );
}
