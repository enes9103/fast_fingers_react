import { useSelector, useDispatch } from "react-redux";
import {
  setInputText,
  setKeyPress,
  setDecreaseTime,
  setGameStart,
} from "../redux/wordSlice";

const Main = () => {
  const dispatch = useDispatch();

  const inputText = useSelector((state) => state.speed.inputText);
  const start = useSelector((state) => state.speed.start);

  const handleChange = (e) => {
    //input text
    dispatch(setInputText(e.target.value));

    if (!start) {
      dispatch(setDecreaseTime());
      dispatch(setGameStart());
    }
  };

  //space event
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  let selectedKey;

  // keyboard event
  window.onkeyup = (e) => {
    let ert = document.querySelector(".keyboard");

    let qwe = ert.children;

    for (let i = 0; i < qwe.length; i++) {
      if (qwe[i].value == e.which) {
        qwe[i].style.backgroundColor = "red";
        qwe[i].style.transform = "scale(0.9)";
        handlePressKey();

        selectedKey = qwe[i].value;
      }
    }

    setTimeout(handlePressKey, 50);
  };

  const handlePressKey = () => {
    let cv = document.getElementsByClassName("key");

    for (let i = 0; i < cv.length; i++) {
      if (cv[i].value == selectedKey) {
        cv[i].style.backgroundColor = "#E5E5E5";
        cv[i].style.transform = "scale(1)";
      }
    }
  };

  return (
    <div className="ert">
      <div className="keyboard">
        <button value="192" className="a1 key">
          é
        </button>
        <button value="49" className="a2 key">
          1
        </button>
        <button value="50" className="a3 key">
          2
        </button>
        <button value="51" className="a4 key">
          3
        </button>
        <button value="52" className="a5 key">
          4
        </button>
        <button value="53" className="a6 key">
          5
        </button>
        <button value="54" className="a7 key">
          6
        </button>
        <button value="55" className="a8 key">
          7
        </button>
        <button value="56" className="a9 key">
          8
        </button>
        <button value="57" className="a10 key">
          9
        </button>
        <button value="48" className="a11 key">
          0
        </button>
        <button value="223" className="a12 key">
          ?
        </button>
        <button value="189" className="a13 key">
          -
        </button>
        <button value="8" className="a14 key">
          Delete
        </button>
        <button value="9" className="a15 key">
          Tab
        </button>
        <button value="81" className="a16 key">
          Q
        </button>
        <button value="87" className="a17 key">
          W
        </button>
        <button value="69" className="a18 key">
          E
        </button>
        <button value="82" className="a19 key">
          R
        </button>
        <button value="84" className="a20 key">
          T
        </button>
        <button value="89" className="a21 key">
          Y
        </button>
        <button value="85" className="a22 key">
          U
        </button>
        <button value="73" className="a23 key">
          I
        </button>
        <button value="79" className="a24 key">
          O
        </button>
        <button value="80" className="a25 key">
          P
        </button>
        <button value="219" className="a26 key">
          Ğ
        </button>
        <button value="221" className="a27 key">
          Ü
        </button>
        <button value="13" className="a28 key">
          Enter
          {/* <button className="a64 key"  value="Enter"></button> */}
        </button>
        <button value="20" className="a29 key">
          Caps Lock
        </button>
        <button value="65" className="a30 key">
          A
        </button>
        <button value="83" className="a31 key">
          S
        </button>
        <button value="68" className="a32 key">
          D
        </button>
        <button value="70" className="a33 key">
          F
        </button>
        <button value="71" className="a34 key">
          G
        </button>
        <button value="72" className="a35 key">
          H
        </button>
        <button value="74" className="a36 key">
          J
        </button>
        <button value="75" className="a37 key">
          K
        </button>
        <button value="76" className="a38 key">
          L
        </button>
        <button value="186" className="a39 key">
          Ş
        </button>
        <button value="222" className="a40 key">
          İ
        </button>
        <button value="188" className="a41 key">
          ,
        </button>
        <button value="13" className="a63 key"></button>

        <button value="16" className="a42 key">
          Shift
        </button>
        <button value="226" className="a43 key">
          ‹ ›
        </button>
        <button value="90" className="a44 key">
          Z
        </button>
        <button value="88" className="a45 key">
          X
        </button>
        <button value="67" className="a46 key">
          C
        </button>
        <button value="86" className="a47 key">
          V
        </button>
        <button value="66" className="a48 key">
          B
        </button>
        <button value="78" className="a49 key">
          N
        </button>
        <button value="77" className="a50 key">
          M
        </button>
        <button value="191" className="a51 key">
          Ö
        </button>
        <button value="220" className="a52 key">
          Ç
        </button>
        <button value="190" className="a53 key">
          .
        </button>
        <button value="16" className="a54 key">
          Shift
        </button>
        <button value="17" className="a55 key">
          Ctrl
        </button>
        <button value="91" className="a56 key">
          Cmd
        </button>
        <button value="18" className="a57 key">
          Alt
        </button>
        <button value="32" className="a58 key">
          Space
        </button>
        <button value="92" className="a59 key">
          Cmd
        </button>
        <button value="18" className="a60 key">
          Alt Gr
        </button>
        <button value="93" className="a61 key">
          Start
        </button>
        <button value="17" className="a62 key">
          Ctrl
        </button>
      </div>
      <div className="flex items-center justify-center mt-12">
        <input
          type="text"
          placeholder="Start test..."
          className="border-indigo-400 border-4 border-solid rounded-md w-1/3 h-20 p-3 bg-inherit placeholder:text-indigo-800"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Main;
