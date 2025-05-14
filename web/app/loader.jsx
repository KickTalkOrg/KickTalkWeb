import Image from "next/image";
import { useEffect, useState } from "react";
import "./loader.css";
import Klogo from "../public/K.svg";

export default function Loader({ onFinish }) {
  const [showText, setShowText] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const finishTimer = setTimeout(() => {
      setHideLoader(true);
      setTimeout(onFinish, 2000);
    }, 5000);
=======
    const textTimer = setTimeout(() => setShowText(true), 100);
    const finishTimer = setTimeout(() => {
      setHideLoader(true);
      setTimeout(onFinish, 1000);
    }, 1500);
>>>>>>> 1d11638edf58b35f7346236df6014ff9bed8a064

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`loaderContainer ${hideLoader ? "slideUp" : ""}`}>
      <div className={`logoWrapper ${hideLoader ? "logoWrapperFadeOut" : ""}`}>
        <Image src={Klogo} alt="Loader Logo" width={200} height={200} className="logoImage" />
      </div>
      {showText && (
        <p className="creatorText">
          Created by{" "}
          <a href="https://x.com/drkerco" target="_blank" rel="noopener noreferrer">
            DRKNESS
          </a>{" "}
          and{" "}
          <a href="https://x.com/ftk789yt" target="_blank" rel="noopener noreferrer">
            ftk789
          </a>
        </p>
      )}
    </div>
  );
}
