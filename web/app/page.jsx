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
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}

      {isLoaded && (
        <div className="homeContainer">
          <div className="homeHeader">
            <div className="homeHeaderLeft">
              <div className="homeHeaderLeftLogo">
                <Image src={logo} alt="KickTalk Logo" priority width={100} height={100} />
              </div>
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
                <Link className="homeBodyHeadRightButton download" href="/changelogs?version=latest">
                  Download the Beta
                </Link>
                <Link className="homeBodyHeadRightButton discord" href="https://discord.gg/nFrZaxJmdn" target="_blank">
                  Join our Discord
                </Link>
              </div>
            </div>

            <div className="homeBodyScreenshots">
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
                // {
                //   img: card5,
                //   title: "Emote Dialogs",
                //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                // },
                // {
                //   img: card5,
                //   title: "Emote Dialogs",
                //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                // },
                // {
                //   img: card5,
                //   title: "Emote Dialogs",
                //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                // },
                // {
                //   img: card5,
                //   title: "Emote Dialogs",
                //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                // },
                // {
                //   img: card5,
                //   title: "Emote Dialogs",
                //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
                // },
              ].map(({ img, title, desc }, idx) => (
                <div className="screenshotItem" key={idx}>
                  <Image src={img} alt={title} />
                  <div className="homeBodyScreenshotsFooter">
                    <h3>{title}</h3>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
