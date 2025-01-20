import React, { useState } from "react";
import "./Spinner.css";

function Spinner() {
  const [rotation, setRotation] = useState(0);
  const [play, setPlay] = useState(false);
  let [test, setTest] = useState(0);

  const handleSpin = () => {
    test = test + 1;
    const newRotation = rotation + Math.ceil(Math.random() * 10000);
    setRotation(newRotation);
    setTest(test);
    if (test > 3) {
      alert("Hết lần chơi thử. Lần này lấy thiệt nha!");
    }
    return;
  };

  const handleAudio = () => {
    if (play === false) {
      const audio = document.getElementById("audio");
      audio.src = "/audio/spin.mp3";
      audio.play();
      setPlay(true);
    }
  };

  if (test === 4) {
    document.getElementById("spin").disabled = true;
    document.getElementById("spin").innerText = "Hết lượt chơi";
    document.getElementById("spin").style.textAlign = "center";
  }

  return (
    <>
      <div className="lixi">
        <div className="day_treo_li_xi"></div>
        <img src="/img/baolixi.png" alt="" />
        <img src="/img/baolixi.png" alt="" />
        <img src="/img/baolixi.png" alt="" />
      </div>

      <div className="body">
        <audio id="audio" preload="auto"></audio>
        <div
          className="container"
          style={{ transform: `rotate(${rotation}deg)`, transition: "all 5s" }}
        >
          <div className="one">5K</div>
          <div className="two">10K</div>
          <div className="three">20K</div>
          <div className="four">50K</div>
          <div className="five">100K</div>
          <div className="six">200K</div>
        </div>
        <span className="mid"></span>
        <button
          id="spin"
          onClick={() => {
            handleSpin();
            handleAudio();
          }}
        >
          Lụm tiền!
        </button>
        <div className="stoper"></div>
      </div>
    </>
  );
}

export default Spinner;
