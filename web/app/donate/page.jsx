"use client";

import "../page.css";
import "./page.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github.svg";
import donatorBadge from "../../public/Donator.webp";

export default function Changelog() {
  return (
    <div className="donateWrapper">
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

      <div className="donateBackground" />

      <div className="donateContent">
        <h1>Help us in our mission to make Kick a better chatting experience</h1>

        <p>
          Help us keep KickTalk running by donating to our project. We are a small team of developers who are passionate about
          creating a better chatting experience for everyone.
        </p>
        <div className="donationOptions">
          <div className="donationOption">
            <div className="donationOptionHeader">
              <div className="donationOptionHeaderText">
                <h1>10$</h1>
                <span>one-time</span>
              </div>

              <div className="donationOptionHeaderBadge">
                <Image src={donatorBadge} alt="Badge" width={80} height={80} />
              </div>
            </div>
            <div className="donationOptionDivider" />
            <div className="donationOptionBody">
              <span>What you get:</span>
              <p>A 3D rotating badge in KickTalk app near your username</p>
            </div>
            <div className="donationOptionDivider" />

            <div className="donationOptionBodyButton">
              <Link href="https://streamelements.com/kicktalkapp/tip" target="_blank" rel="noopener noreferrer">
                <span>Donate with StreamElements</span>{" "}
                <img src="/arrowUpRight.svg" alt="Arrow Up Right" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="donationSubText">
            <span>
              Donations are not refundable. If you have any issues with your donation, please contact us on{" "}
              <Link href="https://discord.gg/nFrZaxJmdn" target="_blank" rel="noopener noreferrer">
                Discord
              </Link>
              .
            </span>
            <span className="donationSubTextBadgeMadeBy">
              <span>Badge made by</span>
              <a href="https://x.com/_dn9n" target="_blank" rel="noopener noreferrer">
                d9
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
