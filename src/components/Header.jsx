import React from "react";
import styled from "styled-components";
import { MdOutlineRestartAlt } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector, useDispatch } from "react-redux";
import { setReplay, setSelectedLang } from "../redux/wordSlice";

const Header = () => {
  
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setSelectedLang(e.target.value));
  };

  const time = useSelector((state) => state.speed.time);
  const start = useSelector((state) => state.speed.start);
  const wrongWord = useSelector((state) => state.speed.wrongWord);
  const correctWord = useSelector((state) => state.speed.correctWord);
  const selectedLang = useSelector((state) => state.speed.selectedLang);

  //swal
  const Swal = require("sweetalert2");

  //dispatch
  const dispatch = useDispatch();

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      Swal.fire({
        text: `${correctWord > 30 ? "Tebrikler!" : "Tekrar Dene!"}`,
        title: `✅ ${correctWord} 🚫 ${wrongWord}`,
      }).then((confirmButton) => {
        if (confirmButton.value) {
          dispatch(setReplay());
        }
      });
    } else {
      return (
        <div>
          {remainingTime} <br />
          <span className="text-slate-800"> Seconds </span>
        </div>
      );
    }
  };

  return (
    <header
      className="mx-auto container sticky top-0 bg-white shadow-md flex items-center text-center justify-center px-8 py-02"
      style={{
        background:
          "radial-gradient(circle, rgba(231,175,204,1) 8%, rgba(184,47,107,1) 15%, rgba(158,186,230,1) 81%, rgba(148,187,233,1) 91%)",
      }}
    >
      {/* timer */}
      <div className="w-4/12 text-center flex flex-wrap items-center">
   
          <CountdownCircleTimer
            key={time}
            isPlaying={start === true ? true : false}
            duration={time}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={100}
            unit="vw"
            strokeWidth={8}
          >
            {renderTime}
          </CountdownCircleTimer>
   
      </div>

      {/* title */}
      <div className="w-4/12 ">
        <nav className="nav font-semibold text-lg">
          <h1 className="text-[#35b8ad] font-bold text-[32px]">How fast are you?</h1>
        </nav>
      </div>
      {/* options -*/}
      <div className="w-4/12 flex justify-end items-center">
        <select name="Lang" onChange={handleChange} className="flex justify-center items-center w-24 h-9 text-gray-600 border-none mr-4 rounded-md">
          <option value="turkishWord" disabled={selectedLang === "turkishWord"} className="text-black flex min-h-5 p-2">
            Turkish
          </option>
          <option value="englishWord" disabled={selectedLang === "englishWord"} className="text-black flex min-h-5 p-2">
            English
          </option>
        </select> 

        <button onClick={() => dispatch(setReplay())}>
          <MdOutlineRestartAlt size={40} className="animas" />
        </button>
      </div>
    </header>
  );
};

export default Header;
