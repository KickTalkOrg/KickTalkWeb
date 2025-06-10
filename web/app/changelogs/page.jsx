"use client";

import "../page.css";
import "./page.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import githubIcon from "../../public/github.svg";
import { useSearchParams } from "next/navigation";
import Donator from "../../public/Donator.webp";
function ChangelogComponent() {
  const searchParams = useSearchParams();
  const changelogs = [
    {
      date: "June 9th, 2025",
      version: "v. 1.1.3",
      isLatest: true,
      major: "Major Updates:",
      majorUpdates: [
        "DONATIONS: We added donations and any is appreciated. You get a 3D badge within the chatroom made by d9 (dark)",
        "THEMES: Added Themes (Dark, Black, Blue, Red, Purple) — change in settings (dark)",
        "HIGHLIGHTS & MENTIONS TAB: View all highlights in that tab. Add it the same place you add chatrooms (dark)",
        "CUSTOM NOTIFICATION SOUNDS: Upload custom highlight sounds from Settings (ftk - dark)",
        "HIGHLIGHT REPLIES: Replies to messages are now included in highlights (dark)",
        "MESSAGE BATCHING: New batching mode in settings for slower-paced message flow, like Twitch (ftk)",
        "7TV EMOTE SET UPDATES: Set auto-sync now when changes are made. View changes (added/removed/renamed) in the chatroom (dark)",
        "NEW MESSAGE INDICATOR: Visual indicator for unseen messages in chatrooms (dark)",
      ],
      minorUpdates: [
        "ZERO-WIDTH 7TV EMOTES: Now supported (dark)",
        "HIGHLIGHT OPACITY: Control opacity of highlight pings in Settings (dark)",
        "EMOTE AUTOCOMPLETE FIX: Fixed emote order when using colon or tab (dark)",
        "CTRL + SCROLL ZOOM: Zoom in/out of chat using Ctrl + Mouse scroll (dark)",
        "PINNED MESSAGES: Show 'sent by' at the top now (dark)",
        "EMOTE DIALOG SCROLL FIX: Fixed scrolling issue when hovering emotes (dark)",
        "7TV EMOTE DATE: Hover an emote to see the date it was added (dark)",
        "EMOTE RIGHT CLICK LINKS: View 7tv/1x/2x/4x links via right click (dark)",
        "PIN FROM USER DIALOG: Added pinning functionality in user dialog messages (dark)",
        "HIDE INFO BAR: Toggle to hide info bar (followers only mode, etc) in settings (dark)",
        "RIGHT CLICK SEARCH: Right click streamer name bar to search (dark)",
        "TIMESTAMP DROPDOWN: Timestamps setting now uses a single dropdown with a 'Disabled' option (dark)",
      ],
    },

    // {
    //   date: "May 29th, 2025",
    //   version: "v. 1.1.1",
    //   isLatest: true,
    //   major: "Major Updates:",
    //   majorUpdates: [
    //     "NEW SETTINGS DIALOG: COMPLETELY NEW SETTINGS DIALOG (dark)",
    //     "TAB AUTO COMPLETE EMOTES: Tab Auto Completion for Emotes (ftk)",
    //     "NOTIFICATION SOUNDS: Sound Notifications for Highlights now work for [default sound only] (ftk - dark)",
    //     "REFRESH EMOTES: Added right click menu for Refreshing 7TV & Kick Emotes or click F5 (dark)",
    //     "STREAM CARD: Stream Card added when you hover title, shows viewers and title + thumbnail (dark)",
    //     "FILTER EMOTES: Emote Dialogs (7TV & Kick) filter by channel or global set (dark)",
    //     "REORDER TABS: Drag & Drop Channel Tabs (ftk - dark)",
    //     "RENAME TABS: Rename Channel Tabs by double-clicking the username or right clicking the tab and selecting rename tab (dark)",
    //     "REPLY THREADS W/ EMOTES: Emotes and Emote dialogs are not added to Reply Threads (dark)",
    //     "SEARCH DIALOG: Search chatroom messages with Ctrl + F (dark)",
    //   ],
    //   minorUpdates: [
    //     "Updated few design elements (dark)",
    //     "User Cards now have badges (dark)",
    //     "Tooltips in Emote Dialogs to show name of emote (dark)",
    //     "Ctrl + T or Ctrl + J to open add new chatroom (dark - ftk)",
    //     "Added Auth Websocket Connection for live data (ftk)",
    //     "Right Click streamer name for dialog (dark)",
    //     "Confirmation Dialog when trying to logout (dark)",
    //     "Can now click on usernames on ban messages/timeout messages to open user dialog (dark)",
    //     "Fixed 7TV bug where pogchamp in xqc for example would show three because of past conflicts with 7tv (ftk)",
    //     "Fixed Kick-7TV having the same emotes, now 7TV takes priority (ftk)",
    //     "Auto Updater will now work after this build, so you no longer have to go to the website (dark)",
    //   ],
    // },
    // {
    //   date: "May 3rd, 2025",
    //   version: "v. 1.0.2",
    //   isLatest: false,
    //   major: "Major Updates:",
    //   majorUpdates: [
    //     "Added Reply functionality",
    //     "Added Reply Threads functionality",
    //     "@ mentions can now be clicked to open user dialog",
    //     "Added old logs on initial chatroom load to user dialog",
    //     "Added Limited Context menu",
    //     "Added Timestamp options (h:mm, hh:mm, etc.)",
    //     "Added Unpin functionality",
    //   ],
    //   minorUpdates: [
    //     "Middle click on streamer name to open their stream in a browser tab",
    //     "Fixed /user not working when having @ in username",
    //     "Fixed duplicate emotes in emote menu when : completing",
    //     "Fixed bug when you used up or down arrow in : or @ menus it wouldnt select right index",
    //   ],
    // },
    // {
    //   date: "May 2nd, 2025",
    //   version: "v. 1.0.2",
    //   isLatest: false,
    //   major: "Major Updates:",
    // },
  ];

  // const smallChangelogs = [
  //   {
  //     date: "May 15th, 2025",
  //     version: "v. 1.0.3",
  //     isLatest: true,
  //     major: "Major Updates:",
  //     majorUpdates: [
  //       "Added Reply functionality",
  //       "Added Reply Threads functionality",
  //       "@ mentions can now be clicked to open user dialog",
  //       "Added old logs on initial chatroom load to user dialog",
  //       "Added Limited Context menu",
  //       "Added Timestamp options (h:mm, hh:mm, etc.)",
  //       "Added Unpin functionality",
  //     ],
  //     minorUpdates: [
  //       "Middle click on streamer name to open their stream in a browser tab",
  //       "Fixed /user not working when having @ in username",
  //       "Fixed duplicate emotes in emote menu when : completing",
  //       "Fixed bug when you used up or down arrow in : or @ menus it wouldnt select right index",
  //     ],
  //   },
  // ];

  const handleDownload = () => {
    window.open("https://api.kicktalk.app/download", "_self");
  };

  useEffect(() => {
    if (searchParams.get("version") === "latest") {
      handleDownload();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [searchParams]);

  return (
    <div className="homeContainer changelogContainer">
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

      <div className="homeDivider changelogDivider" />

      <div className="homeBody">
        <div className="homeBodyHead changelogHead">
          <div className="homeBodyHeadLeftTitle changelogTitle">
            <h1>{searchParams.get("version") === "latest" ? "New version downloaded! Whats changed?" : "What's new?"}</h1>
            <span>View all changes we have made to the current version you downloaded.</span>

            <div className="changelogDownloadButton">
              <p>Latest version didn't download?</p>
              <Link href="https://api.kicktalk.app/download" className="download-button">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="changeLogsBody">
          {changelogs.map((entry, index) => (
            <div key={index} className={`changelog-entry ${!entry.isLatest ? "faded" : "latestRelease"}`}>
              <div className="changelog-entry-header">
                <h2 className={`changelog-date ${entry.isLatest ? "latest" : "old"}`}>{entry.date}</h2>
                <div className="changelog-version">
                  {entry.isLatest && <span className="latest-tag">LATEST</span>}
                  <span className="version-number">{entry.version}</span>
                </div>
              </div>

              <div className="homeDivider changelogDivider" />

              <div className="changelog-content">
                <div className="majorUpdates">
                  <p className="major-update">Major Updates:</p>
                  {entry.majorUpdates && (
                    <ul className="major-update-list">
                      {entry.majorUpdates.map((update, index) => (
                        <li className="major-update-item" key={index}>
                          {update}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="divider" />
                <div className="minorUpdates">
                  <p className="minor-update">Smaller Updates:</p>
                  {entry.minorUpdates && (
                    <ul className="minor-update-list">
                      {entry.minorUpdates.map((update, index) => (
                        <li className="minor-update-item" key={index}>
                          {update}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Changelog() {
  return (
    <Suspense fallback={<></>}>
      <ChangelogComponent />
    </Suspense>
  );
}
