import React from "react";
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
        <div className="flex flex-col">
          <span className="text-[18px]"> {remainingTime} </span>
          <span className="text-slate-800 text-sm"> Seconds </span>
        </div>
      );
    }
  };

  return (
    <header
      className="flex items-center text-center justify-around sticky shadow-md py-2 px-8 py-02 w-full"
      style={{
        backgroundImage: 'linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)'
    }}
    >
      {/* timer */}
      <div>
          <CountdownCircleTimer
            key={time}
            isPlaying={start === true ? true : false}
            duration={time}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={90}
            unit="vw"
            strokeWidth={8}
          >
            {renderTime}
          </CountdownCircleTimer>
      </div>

      {/* title */}
      <div className="">
        <nav className="nav font-semibold text-lg">
          <h1 className="text-[#35b8ad] font-bold text-[32px]">How fast are you?</h1>
        </nav>
      </div>

      {/* options -*/}
      <div className="flex justify-end items-center">
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
