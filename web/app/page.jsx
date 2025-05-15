"use client";

import Image from "next/image";
import "./page.css";
import { useState } from "react";
import logo from "../public/logo.svg";
import card1 from "../public/app_screenshots/card-1.png";
import card2 from "../public/app_screenshots/card-2.png";
import card3 from "../public/app_screenshots/card-3.png";
import card4 from "../public/app_screenshots/card-4.png";
import card5 from "../public/app_screenshots/card-5.png";
import Loader from "./loader";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}

      {isLoaded && (
        <div className="homeContainer">
          <header className="homeHeader">
            <div className="homeHeaderLeft">
              <Image src={logo} alt="KickTalk logo" priority width={100} height={100} />
            </div>
            <div className="homeHeaderRight">
              <p>
                Created by{" "}
                <a href="https://x.com/drkerco" target="_blank" rel="noopener noreferrer">
                  DRKNESS
                </a>{" "}
                and{" "}
                <a href="https://x.com/ftk789yt" target="_blank" rel="noopener noreferrer">
                  ftk789
                </a>
              </p>
            </div>
          </header>

          <hr className="homeDivider" />

          <main className="homeBody">
            <section className="homeBodyHead">
              <div className="homeBodyHeadLeft">
                <span className="homeBodyHeadLeftTitle">KickTalk</span>
                <h1>A Kick Chat client to elevate your chatting experience.</h1>
              </div>
              <div className="homeBodyHeadRight">
                <button
                  className="homeBodyHeadRightButton download"
                  onClick={async () => {
                    window.open("/changelog", "_self");
                  }}>
                  Download the Beta
                </button>
                <button
                  className="homeBodyHeadRightButton discord"
                  onClick={() => window.open("https://discord.gg/nFrZaxJmdn", "_blank")}>
                  Join our Discord
                </button>
              </div>
            </section>

            <section className="homeBodyScreenshots">
              {[
                {
                  img: card1,
                  title: "Settings Dialog",
                  desc: "Customize your experience and how chat looks within the Settings.",
                },
                {
                  img: card2,
                  title: "Smooth UI",
                  desc: "Experience a very elegant and satisfying UI with KickTalk.",
                },
                {
                  img: card3,
                  title: "User Dialogs",
                  desc: "Click on a user to view their logs available within the User Dialogs.",
                },
                {
                  img: card4,
                  title: "Native Functionality",
                  desc: "Use and view Kick’s native functionality with better enhancements.",
                },
                {
                  img: card5,
                  title: "Emote Dialogs",
                  desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                },
              ].map(({ img, title, desc }, idx) => (
                <div className="screenshotItem" key={idx}>
                  <Image src={img} alt={title} />
                  <div className="homeBodyScreenshotsFooter">
                    <h3>{title}</h3>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      )}
    </>
  );
}
