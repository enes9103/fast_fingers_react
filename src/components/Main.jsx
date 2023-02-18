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
    //inputa girilen text
    dispatch(setInputText(e.target.value));

    if (!start) {
      dispatch(setDecreaseTime());
      dispatch(setGameStart());
    }
  };

  //space tusuna basılınca olacak
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  let yut;

  window.onkeyup = (e) => {
    let ert = document.querySelector(".keyboard");

    let qwe = ert.children;

    for (let i = 0; i < qwe.length; i++) {
      if (qwe[i].value == e.which) {
        qwe[i].style.backgroundColor = "red";
        qwe[i].style.transform = "scale(0.9)";
        sacma();

        yut = qwe[i].value;
      }
    }

    setTimeout(sacma, 50);
  };

  const sacma = () => {
    let cv = document.getElementsByClassName("tus");

    let qw = cv;

    for (let i = 0; i < qw.length; i++) {
      if (qw[i].value == yut) {
        qw[i].style.backgroundColor = "#E5E5E5";
        qw[i].style.transform = "scale(1)";
      }
    }
  };

  return (
    <div className="ert">
      <div className="keyboard">
        <button value="192" className="a1 tus">
          é
        </button>
        <button value="49" className="a2 tus">
          1
        </button>
        <button value="50" className="a3 tus">
          2
        </button>
        <button value="51" className="a4 tus">
          3
        </button>
        <button value="52" className="a5 tus">
          4
        </button>
        <button value="53" className="a6 tus">
          5
        </button>
        <button value="54" className="a7 tus">
          6
        </button>
        <button value="55" className="a8 tus">
          7
        </button>
        <button value="56" className="a9 tus">
          8
        </button>
        <button value="57" className="a10 tus">
          9
        </button>
        <button value="48" className="a11 tus">
          0
        </button>
        <button value="223" className="a12 tus">
          ?
        </button>
        <button value="189" className="a13 tus">
          -
        </button>
        <button value="8" className="a14 tus">
          Delete
        </button>
        <button value="9" className="a15 tus">
          Tab
        </button>
        <button value="81" className="a16 tus">
          Q
        </button>
        <button value="87" className="a17 tus">
          W
        </button>
        <button value="69" className="a18 tus">
          E
        </button>
        <button value="82" className="a19 tus">
          R
        </button>
        <button value="84" className="a20 tus">
          T
        </button>
        <button value="89" className="a21 tus">
          Y
        </button>
        <button value="85" className="a22 tus">
          U
        </button>
        <button value="73" className="a23 tus">
          I
        </button>
        <button value="79" className="a24 tus">
          O
        </button>
        <button value="80" className="a25 tus">
          P
        </button>
        <button value="219" className="a26 tus">
          Ğ
        </button>
        <button value="221" className="a27 tus">
          Ü
        </button>
        <button value="13" className="a28 tus">
          Enter
          {/* <button className="a64 tus"  value="Enter"></button> */}
        </button>
        <button value="20" className="a29 tus">
          Caps Lock
        </button>
        <button value="65" className="a30 tus">
          A
        </button>
        <button value="83" className="a31 tus">
          S
        </button>
        <button value="68" className="a32 tus">
          D
        </button>
        <button value="70" className="a33 tus">
          F
        </button>
        <button value="71" className="a34 tus">
          G
        </button>
        <button value="72" className="a35 tus">
          H
        </button>
        <button value="74" className="a36 tus">
          J
        </button>
        <button value="75" className="a37 tus">
          K
        </button>
        <button value="76" className="a38 tus">
          L
        </button>
        <button value="186" className="a39 tus">
          Ş
        </button>
        <button value="222" className="a40 tus">
          İ
        </button>
        <button value="188" className="a41 tus">
          ,
        </button>
        <button value="13" className="a63 tus"></button>

        <button value="16" className="a42 tus">
          Shift
        </button>
        <button value="226" className="a43 tus">
          {" "}
          ‹ ›{" "}
        </button>
        <button value="90" className="a44 tus">
          Z
        </button>
        <button value="88" className="a45 tus">
          X
        </button>
        <button value="67" className="a46 tus">
          C
        </button>
        <button value="86" className="a47 tus">
          V
        </button>
        <button value="66" className="a48 tus">
          B
        </button>
        <button value="78" className="a49 tus">
          N
        </button>
        <button value="77" className="a50 tus">
          M
        </button>
        <button value="191" className="a51 tus">
          Ö
        </button>
        <button value="220" className="a52 tus">
          Ç
        </button>
        <button value="190" className="a53 tus">
          .
        </button>
        <button value="16" className="a54 tus">
          Shift
        </button>
        <button value="17" className="a55 tus">
          Ctrl
        </button>
        <button value="91" className="a56 tus">
          Cmd
        </button>
        <button value="18" className="a57 tus">
          Alt
        </button>
        <button value="32" className="a58 tus">
          Space
        </button>
        <button value="92" className="a59 tus">
          Cmd
        </button>
        <button value="18" className="a60 tus">
          Alt Gr
        </button>
        <button value="93" className="a61 tus">
          Start
        </button>
        <button value="17" className="a62 tus">
          Ctrl
        </button>
      </div>
      <div className="flex items-center justify-center mt-12">
        <input
          type="text"
          placeholder="Başla..."
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
