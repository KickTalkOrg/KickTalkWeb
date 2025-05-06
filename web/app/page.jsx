import Image from "next/image";
import "./page.css";
import logo from "../public/logo.svg";
import screenshot1 from "@/public/app_screenshots/2.png";
export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <div className="homeHeaderLeftLogo">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
        </div>

        <div className="homeHeaderRight">
          <div className="homeHeaderRightCreators">
            <p>
              Created by{" "}
              <a href="https://x.com/drkerco" target="_blank">
                DRKNESS
              </a>{" "}
              and{" "}
              <a href="https://x.com/ftk789yt" target="_blank">
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
              onClick={() => window.open("https://api.kicktalk.app/download", "_blank")}>
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
            <Image src={screenshot1} alt="" />

            <div className="homeBodyScreenshotsFooter">
              <h3>KickTalk</h3>
              <span>A Kick Chat client to elevate your chatting experience.</span>
            </div>
          </div>
          <div className="screenshotItem">
            <Image src={screenshot1} alt="" />

            <div className="homeBodyScreenshotsFooter">
              <h3>KickTalk</h3>
              <span>
                A Kick Chat client to elevate your chatting experience. A Kick Chat client to elevate your chatting experience.
              </span>
            </div>
          </div>
          <div className="screenshotItem">
            <Image src={screenshot1} alt="" />

            <div className="homeBodyScreenshotsFooter">
              <h3>KickTalk</h3>
              <span>
                A Kick Chat client to elevate your chatting experience. A Kick Chat client to elevate your chatting experience.
              </span>
            </div>
          </div>
          <div className="screenshotItem">
            <Image src={screenshot1} alt="" />

            <div className="homeBodyScreenshotsFooter">
              <h3>KickTalk</h3>
              <span>
                A Kick Chat client to elevate your chatting experience. A Kick Chat client to elevate your chatting experience.
              </span>
            </div>
          </div>
          <div className="screenshotItem">
            <Image src={screenshot1} alt="" />

            <div className="homeBodyScreenshotsFooter">
              <h3>KickTalk</h3>
              <span>
                A Kick Chat client to elevate your chatting experience. A Kick Chat client to elevate your chatting experience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
