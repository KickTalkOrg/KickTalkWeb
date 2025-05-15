"use client";

import "../page.css";
import "./page.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Changelog() {
  const changelogs = [
    {
      date: "May 15th, 2025",
      version: "v. 1.0.3",
      isLatest: true,
      major: "Major Updates:",
      majorUpdates: [
        "Added Reply functionality",
        "Added Reply Threads functionality",
        "@ mentions can now be clicked to open user dialog",
        "Added old logs on initial chatroom load to user dialog",
        "Added Limited Context menu",
        "Added Timestamp options (h:mm, hh:mm, etc.)",
        "Added Unpin functionality",
      ],
      minorUpdates: [
        "Middle click on streamer name to open their stream in a browser tab",
        "Fixed /user not working when having @ in username",
        "Fixed duplicate emotes in emote menu when : completing",
        "Fixed bug when you used up or down arrow in : or @ menus it wouldnt select right index",
      ],
    },
    // {
    //   date: "May 3rd, 2025",
    //   version: "v. 1.0.2",
    //   isLatest: false,
    //   major: "Major Updates:",
    // },
    // {
    //   date: "May 2nd, 2025",
    //   version: "v. 1.0.2",
    //   isLatest: false,
    //   major: "Major Updates:",
    // },
  ];

  const handleDownload = () => {
    window.open("http://api.kicktalk.app/download", "_self");
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("version") === "latest") {
      handleDownload();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [searchParams]);

  return (
    <div className="homeContainer changelogContainer">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link href="/" className="homeHeaderLeftLogo">
            <Image src={logo} alt="KickTalk Logo" priority width={100} height={100} />
          </Link>
        </div>
        <div className="homeHeaderRight">
          <div className="homeHeaderRightCreators">
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
      </div>

      <div className="homeDivider" />

      <div className="homeBody">
        <div className="homeBodyHead changelogHead">
          <div className="homeBodyHeadLeftTitle changelogTitle">
            <h1>{searchParams.get("version") === "latest" ? "New version downloaded! Whats changed?" : "What's new?"}</h1>
            <span>View all changes we have made to the current version you downloaded.</span>

            <div className="changelogDownloadButton">
              <p>Latest version didn't download?</p>
              <button className="download-button" onClick={handleDownload}>
                Download
              </button>
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
