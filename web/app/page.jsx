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

      <div className="homeContainer">
        <div className="homeHeader">
          <div className="homeHeaderLeft">
            <div className="homeHeaderLeftLogo">
              <Image src={logo} alt="logo" priority width={100} height={100} />
            </div>
          </div>

          <div className="homeHeaderRight">
            <div className="homeHeaderRightCreators">
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
          </div>
        </div>

        <div className="homeDivider" />

        <div className="homeBody">
          <div className="homeBodyHead">
            <div className="homeBodyHeadLeft">
              <div className="homeBodyHeadLeftTitle">
                <span>KickTalk</span>
                <h1>A Kick Chat client to elevate your chatting experience.</h1>
              </div>
            </div>

            <div className="homeBodyHeadRight">
              <button
                className="homeBodyHeadRightButton download"
                onClick={() => window.open("https://api.kicktalk.app/downloads/KickTalkBetaTest.exe", "_blank")}>
                Download the Beta
              </button>
              <button
                className="homeBodyHeadRightButton discord"
                onClick={() => window.open("https://discord.gg/nFrZaxJmdn", "_blank")}>
                Join our Discord
              </button>
            </div>
          </div>

          <div className="homeBodyScreenshots">
            <div className="screenshotItem">
              <Image src={card1} alt="" />

              <div className="homeBodyScreenshotsFooter">
                <h3>Settings Dialog</h3>
                <span>Customize the chat to your liking. Make it your canvas all within the Settings.</span>
              </div>
            </div>
            <div className="screenshotItem">
              <Image src={card2} alt="" />

              <div className="homeBodyScreenshotsFooter">
                <h3>Smooth UI</h3>
                <span>Experience a very elegant, fast, smooth and a satesfyting UI with KickTalk.</span>
              </div>
            </div>
            <div className="screenshotItem">
              <Image src={card3} alt="" />

              <div className="homeBodyScreenshotsFooter">
                <h3>User Dialogs</h3>
                <span>Click on a user to view their User logs available within the User Dialogs.</span>
              </div>
            </div>
            <div className="screenshotItem">
              <Image src={card4} alt="" />

              <div className="homeBodyScreenshotsFooter">
                <h3>Native Functionality</h3>
                <span>You can still use and view Kick’s native functionality with better enhancements with KickTalk.</span>
              </div>
            </div>
            <div className="screenshotItem">
              <Image src={card5} alt="" />

              <div className="homeBodyScreenshotsFooter">
                <h3>Emote Dialogs</h3>
                <span>Express your feelings and enjoy picking your favorite emotes from 7TV to Kick emotes with KickTalk.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
