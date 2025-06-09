"use client";

import Image from "next/image";
import "./page.css";
import { useState } from "react";
import logo from "../public/logo.svg";
import card1 from "../public/app_screenshots/card-1.jpg";
import card2 from "../public/app_screenshots/card-2.jpg";
import card3 from "../public/app_screenshots/card-3.jpg";
import card4 from "../public/app_screenshots/card-4.jpg";
import card5 from "../public/app_screenshots/card-5.jpg";
import card6 from "../public/app_screenshots/card-6.jpg";
import settingsDialog from "../public/app_screenshots/settingsDialog.jpg";
import Loader from "./loader";
import Link from "next/link";
import modActionsUserCard from "../public/app_screenshots/modActionsUserCard.png";
import modActionsPinning from "../public/app_screenshots/modActionsPinning.png";
import githubIcon from "../public/github.svg";
import Donator from "../public/Donator.webp";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}

      <div className="homeContainer">
        <div className="homeBodyDonationFlag">
          <span>
            Donate to support the development of KickTalk. Also get a special badge in chat!{" "}
            <Image src={Donator} alt="Donate Badge" width={32} height={32} />
          </span>
          <Link href="/donate">
            <span>
              Donate Now <img src="/arrowUpRight.svg" alt="Arrow Up Right" />
            </span>
          </Link>
        </div>
        <div className="homeHeader">
          <div className="homeHeaderLeft">
            <div className="homeHeaderLeftLogo">
              <Link href="/">
                <Image src={logo} alt="KickTalk Logo" priority width={100} height={100} />
              </Link>
              <button
                onClick={() => window.open("https://github.com/KickTalkOrg/KickTalk", "_blank")}
                className="homeHeaderLeftLogoButton">
                <Image src={githubIcon} alt="Github Icon" priority width={20} height={20} />
                <span>
                  Github <img src="/arrowUpRight.svg" alt="Arrow Up Right" />
                </span>
              </button>
            </div>
          </div>
          <div className="homeHeaderMiddle">
            <Link href="/">
              <span>Home</span>
              <div className="homeHeaderMiddleUnderline" />
            </Link>
            <Link href="/changelogs">
              <span>Changelogs</span>
              <div className="homeHeaderMiddleUnderline" />
            </Link>
            <Link href="/donate">
              <span>Donate</span>
              <div className="homeHeaderMiddleUnderline" />
            </Link>
          </div>
          <div className="homeHeaderRight">
            <p>
              Created by{" "}
              <a href="https://x.com/drkerco" target="_blank" rel="noopener noreferrer">
                DRKNESS_x
              </a>{" "}
              and{" "}
              <a href="https://x.com/ftk789yt" target="_blank" rel="noopener noreferrer">
                ftk789
              </a>
            </p>
          </div>
        </div>

        <div className="homeHeaderBackground" />

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
                title: "Smooth UI",
                desc: "Experience a very elegant, satisfying and smooth UI that is easy on the eyes.",
              },
              {
                img: card2,
                title: "Pinned Messages",
                desc: "View pinned messages in a chatroom. You can also pin your own messages to keep them at the top of the chat.",
              },
              {
                img: card3,
                title: "User Dialogs",
                desc: "Click on a user to view their logs in the channel plus mod actions available for channels where youre a mod.",
              },
              {
                img: card4,
                title: "Colon Completion",
                desc: "Easily access emote completion using the colon key and tab to autocomplete.",
              },
              {
                img: card5,
                title: "Emote Dialogs",
                desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
              },
              {
                img: card5,
                title: "Emote Dialogs",
                desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
              },
              {
                img: settingsDialog,
                isWide: true,
                title: "Settings Dialog",
                desc: "Customize your chatroom settings to your liking.",
              },
              {
                img: card6,
                title: "Reply Threads",
                desc: "Reply to messages and create threads to keep conversations organized. Threads are a custom feature built in only on KickTalk.",
              },
              {
                img: card6,
                title: "Reply Threads",
                desc: "Reply to messages and create threads to keep conversations organized. Threads are a custom feature built in only on KickTalk.",
              },
              {
                img: card6,
                title: "Reply Threads",
                desc: "Reply to messages and create threads to keep conversations organized. Threads are a custom feature built in only on KickTalk.",
              },
              // {
              //   // img: card7,
              //   title: "Chatters List",
              //   desc: "View a list of chatters in a chatroom. This is a custom feature built in only on KickTalk.",
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
              // {
              //   img: card5,
              //   title: "Emote Dialogs",
              //   desc: "Express yourself and enjoy picking your favorite emotes from 7TV to Kick emotes.",
              // },
            ].map(({ img, title, desc, isWide }, idx) => (
              <div className={`screenshotItem ${isWide ? "wide" : ""}`} key={idx}>
                <Image src={img} alt={title} />
                <div className="homeBodyScreenshotsFooter">
                  <h3>{title}</h3>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="homeDivider" />

        <div className="homeModActions">
          <div className="homeModActionsHeader">
            <span>Simplifying moderator actions at your finger tips.</span>
            <h1>Mod Actions</h1>
          </div>

          <div className="homeModActionsBody">
            <div className="homeModActionsBodyItem split">
              <div className="homeModActionsLeft">
                <h1 className="homeModActionsTitle">Mod Actions within User Cards</h1>
                <div className="homeModActionsLeftList">
                  <span>Ban Users</span>
                  <span>Unban Users</span>
                  <span>Timeout Users</span>
                  <span>View Chatroom Logs</span>
                  <span>and more to come...</span>
                </div>
              </div>
              <div className="homeModActionsRight">
                <Image src={modActionsUserCard} alt="Mod Actions in User Cards" />
              </div>
            </div>
            <div className="homeModActionsBodyItem middle">
              <h1 className="homeModActionsTitle">Pinning and Unpinning Messages</h1>
              <div className="homeModActionsMiddle">
                <Image src={modActionsPinning} alt="Pinning and Unpinning Messages" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
